import { getEstiloCapa, getPointStyle, addLabelsToLayer } from './styleUtils.js';
import { bindPopup } from './popupUtils.js';
import { transformCoordinates } from './mapUtils.js';
import { BASE_PATH } from '../app.js'; // Importa BASE_PATH desde app.js (Problema ruta relativa)

// Estado global para las capas
const layerState = {
    map: null,
    capasPorNombre: {},
    capasOrdenadas: []
};

const GEOJSON_PATH = '/geojson/'; //  Ruta base a los archivos GeoJSON, ahora relativa al repositorio

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
    const configCapa = temasConfig[tema].estilo[capaNombre];
    if (!configCapa || !configCapa.url) {
        console.warn(`Configuración de capa o URL no encontrada para: ${capaNombre}`);
        return;
    }

    const fullGeoJSONPath = `${GEOJSON_PATH}${configCapa.url}`; // Usa la ruta completa
    console.log(`Intentando cargar GeoJSON desde: ${fullGeoJSONPath}`); // Para depuración

    fetch(fullGeoJSONPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} for ${fullGeoJSONPath}`);
            }
            return response.json();
        })
        .then(data => {
            const geojsonLayer = L.geoJson(transformCoordinates(data), {
                style: (feature) => getEstiloCapa(feature, configCapa),
                pointToLayer: (feature, latlng) => {
                    return L.marker(latlng, getPointStyle(feature, configCapa));
                },
                onEachFeature: (feature, layer) => {
                    layer.options.layerName = capaNombre; // Añade el nombre de la capa a las opciones
                    bindPopup(feature, layer, configCapa);
                    if (configCapa.etiquetas && configCapa.etiquetas.campo) {
                        addLabelsToLayer(feature, layer, configCapa.etiquetas);
                    }
                }
            });

            geojsonLayer.addTo(layerState.map);
            layerState.capasPorNombre[capaNombre] = geojsonLayer;
            // Solo añadir si no existe ya para evitar duplicados en el orden
            if (layerState.capasOrdenadas.indexOf(capaNombre) === -1) {
                layerState.capasOrdenadas.push(capaNombre);
            }
            actualizarOrdenCapas();
        })
        .catch(error => {
            console.error(`Error al cargar la capa ${capaNombre}:`, error);
        });
}

export function mostrarCapa(capaNombre) {
    if (layerState.capasPorNombre[capaNombre]) {
        layerState.capasPorNombre[capaNombre].addTo(layerState.map);
        if (layerState.capasOrdenadas.indexOf(capaNombre) === -1) {
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
    layerState.capasPorNombre = {};
    layerState.capasOrdenadas = [];
}

/**
 * Mueve una capa específica al frente o al fondo, o a una posición relativa.
 * @param {string} capaNombre - El nombre de la capa a mover.
 * @param {string} direccion - 'arriba', 'abajo', 'frente', 'fondo'.
 */
export function moverCapa(capaNombre, direccion) {
    if (!layerState.capasPorNombre[capaNombre]) {
        console.warn(`Capa '${capaNombre}' no encontrada para mover.`);
        return;
    }

    const index = layerState.capasOrdenadas.indexOf(capaNombre);
    if (index === -1) {
        console.warn(`Capa '${capaNombre}' no está en el orden actual.`);
        return;
    }

    let newIndex = index;
    switch (direccion) {
        case 'arriba':
            newIndex = Math.max(0, index - 1);
            break;
        case 'abajo':
            newIndex = Math.min(layerState.capasOrdenadas.length - 1, index + 1);
            break;
        case 'frente':
            newIndex = layerState.capasOrdenadas.length - 1;
            break;
        case 'fondo':
            newIndex = 0;
            break;
        default:
            console.warn(`Dirección de movimiento '${direccion}' no reconocida.`);
            return;
    }

    if (newIndex !== index) {
        const [movedCapa] = layerState.capasOrdenadas.splice(index, 1);
        layerState.capasOrdenadas.splice(newIndex, 0, movedCapa);
        actualizarOrdenCapas();
    }
}
