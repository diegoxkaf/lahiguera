import { getEstiloCapa, getPointStyle, addLabelsToLayer } from './styleUtils.js';
import { bindPopup } from './popupUtils.js';
import { transformCoordinates } from './mapUtils.js';

// Estado global para las capas
const layerState = {
    map: null,
    capasPorNombre: {},
    capasOrdenadas: []
};

//Usar ruta relativa en lugar de absoluta
const GEOJSON_PATH = './geojson/'; 

export function initializeLayerState(map, capasPorNombre, capasOrdenadas) {
    layerState.map = map;
    layerState.capasPorNombre = capasPorNombre;
    layerState.capasOrdenadas = capasOrdenadas;
}

/**
 * Carga capas GeoJSON al mapa.
 * @param {string} tema - El tema de las capas a cargar.
 * @param {object} temasConfig - El objeto de configuración de temas.
 */
export function cargarCapasGeoJSON(tema, temasConfig) {
    if (!temasConfig[tema] || !temasConfig[tema].capas) {
        console.warn(`No hay capas definidas para el tema: ${tema}`);
        return;
    }

    temasConfig[tema].capas.forEach(capaNombre => {
        cargarCapaIndividual(capaNombre, tema, temasConfig);
    });
}

/**
 * Carga una capa GeoJSON individual al mapa.
 * @param {string} capaNombre - El nombre de la capa a cargar.
 * @param {string} tema - El tema de la capa.
 * @param {object} temasConfig - El objeto de configuración de temas.
 */
export function cargarCapaIndividual(capaNombre, tema, temasConfig) {
    if (!temasConfig[tema] || !temasConfig[tema].estilo || !temasConfig[tema].estilo[capaNombre]) {
        console.warn(`No hay estilo definido para la capa: ${capaNombre} en el tema: ${tema}`);
        return;
    }

    const configCapa = temasConfig[tema].estilo[capaNombre];
    const geojsonUrl = `${GEOJSON_PATH}${configCapa.url}`;

    // Si la capa ya está cargada en el mapa, solo la mostramos y salimos
    if (layerState.capasPorNombre[capaNombre]) {
        console.log(`Capa ${capaNombre} ya cargada, mostrando...`);
        mostrarCapa(capaNombre);
        return;
    }

    fetch(geojsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} for ${geojsonUrl}`);
            }
            return response.json();
        })
        .then(data => {
            const transformedData = transformCoordinates(data);
            let geojsonLayer;

            if (configCapa.type === 'point') {
                geojsonLayer = L.geoJson(transformedData, {
                    pointToLayer: function (feature, latlng) {
                        const marker = L.marker(latlng, getPointStyle(feature, configCapa));
                        if (configCapa.etiquetas && configCapa.etiquetas.campo) {
                             addLabelsToLayer(marker, feature, configCapa.etiquetas);
                        }
                        return marker;
                    },
                    onEachFeature: function (feature, layer) {
                        bindPopup(feature, layer, configCapa);
                        layer.options.layerName = capaNombre;
                    }
                });
            } else {
                geojsonLayer = L.geoJson(transformedData, {
                    style: (feature) => getEstiloCapa(feature, configCapa),
                    onEachFeature: function (feature, layer) {
                        bindPopup(feature, layer, configCapa);
                        layer.options.layerName = capaNombre;
                        if (configCapa.etiquetas && configCapa.etiquetas.campo) {
                            addLabelsToLayer(layer, feature, configCapa.etiquetas);
                        }
                    }
                });
            }

            geojsonLayer.addTo(layerState.map);
            layerState.capasPorNombre[capaNombre] = geojsonLayer;
            layerState.capasOrdenadas.push(capaNombre);
            actualizarOrdenCapas();
            console.log(`Capa ${capaNombre} cargada y añadida al mapa.`);
        })
        .catch(error => {
            console.error(`Error al cargar la capa ${capaNombre}:`, error);
        });
}

/**
 * Mueve una capa a una nueva posición en el orden de apilamiento.
 * @param {string} capaNombre - El nombre de la capa a mover.
 * @param {number} nuevaPosicion - La nueva posición de la capa (índice).
 */
export function moverCapa(capaNombre, nuevaPosicion) {
    if (!layerState.capasPorNombre[capaNombre]) return;
    
    const capa = layerState.capasPorNombre[capaNombre];
    layerState.map.removeLayer(capa);

    const indiceActual = layerState.capasOrdenadas.indexOf(capaNombre);
    if (indiceActual > -1) {
        layerState.capasOrdenadas.splice(indiceActual, 1);
    }

    layerState.capasOrdenadas.splice(nuevaPosicion, 0, capaNombre);
    capa.addTo(layerState.map);
    actualizarOrdenCapas();
}

export function mostrarCapa(capaNombre) {
    if (layerState.capasPorNombre[capaNombre]) {
        layerState.map.addLayer(layerState.capasPorNombre[capaNombre]);
        const index = layerState.capasOrdenadas.indexOf(capaNombre);
        if (index === -1) {
            layerState.capasOrdenadas.push(capaNombre);
        }
        actualizarOrdenCapas();
    } else {
        console.warn(`Capa '${capaNombre}' no encontrada para mostrar.`);
    }
}

export function ocultarCapa(capaNombre) {
    if (layerState.capasPorNombre[capaNombre]) {
        layerState.map.removeLayer(layerState.capasPorNombre[capaNombre]);
        const index = layerState.capasOrdenadas.indexOf(capaNombre);
        if (index > -1) {
            layerState.capasOrdenadas.splice(index, 1);
        }
    } else {
        console.warn(`Capa '${capaNombre}' no encontrada para ocultar.`);
    }
}

/**
 * Actualiza el orden de las capas en el mapa según el orden del array `capasOrdenadas`.
 */
export function actualizarOrdenCapas() {
    layerState.capasOrdenadas.forEach(nombreCapa => {
        if (layerState.capasPorNombre[nombreCapa]) {
            layerState.capasPorNombre[nombreCapa].bringToFront();
        }
    });
}

/**
 * Limpia todas las capas del mapa excepto la capa base.
 * @param {L.TileLayer} capaBaseActual - La capa base actual.
 */
export function limpiarMapa(capaBaseActual) {
    layerState.map.eachLayer(layer => {
        if (layer !== capaBaseActual && layer.options && layer.options.layerName) {
            layerState.map.removeLayer(layer);
        }
    });
    
    // Limpiar las referencias
    for (const key in layerState.capasPorNombre) {
        delete layerState.capasPorNombre[key];
    }
    layerState.capasOrdenadas.length = 0;
}
