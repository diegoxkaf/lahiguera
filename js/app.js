// Variable para almacenar referencias a las capas añadidas
let capasPorNombre = {};
let capasOrdenadas = []; // Arreglo para mantener el orden de las capas
let capaBaseActual = null; // Capa base actualmente seleccionada

// Inicialización del mapa
const map = L.map('map').setView([-29.50947, -70.91726], 10);

// Capas base
const capasBase = {};
Object.keys(capasBaseConfig).forEach(key => {
    capasBase[key] = L.tileLayer(capasBaseConfig[key].url, {
        attribution: '© OpenStreetMap'
    });
});

// Capa base inicial (OpenStreetMap)
capaBaseActual = capasBase['openStreetMap'];
capaBaseActual.addTo(map);

// Función para limpiar todas las capas excepto la base
function limpiarMapa() {
    map.eachLayer(layer => {
        if (layer !== capaBaseActual && layer.options && layer.options.layerName) {
            map.removeLayer(layer);
        }
    });
    capasPorNombre = {};
}

// Actualizar leyenda dinámica
function actualizarLeyenda(tema) {
    const sidebarLegendContainer = document.getElementById('sidebar-legend');
    sidebarLegendContainer.innerHTML = '';
    if (!temasConfig[tema] || !temasConfig[tema].leyenda) {
        console.warn(`No se encontró configuración de leyenda para el tema: ${tema}`);
        return;
    }
    Object.entries(temasConfig[tema].leyenda).forEach(([capa, config]) => {
        const sidebarLeyendaHTML = `
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
        sidebarLegendContainer.insertAdjacentHTML('beforeend', sidebarLeyendaHTML);
    });
}

// Transformar coordenadas de EPSG:3857 a EPSG:4326
function transformCoordinates(data) {
    if (data.crs && data.crs.properties.name === "urn:ogc:def:crs:EPSG::3857") {
        const transformedFeatures = data.features.map(feature => {
            if (feature.geometry.type === 'Point') {
                const latlng = L.Projection.SphericalMercator.unproject(L.point(feature.geometry.coordinates));
                feature.geometry.coordinates = [latlng.lng, latlng.lat];
            } else if (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString') {
                feature.geometry.coordinates = feature.geometry.coordinates.map(coords => {
                    const latlng = L.Projection.SphericalMercator.unproject(L.point(coords));
                    return [latlng.lng, latlng.lat];
                });
            } else if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
                feature.geometry.coordinates = feature.geometry.coordinates.map(ring => {
                    return ring.map(coords => {
                        const latlng = L.Projection.SphericalMercator.unproject(L.point(coords));
                        return [latlng.lng, latlng.lat];
                    });
                });
            }
            return feature;
        });
        return {
            ...data,
            features: transformedFeatures,
            crs: { type: "name", properties: { name: "urn:ogc:def:crs:EPSG::4326" } } // Actualizar el CRS a EPSG:4326
        };
    }
    return data; // Devolver los datos sin transformación si no es EPSG:3857
}

// Cargar capas desde GeoJSON
function cargarCapasGeoJSON(tema) {
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
        const geoJsonPath = `geojson/${capaNombre}.geojson`; // Ruta al archivo GeoJSON
        // Opciones comunes para ambas capas
        const commonOptions = {
            style: (feature) => getEstiloCapa(feature, capaNombre, tema),
            onEachFeature: (feature, layer) => bindPopup(feature, layer, capaNombre, tema),
            layerName: capaNombre // Agregar nombre de la capa para identificación
        };
        // Si es una capa de puntos (point)
        if (capaConfig.type === 'point') {
            commonOptions.pointToLayer = configurarPointToLayer(capaNombre, tema);
        }
        // Cargar la capa GeoJSON
        fetch(geoJsonPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Transformar coordenadas si están en EPSG:3857
                const transformedData = transformCoordinates(data);
                const geoJsonLayer = L.geoJSON(transformedData, commonOptions);
                // Guardar referencia a la capa
                capasPorNombre[capaNombre] = geoJsonLayer;
                // Añadir la capa al mapa
                geoJsonLayer.addTo(map);
                // Agregar etiquetas si están definidas en la configuración
                agregarEtiquetas(geoJsonLayer, capaConfig);
                console.log(`Capa ${capaNombre} cargada correctamente`);
                // Asegurarse de que la capa esté en el orden correcto
                actualizarOrdenCapas();
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
            ...(config.estiloBase || {}),
            fillColor: config.colores[atributoValor] || '#CCC',
            fillOpacity: config.estiloBase.fillOpacity !== undefined ? config.estiloBase.fillOpacity : 0.7
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
        if (!config) return L.circleMarker(latlng);
        const atributoValor = feature.properties[config.atributo];
        const iconoPersonalizado = config.iconos && config.iconos[atributoValor];
        if (iconoPersonalizado) {
            return L.marker(latlng, {
                icon: L.icon({
                    iconUrl: `assets/icons/${iconoPersonalizado}`,
                    iconSize: [32, 32]
                })
            });
        } else {
            // Usar estilo alternativo si no hay icono personalizado
            return L.circleMarker(latlng, {
                ...(config.estiloAlternativo || {})
            });
        }
    };
}

// Generar popups
function bindPopup(feature, layer, capaNombre, tema) {
    if (!feature || !feature.properties) return;
    const config = temasConfig[tema].estilo[capaNombre];
    if (!config || !config.popupCampos || !config.alias) return;
    const campos = config.popupCampos;
    let contenido = '<div class="popup-content">';
    campos.forEach(campo => {
        const alias = config.alias[campo] || campo; // Obtener el alias o usar el campo original
        const valor = feature.properties[campo] !== undefined ? feature.properties[campo] : 'No disponible';
        contenido += `<p><strong>${alias}:</strong> ${valor}</p>`;
    });
    contenido += '</div>';
    layer.bindPopup(contenido);
}

// Función para agregar etiquetas a las capas utilizando L.tooltip
function agregarEtiquetas(layer, capaConfig) {
    if (!capaConfig.etiquetas) return;
    const { campo, estilo } = capaConfig.etiquetas;
    layer.eachLayer(featureLayer => {
        const feature = featureLayer.feature;
        if (!feature || !feature.properties || !feature.properties[campo]) return;
        const labelText = feature.properties[campo];
        const labelStyle = {
            color: estilo.color,
            fontSize: estilo.fontSize,
            fontFamily: estilo.fontFamily,
            backgroundColor: estilo.backgroundColor,
            padding: estilo.padding,
            borderRadius: estilo.borderRadius
        };
        let labelPosition;
        if (feature.geometry.type === 'Point') {
            labelPosition = featureLayer.getLatLng();
        } else if (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString') {
            labelPosition = featureLayer.getBounds().getCenter();
        } else if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
            labelPosition = featureLayer.getBounds().getCenter();
        }
        if (!labelPosition) return;
        const tooltip = L.tooltip({
            permanent: true, // Mantener la etiqueta visible siempre
            offset: L.point(0, 0), // Posición relativa al elemento
            opacity: 1 // Opacidad de la etiqueta
        })
        .setContent(`<div style="color: ${labelStyle.color}; font-size: ${labelStyle.fontSize}; font-family: ${labelStyle.fontFamily}; background-color: ${labelStyle.backgroundColor}; padding: ${labelStyle.padding}; border-radius: ${labelStyle.borderRadius};">${labelText}</div>`)
        .setLatLng(labelPosition);
        featureLayer.bindTooltip(tooltip);
    });
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

// Actualizar capas en el sidebar derecho
function actualizarCapasSidebar(tema) {
    const layerList = document.getElementById('sidebar-layers');
    layerList.innerHTML = ''; // Limpiar la lista de capas

    // Obtener todas las capas disponibles en todos los temas
    const todasLasCapas = {};
    Object.keys(temasConfig).forEach(t => {
        if (temasConfig[t].capas) {
            temasConfig[t].capas.forEach(capa => {
                if (!todasLasCapas[capa]) {
                    todasLasCapas[capa] = true;
                }
            });
        }
    });

    // Crear elementos para cada capa
    Object.keys(todasLasCapas).forEach(capaNombre => {
        const capaItem = document.createElement('div');
        capaItem.className = 'form-check mb-2 d-flex justify-content-between align-items-center';
        capaItem.setAttribute('data-capa', capaNombre); // Identificador para la capa

        // Obtener el nombre personalizado si existe
        let nombreMostrar = capaNombre;
        Object.keys(temasConfig).forEach(t => {
            if (
                temasConfig[t].estilo &&
                temasConfig[t].estilo[capaNombre] &&
                temasConfig[t].estilo[capaNombre].nombrePersonalizado
            ) {
                nombreMostrar = temasConfig[t].estilo[capaNombre].nombrePersonalizado;
            }
        });

        // Checkbox y label
        const checkboxContainer = document.createElement('div');
        checkboxContainer.innerHTML = `
            <input class="form-check-input" type="checkbox" value="${capaNombre}" id="check-${capaNombre}">
            <label class="form-check-label ms-2" for="check-${capaNombre}">
                ${nombreMostrar}
            </label>
        `;

        // Botones de control Z-index
        const botonesContainer = document.createElement('div');
        botonesContainer.innerHTML = `
            <button class="btn btn-sm btn-light move-up me-1" data-capa="${capaNombre}" title="Mover arriba">
                <i class="fas fa-arrow-up"></i>
            </button>
            <button class="btn btn-sm btn-light move-down" data-capa="${capaNombre}" title="Mover abajo">
                <i class="fas fa-arrow-down"></i>
            </button>
        `;

        // Añadir los elementos al contenedor de la capa
        capaItem.appendChild(checkboxContainer);
        capaItem.appendChild(botonesContainer);
        layerList.appendChild(capaItem);

    
        // Evento para manejar la activación/desactivación de capas
const checkbox = document.getElementById(`check-${capaNombre}`);
checkbox.addEventListener('change', function() {
    if (this.checked) {
        // Si se marca el checkbox
        if (!capasPorNombre[capaNombre]) {
            // Si la capa no está cargada, cargarla
            cargarCapaIndividual(capaNombre);
        } else {
            // Si ya está cargada, solo mostrarla
            map.addLayer(capasPorNombre[capaNombre]);
        }
    } else {
        // Si se desmarca el checkbox y la capa existe
        if (capasPorNombre[capaNombre]) {
            // Verificar que la capa esté realmente en el mapa antes de intentar eliminarla
            if (map.hasLayer(capasPorNombre[capaNombre])) {
                map.removeLayer(capasPorNombre[capaNombre]);
            }
        }
    }
    // Actualizar la leyenda cuando se cambia el estado del checkbox
    actualizarLeyenda();
});

        // Eventos para mover capas (controlar el z-index)
        const moveUpButton = capaItem.querySelector('.move-up');
        const moveDownButton = capaItem.querySelector('.move-down');
        moveUpButton.addEventListener('click', function() {
            moverCapa(capaNombre, -1); // Mover hacia arriba
        });
        moveDownButton.addEventListener('click', function() {
            moverCapa(capaNombre, 1); // Mover hacia abajo
        });
    });

    // Activar las capas seleccionadas en el tema actual
    const capasSeleccionadas = temasConfig[tema].capas || [];
    capasSeleccionadas.forEach(capaNombre => {
        const checkbox = document.getElementById(`check-${capaNombre}`);
        if (checkbox) {
            checkbox.checked = true;
        }
    });

    // Actualizar el orden en el sidebar
    actualizarOrdenCapas();
}

// Función para cargar una capa individual
function cargarCapaIndividual(capaNombre) {
    let capaConfig, temaEncontrado;
    
    // Buscar configuración en todos los temas
    for (const tema in temasConfig) {
        if (temasConfig[tema].estilo && temasConfig[tema].estilo[capaNombre]) {
            capaConfig = temasConfig[tema].estilo[capaNombre];
            temaEncontrado = tema;
            break;
        }
    }

    if (!capaConfig) return;

    const geoJsonPath = `geojson/${capaNombre}.geojson`;
    
    fetch(geoJsonPath)
        .then(response => response.json())
        .then(data => {
            const transformedData = transformCoordinates(data);
            const commonOptions = {
                style: (feature) => getEstiloCapa(feature, capaNombre, temaEncontrado),
                onEachFeature: (feature, layer) => bindPopup(feature, layer, capaNombre, temaEncontrado),
                layerName: capaNombre,
            };

            if (capaConfig.type === 'point') {
                commonOptions.pointToLayer = configurarPointToLayer(capaNombre, temaEncontrado);
            }

            const geoJsonLayer = L.geoJSON(transformedData, commonOptions);
            capasPorNombre[capaNombre] = geoJsonLayer;
            geoJsonLayer.addTo(map);
            agregarEtiquetas(geoJsonLayer, capaConfig);
            
            // Actualizar orden
            if (!capasOrdenadas.includes(capaNombre)) {
                capasOrdenadas.push(capaNombre);
            }
        })
        .catch(error => console.error(`Error cargando ${capaNombre}:`, error));
}

// Función para mover capas (controlar el z-index)
function moverCapa(capaNombre, direccion) {
    const indiceActual = capasOrdenadas.indexOf(capaNombre);
    if (indiceActual === -1) return;
    
    const nuevoIndice = indiceActual + direccion;
    if (nuevoIndice < 0 || nuevoIndice >= capasOrdenadas.length) return;
    
    [capasOrdenadas[indiceActual], capasOrdenadas[nuevoIndice]] = 
        [capasOrdenadas[nuevoIndice], capasOrdenadas[indiceActual]];
    
    // Actualizar visualización
    const layerList = document.getElementById('sidebar-layers');
    const capaItems = Array.from(layerList.children);
    const capaItem = capaItems.find(item => item.getAttribute('data-capa') === capaNombre);
    
    if (direccion > 0) {
        layerList.insertBefore(capaItem, capaItems[nuevoIndice + 1]);
    } else {
        layerList.insertBefore(capaItem, capaItems[nuevoIndice]);
    }
    
    actualizarOrdenCapas();
}

// Función para actualizar el orden de las capas en el mapa
function actualizarOrdenCapas() {
    // Eliminar todas las capas excepto la base
    map.eachLayer(layer => {
        if (layer !== capaBaseActual && layer.options && layer.options.layerName) {
            map.removeLayer(layer);
        }
    });

    // Solo mostrar capas activas en el orden correcto
    const capasActivas = [];
    capasOrdenadas.forEach(capaNombre => {
        const checkbox = document.getElementById(`check-${capaNombre}`);
        if (checkbox && checkbox.checked) {
            const capa = capasPorNombre[capaNombre];
            if (capa) capasActivas.push(capa);
        }
    });

    capasActivas.forEach(capa => map.addLayer(capa));
}

// Función para actualizar las capas base en el sidebar
function actualizarCapasBase() {
    const capasBaseContainer = document.getElementById('sidebar-capas-base');
    capasBaseContainer.innerHTML = ''; // Limpiar la lista de capas base

    // Crear elementos para cada capa base
    Object.keys(capasBase).forEach(key => {
        const capaBase = capasBase[key];
        const capaBaseItem = document.createElement('div');
        capaBaseItem.className = 'form-check mb-2';
        capaBaseItem.innerHTML = `
            <input class="form-check-input" type="radio" name="capa-base" value="${key}" id="base-${key}" ${capaBase === capaBaseActual ? 'checked' : ''}>
            <label class="form-check-label ms-2" for="base-${key}">
                ${capasBaseConfig[key].nombre}
            </label>
        `;

        // Evento para manejar la activación/desactivación de capas base
        const radio = capaBaseItem.querySelector(`#base-${key}`);
        radio.addEventListener('change', function() {
            if (this.checked) {
                map.removeLayer(capaBaseActual);
                capaBaseActual = capaBase;
                map.addLayer(capaBaseActual);
            }
        });

        capasBaseContainer.appendChild(capaBaseItem);
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el arreglo de capas ordenadas con todas las capas disponibles
    const todasLasCapas = {};
    Object.keys(temasConfig).forEach(t => {
        if (temasConfig[t].capas) {
            temasConfig[t].capas.forEach(capa => {
                if (!todasLasCapas[capa]) {
                    todasLasCapas[capa] = true;
                }
            });
        }
    });
    capasOrdenadas = Object.keys(todasLasCapas);

    // Actualizar las capas base en el sidebar
    actualizarCapasBase();
    
    // Cargar el tema inicial (por ejemplo, minería) - esto cargará las capas
    const temaInicial = 'mineria';
    document.querySelector(`.theme-btn[data-theme="${temaInicial}"]`).click();
});

// Actualizar leyenda dinámica
function actualizarLeyenda() {
    const sidebarLegendContainer = document.getElementById('sidebar-legend');
    sidebarLegendContainer.innerHTML = ''; // Limpiar leyenda actual
    
    // Obtener todas las capas activas (checkbox on)
    const capasActivas = [];
    document.querySelectorAll('#sidebar-layers input[type="checkbox"]:checked').forEach(checkbox => {
        capasActivas.push(checkbox.value);
    });
    
    // Si no hay capas activas, mostrar mensaje
    if (capasActivas.length === 0) {
        sidebarLegendContainer.innerHTML = '<p class="text-muted">No hay capas activas para mostrar en la leyenda</p>';
        return;
    }
    
    // Para cada capa activa, buscar su configuración en todos los temas
    capasActivas.forEach(capaNombre => {
        let capaConfig = null;
        let temaEncontrado = null;
        
        // Buscar en qué tema está definida esta capa y su configuración
        Object.keys(temasConfig).forEach(tema => {
            if (temasConfig[tema].estilo && temasConfig[tema].estilo[capaNombre]) {
                capaConfig = temasConfig[tema].estilo[capaNombre];
                temaEncontrado = tema;
            }
        });
        
        if (!capaConfig || !temaEncontrado) {
            console.warn(`No se encontró configuración para la leyenda de la capa: ${capaNombre}`);
            return;
        }
        
        // Crear sección de leyenda para esta capa
        const legendSection = document.createElement('div');
        legendSection.className = 'legend-section mb-3';
        
        // Obtener nombre personalizado de la capa si existe
        const nombreMostrar = capaConfig.nombrePersonalizado || capaNombre;
        
        // Agregar título de la sección
        const titulo = document.createElement('h6');
        titulo.textContent = nombreMostrar;
        legendSection.appendChild(titulo);
        
        // Para capas de tipo punto con iconos
        if (capaConfig.type === 'point' && capaConfig.iconos) {
            Object.entries(capaConfig.iconos).forEach(([valor, icono]) => {
                const legendItem = document.createElement('div');
                legendItem.className = 'legend-item';
                
                const iconContainer = document.createElement('div');
                iconContainer.className = 'legend-icon me-2';
                iconContainer.style.width = '24px';
                iconContainer.style.height = '24px';
                
                // Crear imagen del icono
                const img = document.createElement('img');
                img.src = `assets/icons/${icono}`;
                img.alt = valor;
                img.style.width = '100%';
                img.style.height = '100%';
                iconContainer.appendChild(img);
                
                const labelSpan = document.createElement('span');
                labelSpan.textContent = valor;
                
                legendItem.appendChild(iconContainer);
                legendItem.appendChild(labelSpan);
                legendSection.appendChild(legendItem);
            });
        } 
        // Para capas de tipo polígono o línea, usar colores de la leyenda
        else {
            // Buscar configuración de leyenda en el tema
            const leyendaConfig = temasConfig[temaEncontrado].leyenda && 
                                temasConfig[temaEncontrado].leyenda[capaNombre];
            
            if (leyendaConfig && leyendaConfig.items) {
                leyendaConfig.items.forEach(item => {
                    const legendItem = document.createElement('div');
                    legendItem.className = 'legend-item';
                    
                    const colorBox = document.createElement('div');
                    colorBox.className = 'legend-color';
                    colorBox.style.backgroundColor = item.color;
                    
                    const labelSpan = document.createElement('span');
                    labelSpan.textContent = item.label;
                    
                    legendItem.appendChild(colorBox);
                    legendItem.appendChild(labelSpan);
                    legendSection.appendChild(legendItem);
                });
            } else {
                // Si no hay configuración de leyenda específica, usar colores del estilo
                if (capaConfig.colores) {
                    Object.entries(capaConfig.colores).forEach(([valor, color]) => {
                        const legendItem = document.createElement('div');
                        legendItem.className = 'legend-item';
                        
                        const colorBox = document.createElement('div');
                        colorBox.className = 'legend-color';
                        colorBox.style.backgroundColor = color;
                        
                        const labelSpan = document.createElement('span');
                        labelSpan.textContent = valor;
                        
                        legendItem.appendChild(colorBox);
                        legendItem.appendChild(labelSpan);
                        legendSection.appendChild(legendItem);
                    });
                }
            }
        }
        
        sidebarLegendContainer.appendChild(legendSection);
    });
}

// Actualizar checkbox event listeners para actualizar la leyenda
function actualizarCapasSidebar(tema) {
    const layerList = document.getElementById('sidebar-layers');
    layerList.innerHTML = ''; // Limpiar la lista de capas

    // Obtener todas las capas disponibles en todos los temas
    const todasLasCapas = {};
    Object.keys(temasConfig).forEach(t => {
        if (temasConfig[t].capas) {
            temasConfig[t].capas.forEach(capa => {
                if (!todasLasCapas[capa]) {
                    todasLasCapas[capa] = true;
                }
            });
        }
    });

    // Crear elementos para cada capa
    Object.keys(todasLasCapas).forEach(capaNombre => {
        const capaItem = document.createElement('div');
        capaItem.className = 'form-check mb-2 d-flex justify-content-between align-items-center';
        capaItem.setAttribute('data-capa', capaNombre); // Identificador para la capa

        // Obtener el nombre personalizado si existe
        let nombreMostrar = capaNombre;
        Object.keys(temasConfig).forEach(t => {
            if (
                temasConfig[t].estilo &&
                temasConfig[t].estilo[capaNombre] &&
                temasConfig[t].estilo[capaNombre].nombrePersonalizado
            ) {
                nombreMostrar = temasConfig[t].estilo[capaNombre].nombrePersonalizado;
            }
        });

        // Checkbox y label
        const checkboxContainer = document.createElement('div');
        checkboxContainer.innerHTML = `
            <input class="form-check-input" type="checkbox" value="${capaNombre}" id="check-${capaNombre}">
            <label class="form-check-label ms-2" for="check-${capaNombre}">
                ${nombreMostrar}
            </label>
        `;

        // Botones de control Z-index
        const botonesContainer = document.createElement('div');
        botonesContainer.innerHTML = `
            <button class="btn btn-sm btn-light move-up me-1" data-capa="${capaNombre}" title="Mover arriba">
                <i class="fas fa-arrow-up"></i>
            </button>
            <button class="btn btn-sm btn-light move-down" data-capa="${capaNombre}" title="Mover abajo">
                <i class="fas fa-arrow-down"></i>
            </button>
        `;

        // Añadir los elementos al contenedor de la capa
        capaItem.appendChild(checkboxContainer);
        capaItem.appendChild(botonesContainer);
        layerList.appendChild(capaItem);

        // Evento para manejar la activación/desactivación de capas
        const checkbox = document.getElementById(`check-${capaNombre}`);
        checkbox.addEventListener('change', function() {
            if (this.checked && !capasPorNombre[capaNombre]) {
                // Si la capa no está cargada pero se quiere activar, cargarla
                cargarCapaIndividual(capaNombre);
            } else if (capasPorNombre[capaNombre]) {
                if (this.checked) {
                    map.addLayer(capasPorNombre[capaNombre]);
                } else {
                    map.removeLayer(capasPorNombre[capaNombre]);
                }
            }
            // Actualizar la leyenda cuando se cambia el estado del checkbox
            actualizarLeyenda();
        });

        // Eventos para mover capas (controlar el z-index)
        const moveUpButton = capaItem.querySelector('.move-up');
        const moveDownButton = capaItem.querySelector('.move-down');
        moveUpButton.addEventListener('click', function() {
            moverCapa(capaNombre, -1); // Mover hacia arriba
        });
        moveDownButton.addEventListener('click', function() {
            moverCapa(capaNombre, 1); // Mover hacia abajo
        });
    });

    // Activar las capas seleccionadas en el tema actual
    const capasSeleccionadas = temasConfig[tema].capas || [];
    capasSeleccionadas.forEach(capaNombre => {
        const checkbox = document.getElementById(`check-${capaNombre}`);
        if (checkbox) {
            checkbox.checked = true;
        }
    });

    // Actualizar el orden en el sidebar
    actualizarOrdenCapas();
    
    // Actualizar la leyenda con las capas activas
    actualizarLeyenda();
}

// Modificar el manejo de temas para actualizar la leyenda
// Manejo de temas
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tema = this.dataset.theme;
        
        // Limpiar completamente el mapa y el registro de capas
        map.eachLayer(layer => {
            if (layer !== capaBaseActual) {
                map.removeLayer(layer);
            }
        });
        capasPorNombre = {}; // Reinicializar completamente el objeto de capas
        
        // Incluir capas comunes + capas del tema
        const capasDelTema = [...commonLayers, ...(temasConfig[tema].capas || [])];
        
        // Cargar las capas desde cero
        capasDelTema.forEach(capaNombre => {
            cargarCapaIndividual(capaNombre);
            const checkbox = document.getElementById(`check-${capaNombre}`);
            if (checkbox) checkbox.checked = true;
        });
        
        actualizarLeyenda();
        actualizarCapasSidebar(tema);
    });
});

// Configuración común (agregado al final de app.js)
const commonLayers = ['limite_comunal'];

// Agregar esta función para depuración si el problema persiste
function debugCapas() {
    console.log("Capas en el mapa:");
    map.eachLayer(layer => {
        if (layer.options && layer.options.layerName) {
            console.log(` - ${layer.options.layerName} (visible en mapa)`);
        }
    });
    
    console.log("Estado de los checkboxes:");
    document.querySelectorAll('#sidebar-layers input[type="checkbox"]').forEach(checkbox => {
        console.log(` - ${checkbox.value}: ${checkbox.checked ? 'marcado' : 'desmarcado'}`);
    });
}
