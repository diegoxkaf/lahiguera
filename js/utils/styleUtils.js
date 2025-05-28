// Funciones para aplicar estilos a las capas.

import { BASE_PATH } from '../app.js';

/**
 * Obtiene el estilo de un punto para una característica GeoJSON.
 * @param {object} feature - La característica GeoJSON.
 * @param {object} configCapa - La configuración de estilo para la capa específica del tema.
 * @returns {object} Un objeto de estilo de Leaflet para puntos.
 */
export function getPointStyle(feature, configCapa) {
    if (!feature || !feature.geometry || !feature.geometry.type) {
        console.warn('Feature inválido o sin geometría en getPointStyle');
        return {};
    }

    if (feature.geometry.type !== 'Point' && feature.geometry.type !== 'MultiPoint') {
        console.warn('getPointStyle solo es aplicable a geometrías Point o MultiPoint');
        return {};
    }

    const atributoValor = configCapa.atributo ? feature.properties[configCapa.atributo] : null;

    let iconUrl = configCapa.estiloAlternativo?.iconUrl;

    if (configCapa.iconos && atributoValor && configCapa.iconos[atributoValor]) {
        iconUrl = `${BASE_PATH}/assets/icons/${configCapa.iconos[atributoValor]}`; // Añade BASE_PATH
    } else {
        if (configCapa.estiloAlternativo && configCapa.estiloAlternativo.iconUrl) {
            iconUrl = `${BASE_PATH}/assets/icons/${configCapa.estiloAlternativo.iconUrl}`; // Añade BASE_PATH
        }
    }

    if (iconUrl) {
        return {
            icon: L.icon({
                iconUrl: iconUrl,
                iconSize: configCapa.estiloAlternativo.iconSize || [32, 32],
                iconAnchor: configCapa.estiloAlternativo.iconAnchor || [16, 32],
                popupAnchor: configCapa.estiloAlternativo.popupAnchor || [0, -32]
            })
        };
    }
    return {};
}

/**
 * Obtiene el estilo para una característica GeoJSON (líneas y polígonos).
 * CORREGIDO: Ahora usa configCapa directamente en lugar de buscar en temaConfig
 * @param {object} feature - La característica GeoJSON.
 * @param {object} configCapa - La configuración de la capa específica.
 * @returns {object} Un objeto de estilo de Leaflet.
 */
export function getEstiloCapa(feature, configCapa) {
    if (!feature || !feature.geometry || !feature.geometry.type) {
        console.warn('Feature inválido o sin geometría en getEstiloCapa');
        return {};
    }

    if (!configCapa) {
        console.warn('Configuración de capa no encontrada.');
        return { color: '#333' };
    }

    const atributoValor = configCapa.atributo ? feature.properties[configCapa.atributo] : null;

    // Para líneas (LineString o MultiLineString)
    if (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString') {
        return {
            ...(configCapa.estiloBase || {}),
            color: configCapa.colores && atributoValor && configCapa.colores[atributoValor] ? 
                   configCapa.colores[atributoValor] : '#CCC'
        };
    }

    // Para polígonos (Polygon o MultiPolygon)
    if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
        return {
            ...(configCapa.estiloBase || {}),
            fillColor: configCapa.colores && atributoValor && configCapa.colores[atributoValor] ? 
                      configCapa.colores[atributoValor] : '#CCC',
            fillOpacity: configCapa.estiloBase && configCapa.estiloBase.fillOpacity !== undefined ? 
                        configCapa.estiloBase.fillOpacity : 0.7,
            color: configCapa.estiloBase?.color || '#333',
            weight: configCapa.estiloBase?.weight || 1,
            opacity: configCapa.estiloBase?.opacity || 0.8
        };
    }

    // Para puntos - se maneja con getPointStyle
    if (feature.geometry.type === 'Point' || feature.geometry.type === 'MultiPoint') {
        return {};
    }

    return {};
}

/**
 * Genera el contenido HTML para un popup de Leaflet.
 * ACTUALIZADO: Incluye configuración global de estilos para título y contenido
 * @param {object} feature - La característica GeoJSON.
 * @param {object} configCapa - La configuración de estilo para la capa específica del tema.
 * @returns {string} El contenido HTML del popup.
 */
export function getPopupContent(feature, configCapa) {
    if (!feature || !feature.properties || !configCapa || !configCapa.popupCampos) {
        console.warn('Feature o configuración de capa inválida para el popup.');
        return '<div class="custom-popup">Información no disponible.</div>';
    }

    let content = '<div class="custom-popup">';
    
    // Añadir título si existe nombrePersonalizado
    if (configCapa.nombrePersonalizado) {
        content += `<h3 class="popup-title">${configCapa.nombrePersonalizado}</h3>`;
    }

    // Usar el alias para los nombres de los campos en el popup
    const alias = configCapa.alias || {};

    configCapa.popupCampos.forEach(campo => {
        const valor = feature.properties[campo];
        const nombreVisible = alias[campo] || campo;
        
        if (valor !== undefined && valor !== null && valor !== '') {
            // Convertir URLs en el texto a enlaces clicables
            const valorConEnlaces = convertirURLsAEnlaces(String(valor));
            content += `<p><strong>${nombreVisible}:</strong> ${valorConEnlaces}</p>`;
        }
    });

    content += '</div>';
    return content;
}

/**
 * Convierte URLs en texto a enlaces clicables.
 * @param {string} text - El texto que puede contener URLs.
 * @returns {string} El texto con URLs convertidas a enlaces HTML.
 */
function convertirURLsAEnlaces(text) {
    if (typeof text !== 'string') {
        return text;
    }
    
    // Expresión regular para detectar URLs
    const urlRegex = /(https?:\/\/[^\s<>"{}|\\^`[\]]+)/gi;
    
    return text.replace(urlRegex, function(url) {
        const cleanUrl = url.replace(/[.,;:!?]$/, '');
        const punctuation = url.slice(cleanUrl.length);
        
        return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer">${cleanUrl}</a>${punctuation}`;
    });
}

/**
 * Configuración global para estilos de popup
 * Permite personalizar los tamaños de fuente globalmente
 */
export const POPUP_CONFIG = {
    // Tamaños de fuente (en px)
    titleFontSize: 12,
    contentFontSize: 10,
    labelFontSize: 10,
    
    // Tamaños para móvil
    mobile: {
        titleFontSize: 12,
        contentFontSize: 10,
        labelFontSize: 10
    },
    
    // Tamaños para pantallas muy pequeñas
    small: {
        titleFontSize: 11,
        contentFontSize: 9,
        labelFontSize: 9
    }
};

/**
 * Aplica estilos dinámicos al popup basado en la configuración
 * Esta función puede ser llamada para actualizar estilos globalmente
 */
export function applyGlobalPopupStyles() {
    let styleElement = document.getElementById('dynamic-popup-styles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-popup-styles';
        document.head.appendChild(styleElement);
    }
    
    const config = POPUP_CONFIG;
    
    styleElement.textContent = `
        .custom-popup {
            font-size: ${config.contentFontSize}px !important;
        }
        .custom-popup .popup-title {
            font-size: ${config.titleFontSize}px !important;
        }
        .custom-popup p {
            font-size: ${config.contentFontSize}px !important;
        }
        .custom-popup p strong {
            font-size: ${config.labelFontSize}px !important;
        }
        .custom-popup a {
            font-size: ${config.contentFontSize}px !important;
        }
        
        @media (max-width: 768px) {
            .custom-popup {
                font-size: ${config.mobile.contentFontSize}px !important;
            }
            .custom-popup .popup-title {
                font-size: ${config.mobile.titleFontSize}px !important;
            }
            .custom-popup p {
                font-size: ${config.mobile.contentFontSize}px !important;
            }
            .custom-popup p strong {
                font-size: ${config.mobile.labelFontSize}px !important;
            }
            .custom-popup a {
                font-size: ${config.mobile.contentFontSize}px !important;
            }
        }
        
        @media (max-width: 480px) {
            .custom-popup {
                font-size: ${config.small.contentFontSize}px !important;
            }
            .custom-popup .popup-title {
                font-size: ${config.small.titleFontSize}px !important;
            }
            .custom-popup p {
                font-size: ${config.small.contentFontSize}px !important;
            }
            .custom-popup p strong {
                font-size: ${config.small.labelFontSize}px !important;
            }
            .custom-popup a {
                font-size: ${config.small.contentFontSize}px !important;
            }
        }
    `;
}

/**
 * Añade etiquetas a una característica individual.
 * @param {L.Layer} layer - La capa de Leaflet (marker, polygon, etc.).
 * @param {object} feature - La característica GeoJSON.
 * @param {object} configEtiquetas - La configuración de etiquetas.
 */
export function addLabelsToLayer(layer, feature, configEtiquetas) {
    if (!configEtiquetas || !configEtiquetas.campo || !feature || !feature.properties) {
        return;
    }

    const labelText = feature.properties[configEtiquetas.campo];
    if (!labelText) return;

    const estilo = configEtiquetas.estilo || {};
    const {
        color: textColor = '#000000',
        fontSize = '10px',
        fontFamily = 'Arial, sans-serif',
        bufferColor = '#ffffff',
        bufferWidth = 0,
        offsetY = 0
    } = estilo;

    let labelPosition;
    
    // Determinar la posición de la etiqueta según el tipo de geometría
    if (layer.getCenter && (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon')) {
        labelPosition = layer.getCenter();
    } else if (layer.getBounds && (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString')) {
        labelPosition = layer.getBounds().getCenter();
    } else if (feature.geometry.type === 'Point' || feature.geometry.type === 'MultiPoint') {
        labelPosition = layer.getLatLng();
    } else {
        console.warn('Tipo de geometría no soportado para etiquetas:', feature.geometry.type);
        return;
    }

    // Crear y configurar el tooltip
    const tooltip = L.tooltip({
        permanent: true,
        direction: 'center',
        className: 'custom-outlined-label-tooltip',
        offset: [0, offsetY],
        opacity: 1
    });
    
    tooltip.setContent(labelText);
    layer.bindTooltip(tooltip);

    // Aplicar estilos cuando la capa se añada al mapa
    layer.on('add', function() {
        const tooltipElement = layer.getTooltip()._container;
        if (tooltipElement) {
            tooltipElement.style.color = textColor;
            tooltipElement.style.fontSize = fontSize;
            tooltipElement.style.fontFamily = fontFamily;
            tooltipElement.style.position = 'absolute';
            tooltipElement.style.zIndex = '1000';

            if (bufferWidth > 0) {
                const outlinedText = document.createElement('span');
                outlinedText.textContent = labelText;
                outlinedText.style.webkitTextStrokeColor = bufferColor;
                outlinedText.style.webkitTextStrokeWidth = `${bufferWidth}px`;
                outlinedText.style.position = 'relative';

                tooltipElement.innerHTML = '';
                tooltipElement.appendChild(outlinedText);
            }
        }
    });
}
