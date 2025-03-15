// Inicialización del mapa
const map = L.map('map').setView([-29.50947, -70.91726], 10);
// Capa base (OpenStreetMap)
const baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);
// Control de capas
const layerControl = L.control.layers(null, null, {
    collapsed: false,
    position: 'topright'
}).addTo(map);
// Manejo de temas
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tema = this.dataset.theme;
        limpiarMapa();
        cargarCapasGeoJSON(tema);
        actualizarLeyenda(tema);
    });
});
// Limpiar capas anteriores
function limpiarMapa() {
    map.eachLayer(layer => {
        // Mantenemos la capa base de OpenStreetMap
        if (layer !== baseLayer) {
            map.removeLayer(layer);
        }
    });
}
// Actualizar leyenda dinámica
function actualizarLeyenda(tema) {
    const leyendaContainer = document.getElementById('dynamic-legend');
    leyendaContainer.innerHTML = '';
    if (!temasConfig[tema] || !temasConfig[tema].leyenda) {
        console.warn(`No se encontró configuración de leyenda para el tema: ${tema}`);
        return;
    }
    Object.entries(temasConfig[tema].leyenda).forEach(([capa, config]) => {
        const leyendaHTML = `
            <div class="legend-section">
                <h6>${config.titulo}</h6>
                ${config.items.map(item => `
                    <div class="legend-item">
                        <div class="legend-color" style="background:${item.color}"></div>
                        <span>${item.label}</span>
                    </div>
                `).join('')}
            </div>
        `;
        leyendaContainer.insertAdjacentHTML('beforeend', leyendaHTML);
    });
}
// Cargar capas desde GeoJSON
function cargarCapasGeoJSON(tema) {
    const geoJsonPath = `geojson/${tema}.geojson`;
    if (!temasConfig[tema]) {
        console.error(`Tema no encontrado: ${tema}`);
        return;
    }
    const capas = temasConfig[tema].capas;
    if (!capas || !Array.isArray(capas) || capas.length === 0) {
        console.warn(`No hay capas definidas para el tema: ${tema}`);
        return;
    }
    capas.forEach(capaNombre => {
        if (!temasConfig[tema].estilo || !temasConfig[tema].estilo[capaNombre]) {
            console.warn(`No hay estilo definido para la capa: ${capaNombre}`);
            return;
        }
        const capaConfig = temasConfig[tema].estilo[capaNombre];
        // Opciones comunes para ambas capas
        const commonOptions = {
            style: (feature) => getEstiloCapa(feature, capaNombre, tema),
            onEachFeature: (feature, layer) => bindPopup(feature, layer, capaNombre, tema)
        };
        // Si es una capa de puntos (point)
        if (capaConfig.type === 'point') {
            commonOptions.pointToLayer = configurarPointToLayer(capaNombre, tema);
        }
        // Cargar la capa GeoJSON
        fetch(geoJsonPath)
            .then(response => response.json())
            .then(data => {
                const geoJsonLayer = L.geoJSON(data, commonOptions);
                geoJsonLayer.addTo(map);
                layerControl.addOverlay(geoJsonLayer, capaNombre);
            })
            .catch(error => {
                console.error(`Error cargando la capa ${capaNombre}:`, error);
            });
    });
}
// Función para estilizar capas
function getEstiloCapa(feature, capaNombre, tema) {
    if (!feature || !feature.geometry || !feature.geometry.type) {
        console.warn('Feature inválido o sin geometría');
        return {};
    }
    const config = temasConfig[tema].estilo[capaNombre];
    if (!config) return { color: '#333' };
    const atributoValor = feature.properties[config.atributo];
    // Para líneas (LineString o MultiLineString)
    if (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString') {
        return {
            ...(config.estiloBase || {}),
            color: config.colores[atributoValor] || '#CCC'
        };
    }
    // Para polígonos (Polygon o MultiPolygon)
    if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
        return {
            fillColor: config.colores[atributoValor] || '#CCC',
            color: '#2d3436',
            weight: 1,
            fillOpacity: 0.7
        };
    }
    // Para puntos (Point)
    if (feature.geometry.type === 'Point' || feature.geometry.type === 'MultiPoint') {
        return {};
    }
    return {};
}
// Para puntos, necesitamos usar pointToLayer en lugar de style
function configurarPointToLayer(capaNombre, tema) {
    return function(feature, latlng) {
        const config = temasConfig[tema].estilo[capaNombre];
        if (!config || !config.icono) return L.marker(latlng);
        return L.marker(latlng, {
            icon: L.icon({
                iconUrl: `assets/icons/${config.icono}`,
                iconSize: [32, 32]
            })
        });
    };
}
// Generar popups
function bindPopup(feature, layer, capaNombre, tema) {
    if (!feature || !feature.properties) return;
    const config = temasConfig[tema].estilo[capaNombre];
    if (!config || !config.popupCampos) return;
    const campos = config.popupCampos;
    let contenido = '<div class="popup-content">';
    campos.forEach(campo => {
        const valor = feature.properties[campo] !== undefined ? feature.properties[campo] : 'No disponible';
        contenido += `<p><strong>${campo}:</strong> ${valor}</p>`;
    });
    contenido += '</div>';
    layer.bindPopup(contenido);
}
// Función para obtener el centro del mapa
function obtenerCentroMapa() {
    const centro = map.getCenter();
    return `Centro: ${centro.lat.toFixed(6)}, ${centro.lng.toFixed(6)}`;
}
// Crear un elemento para mostrar el centro
const centroMapaDiv = document.createElement('div');
centroMapaDiv.style.position = 'absolute';
centroMapaDiv.style.bottom = '10px';
centroMapaDiv.style.left = '50%';
centroMapaDiv.style.transform = 'translateX(-50%)';
centroMapaDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
centroMapaDiv.style.padding = '5px';
centroMapaDiv.style.borderRadius = '5px';
document.getElementById('map').appendChild(centroMapaDiv);
// Función para actualizar el centro del mapa
function actualizarCentroMapa() {
    centroMapaDiv.textContent = obtenerCentroMapa();
}
// Actualizar el centro al moverlo
map.on('moveend', actualizarCentroMapa);
// Inicializar el centro inmediatamente
actualizarCentroMapa();