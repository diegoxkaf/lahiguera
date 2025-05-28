// Funciones para actualizar el sidebar (capas y capas base)

import { cargarCapaIndividual, mostrarCapa, ocultarCapa, actualizarOrdenCapas, moverCapa } from './layerUtils.js';
import { map, capasPorNombre, activeTemaName, currentBaseLayer } from '../app.js';

/**
 * Obtiene todas las capas únicas de todos los temas
 * @param {object} temasConfig - El objeto de configuración de temas
 * @returns {Array} Array con todas las capas únicas
 */
function obtenerTodasLasCapas(temasConfig) {
    const todasLasCapas = new Set();
    
    Object.values(temasConfig).forEach(tema => {
        if (tema.capas && Array.isArray(tema.capas)) {
            tema.capas.forEach(capa => todasLasCapas.add(capa));
        }
    });
    
    return Array.from(todasLasCapas).sort();
}

/**
 * Obtiene el nombre personalizado de una capa para un tema específico
 * @param {string} capaNombre - Nombre de la capa
 * @param {string} temaActivo - Tema activo
 * @param {object} temasConfig - Configuración de temas
 * @returns {string} Nombre personalizado o nombre original
 */
function obtenerNombrePersonalizado(capaNombre, temaActivo, temasConfig) {
    // Buscar en el tema activo primero
    if (temasConfig[temaActivo]?.estilo?.[capaNombre]?.nombrePersonalizado) {
        return temasConfig[temaActivo].estilo[capaNombre].nombrePersonalizado;
    }
    
    // Si no se encuentra en el tema activo, buscar en otros temas
    for (const tema in temasConfig) {
        if (temasConfig[tema]?.estilo?.[capaNombre]?.nombrePersonalizado) {
            return temasConfig[tema].estilo[capaNombre].nombrePersonalizado;
        }
    }
    
    // Si no se encuentra nombre personalizado, devolver el nombre original
    return capaNombre;
}

/**
 * Actualiza la lista de capas en la sidebar, mostrando TODAS las capas del proyecto
 * pero marcando solo las del tema activo.
 * @param {string} temaActivo - El tema actualmente activo.
 * @param {object} temasConfig - El objeto de configuración de temas.
 */
export function actualizarCapasSidebar(temaActivo, temasConfig) {
    const sidebarLayers = document.getElementById('sidebar-layers');
    const sidebarLayersMobile = document.getElementById('sidebar-layers-mobile');
    if (!sidebarLayers || !sidebarLayersMobile) {
        console.warn('Elementos de sidebar no encontrados');
        return;
    }

    sidebarLayers.innerHTML = '';
    sidebarLayersMobile.innerHTML = '';

    // Obtener TODAS las capas del proyecto
    const todasLasCapas = obtenerTodasLasCapas(temasConfig);
    
    // Obtener las capas del tema activo (estas deben estar marcadas)
    const capasDelTemaActivo = temasConfig[temaActivo]?.capas || [];

    console.log('Todas las capas disponibles:', todasLasCapas);
    console.log('Capas del tema activo:', capasDelTemaActivo);

    // Separar capas: primero las del tema activo, luego las demás
    const capasDelTema = [];
    const capasDeOtrosTemas = [];
    
    todasLasCapas.forEach(capaNombre => {
        if (capasDelTemaActivo.includes(capaNombre)) {
            capasDelTema.push(capaNombre);
        } else {
            capasDeOtrosTemas.push(capaNombre);
        }
    });

    // Crear checkboxes para capas del tema activo (MARCADAS)
    capasDelTema.forEach(capaNombre => {
        crearCheckboxCapa(capaNombre, true, temaActivo, temasConfig, sidebarLayers, sidebarLayersMobile, true);
    });

    // Crear checkboxes para capas de otros temas (DESMARCADAS)
    capasDeOtrosTemas.forEach(capaNombre => {
        crearCheckboxCapa(capaNombre, false, temaActivo, temasConfig, sidebarLayers, sidebarLayersMobile, false);
    });

    console.log('Sidebar de capas actualizada con todas las capas disponibles');
}

/**
 * Crea un checkbox para una capa específica
 * @param {string} capaNombre - Nombre de la capa
 * @param {boolean} marcado - Si debe estar marcado
 * @param {string} temaActivo - Tema activo
 * @param {object} temasConfig - Configuración de temas
 * @param {HTMLElement} containerPrincipal - Contenedor principal
 * @param {HTMLElement} containerMovil - Contenedor móvil
 * @param {boolean} perteneceAlTemaActivo - Si pertenece al tema activo
 */
function crearCheckboxCapa(capaNombre, marcado, temaActivo, temasConfig, containerPrincipal, containerMovil, perteneceAlTemaActivo) {
    // Obtener nombre personalizado
    const nombrePersonalizado = obtenerNombrePersonalizado(capaNombre, temaActivo, temasConfig);

    // --- Versión para la sidebar principal ---
    const listItem = document.createElement('li');
    listItem.classList.add('form-check', 'form-switch', 'mb-2');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-check-input');
    checkbox.id = `capa-${capaNombre}`;
    checkbox.value = capaNombre;
    checkbox.checked = marcado;

    // Listener para el cambio de estado del checkbox
    checkbox.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        
        // Sincronizar el estado con el checkbox móvil
        const mobileCheckbox = document.getElementById(`capa-mobile-${capaNombre}`);
        if (mobileCheckbox && mobileCheckbox !== event.target) {
            mobileCheckbox.checked = isChecked;
        }

        manejarCambioEstadoCapa(capaNombre, isChecked, temaActivo, temasConfig);
    });

    const label = document.createElement('label');
    label.htmlFor = `capa-${capaNombre}`;
    label.textContent = nombrePersonalizado;
    label.classList.add('form-check-label', 'text-dark');
    
    // Añadir estilo visual para distinguir capas del tema activo
    if (perteneceAlTemaActivo) {
        label.classList.add('fw-bold'); // Negrita para capas del tema activo
        label.style.color = '#0066cc'; // Color azul para destacar
    } else {
        label.classList.add('text-muted'); // Texto más tenue para otras capas
        label.style.fontStyle = 'italic'; // Cursiva para diferenciar
    }

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    containerPrincipal.appendChild(listItem);

    // --- Versión para el offcanvas móvil ---
    const listItemMobile = document.createElement('li');
    listItemMobile.classList.add('form-check', 'form-switch', 'mb-2');

    const checkboxMobile = document.createElement('input');
    checkboxMobile.type = 'checkbox';
    checkboxMobile.classList.add('form-check-input');
    checkboxMobile.id = `capa-mobile-${capaNombre}`;
    checkboxMobile.value = capaNombre;
    checkboxMobile.checked = marcado;

    // Listener para el checkbox móvil
    checkboxMobile.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        
        // Sincronizar el estado con el checkbox principal
        const mainCheckbox = document.getElementById(`capa-${capaNombre}`);
        if (mainCheckbox && mainCheckbox !== event.target) {
            mainCheckbox.checked = isChecked;
        }

        manejarCambioEstadoCapa(capaNombre, isChecked, temaActivo, temasConfig);
    });

    const labelMobile = document.createElement('label');
    labelMobile.htmlFor = `capa-mobile-${capaNombre}`;
    labelMobile.textContent = nombrePersonalizado;
    labelMobile.classList.add('form-check-label', 'text-dark');
    
    // Añadir estilo visual para distinguir capas del tema activo
    if (perteneceAlTemaActivo) {
        labelMobile.classList.add('fw-bold'); // Negrita para capas del tema activo
        labelMobile.style.color = '#0066cc'; // Color azul para destacar
    } else {
        labelMobile.classList.add('text-muted'); // Texto más tenue para otras capas
        labelMobile.style.fontStyle = 'italic'; // Cursiva para diferenciar
    }

    listItemMobile.appendChild(checkboxMobile);
    listItemMobile.appendChild(labelMobile);
    containerMovil.appendChild(listItemMobile);
}

/**
 * Maneja el cambio de estado de una capa (mostrar/ocultar)
 * @param {string} capaNombre - Nombre de la capa
 * @param {boolean} mostrar - Si debe mostrar o ocultar la capa
 * @param {string} temaActivo - Tema actualmente activo  
 * @param {object} temasConfig - Configuración de temas
 */
function manejarCambioEstadoCapa(capaNombre, mostrar, temaActivo, temasConfig) {
    console.log(`Cambiando estado de capa ${capaNombre} a ${mostrar ? 'visible' : 'oculta'}`);
    
    if (mostrar) {
        if (!capasPorNombre[capaNombre]) {
            // Si no está cargada, necesitamos encontrar en qué tema está definida para cargarla
            let temaParaCargar = temaActivo;
            
            // Si la capa no está en el tema activo, buscar en otros temas
            if (!temasConfig[temaActivo]?.capas?.includes(capaNombre)) {
                for (const tema in temasConfig) {
                    if (temasConfig[tema]?.capas?.includes(capaNombre)) {
                        temaParaCargar = tema;
                        break;
                    }
                }
            }
            
            console.log(`Cargando capa ${capaNombre} desde tema ${temaParaCargar}`);
            cargarCapaIndividual(capaNombre, temaParaCargar, temasConfig);
        } else {
            mostrarCapa(capaNombre);
        }
    } else {
        ocultarCapa(capaNombre);
    }
}

/**
 * Actualiza la lista de capas base en la sidebar.
 * @param {object} capasBaseConfig - El objeto de configuración de capas base.
 * @param {L.Map} mapInstance - La instancia del mapa de Leaflet.
 */
export function actualizarCapasBase(capasBaseConfig, mapInstance) {
    const baseLayersContainer = document.getElementById('sidebar-base-layers');
    const baseLayersContainerMobile = document.getElementById('sidebar-base-layers-mobile');
    if (!baseLayersContainer || !baseLayersContainerMobile) {
        console.warn('Contenedores de capas base no encontrados');
        return;
    }

    // Validar que capasBaseConfig existe y es un objeto
    if (!capasBaseConfig || typeof capasBaseConfig !== 'object') {
        console.warn('capasBaseConfig no está definido o no es un objeto válido');
        return;
    }

    baseLayersContainer.innerHTML = '';
    baseLayersContainerMobile.innerHTML = '';

    // Determinar cuál es la capa base activa (por defecto openStreetMap)
    let capaBaseActivaKey = 'openStreetMap';

    Object.entries(capasBaseConfig).forEach(([key, capa]) => {
        // Validar que la capa tiene la estructura correcta
        if (!capa || !capa.nombre) {
            console.warn(`Capa base ${key} no tiene estructura válida:`, capa);
            return;
        }

        // Versión para sidebar principal
        const div = document.createElement('div');
        div.classList.add('form-check', 'mb-2');

        const input = document.createElement('input');
        input.type = 'radio';
        input.classList.add('form-check-input');
        input.name = 'baseLayer';
        input.id = `baseLayer-${key}`;
        input.value = key;
        input.checked = (key === capaBaseActivaKey);

        // Event listener para cambio de capa base
        input.addEventListener('change', (event) => {
            if (event.target.checked) {
                cambiarCapaBase(key, capasBaseConfig, mapInstance);
                
                // Sincronizar con versión móvil
                const mobileInput = document.getElementById(`baseLayer-mobile-${key}`);
                if (mobileInput && mobileInput !== event.target) {
                    mobileInput.checked = true;
                }
            }
        });

        const label = document.createElement('label');
        label.htmlFor = `baseLayer-${key}`;
        label.textContent = capa.nombre;
        label.classList.add('form-check-label', 'text-dark');

        div.appendChild(input);
        div.appendChild(label);
        baseLayersContainer.appendChild(div);

        // Versión para offcanvas móvil
        const divMobile = document.createElement('div');
        divMobile.classList.add('form-check', 'mb-2');

        const inputMobile = document.createElement('input');
        inputMobile.type = 'radio';
        inputMobile.classList.add('form-check-input');
        inputMobile.name = 'baseLayerMobile';
        inputMobile.id = `baseLayer-mobile-${key}`;
        inputMobile.value = key;
        inputMobile.checked = (key === capaBaseActivaKey);

        // Event listener para versión móvil
        inputMobile.addEventListener('change', (event) => {
            if (event.target.checked) {
                cambiarCapaBase(key, capasBaseConfig, mapInstance);
                
                // Sincronizar con versión desktop
                const desktopInput = document.getElementById(`baseLayer-${key}`);
                if (desktopInput && desktopInput !== event.target) {
                    desktopInput.checked = true;
                }
            }
        });

        const labelMobile = document.createElement('label');
        labelMobile.htmlFor = `baseLayer-mobile-${key}`;
        labelMobile.textContent = capa.nombre;
        labelMobile.classList.add('form-check-label', 'text-dark');

        divMobile.appendChild(inputMobile);
        divMobile.appendChild(labelMobile);
        baseLayersContainerMobile.appendChild(divMobile);
    });

    console.log('Sidebar de capas base actualizada');
}

/**
 * Cambia la capa base del mapa
 * @param {string} nuevaCapaKey - Clave de la nueva capa base
 * @param {object} capasBaseConfig - Configuración de capas base
 * @param {L.Map} mapInstance - Instancia del mapa
 */
function cambiarCapaBase(nuevaCapaKey, capasBaseConfig, mapInstance) {
    if (!capasBaseConfig || !mapInstance) {
        console.warn('capasBaseConfig o mapInstance no están definidos');
        return;
    }

    const nuevaCapaConfig = capasBaseConfig[nuevaCapaKey];
    if (!nuevaCapaConfig) {
        console.warn(`No se encontró la configuración para la capa base: ${nuevaCapaKey}`);
        return;
    }

    // Remover la capa base actual
    if (window.currentBaseLayer) {
        mapInstance.removeLayer(window.currentBaseLayer);
    }

    // Crear y añadir la nueva capa base
    const nuevaCapaBase = L.tileLayer(nuevaCapaConfig.url, {
        attribution: nuevaCapaConfig.nombre,
        maxZoom: nuevaCapaConfig.maxZoom || 18,
        minZoom: nuevaCapaConfig.minZoom || 1
    });

    nuevaCapaBase.addTo(mapInstance);
    
    // Actualizar la referencia global
    window.currentBaseLayer = nuevaCapaBase;
    
    console.log(`Capa base cambiada a: ${nuevaCapaConfig.nombre}`);
}

/**
 * Sincroniza el estado de los checkboxes con el estado real de las capas en el mapa
 * Esta función es llamada después de cambios de tema para asegurar consistencia
 * @param {string} temaActivo - El tema actualmente activo
 * @param {object} temasConfig - Configuración de temas
 */
export function sincronizarEstadoCapas(temaActivo, temasConfig) {
    console.log('Sincronizando estado de capas...');
    
    const todasLasCapas = obtenerTodasLasCapas(temasConfig);
    const capasDelTemaActivo = temasConfig[temaActivo]?.capas || [];
    
    todasLasCapas.forEach(capaNombre => {
        const perteneceAlTemaActivo = capasDelTemaActivo.includes(capaNombre);
        const estaVisible = capasPorNombre[capaNombre] && map.hasLayer(capasPorNombre[capaNombre]);
        

        // - Si pertenece al tema activo: debe estar marcado (independientemente de si está visible) - Si NO pertenece al tema activo: solo marcado si está visible
        const debeEstarMarcado = perteneceAlTemaActivo || estaVisible;
        
        // Actualizar checkbox principal
        const mainCheckbox = document.getElementById(`capa-${capaNombre}`);
        if (mainCheckbox) {
            mainCheckbox.checked = debeEstarMarcado;
        }
        
        // Actualizar checkbox móvil
        const mobileCheckbox = document.getElementById(`capa-mobile-${capaNombre}`);
        if (mobileCheckbox) {
            mobileCheckbox.checked = debeEstarMarcado;
        }
        
        // Actualizar estilos visuales
        const mainLabel = document.querySelector(`label[for="capa-${capaNombre}"]`);
        const mobileLabel = document.querySelector(`label[for="capa-mobile-${capaNombre}"]`);
        
        [mainLabel, mobileLabel].forEach(label => {
            if (label) {
                if (perteneceAlTemaActivo) {
                    label.classList.remove('text-muted');
                    label.classList.add('fw-bold');
                    label.style.color = '#0066cc';
                    label.style.fontStyle = 'normal';
                } else {
                    label.classList.remove('fw-bold');
                    label.classList.add('text-muted');
                    label.style.color = '';
                    label.style.fontStyle = 'italic';
                }
            }
        });
    });
    
    console.log('Estado de capas sincronizado correctamente');
}