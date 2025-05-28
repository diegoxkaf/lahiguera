// Maneja Funciones Globales

import capasBaseConfig from './config/capasBase.js';
import { initMap, setBaseLayer } from './utils/mapUtils.js';
import { actualizarCapasSidebar, actualizarCapasBase, sincronizarEstadoCapas } from './utils/sidebarUtils.js';
import { actualizarLeyenda } from './utils/legendUtils.js';
import { manejarCambioTema } from './utils/themeUtils.js';
import { 
    mostrarCapa, 
    ocultarCapa, 
    actualizarOrdenCapas, 
    limpiarMapa, 
    moverCapa,
    cargarCapaIndividual,
    initializeLayerState
} from './utils/layerUtils.js';
import allTemasConfig from './config/allTemasConfig.js';

// Variables globales
export let map;
export let currentBaseLayer;
export const capasPorNombre = {};
export const capasOrdenadas = [];
export let activeTemaName = 'mineria';

// BASE_PATH en caso que la web este en un subdirectorio, en caso que el mapa se carge en el directorio raíz del dominio comentar el basepath
export const BASE_PATH = '/lahiguera';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando aplicación...');
    
    // Inicialización del mapa
    map = initMap('map', [-29.8093, -71.1891], 9);
    currentBaseLayer = setBaseLayer(map, L.tileLayer(capasBaseConfig.openStreetMap.url, { 
        attribution: capasBaseConfig.openStreetMap.nombre 
    }));

    // Hacer currentBaseLayer accesible globalmente
    window.currentBaseLayer = currentBaseLayer;

    // INICIALIZAR EL ESTADO DE LAS CAPAS
    initializeLayerState(map, capasPorNombre, capasOrdenadas);

    // Actualizar sidebars
    actualizarCapasBase(capasBaseConfig, map);
    actualizarCapasSidebar(activeTemaName, allTemasConfig);
    
    // ACTUALIZAR LEYENDA INICIAL
    actualizarLeyenda(activeTemaName, allTemasConfig);

    // Event listeners para capas base
    setupBaseLayerListeners();
    
    // Configuración inicial de tema
    setupInitialTheme();
    
    // Event listeners para botones de tema
    setupThemeListeners();
    
    console.log('Aplicación inicializada correctamente');
});

function setupBaseLayerListeners() {
    console.log('Configurando listeners de capas base...');
    
    // Event listeners para los botones de capas base (si tienes botones)
    document.querySelectorAll('.base-layer-btn').forEach(button => {
        button.addEventListener('click', function() {
            const layerKey = this.dataset.layer;
            cambiarCapaBasePorBoton(layerKey);
        });
    });
}

function cambiarCapaBasePorBoton(layerKey) {
    if (!capasBaseConfig[layerKey]) {
        console.error(`Configuración de capa base '${layerKey}' no encontrada`);
        return;
    }

    // Actualizar botones
    document.querySelectorAll('.base-layer-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-layer="${layerKey}"]`)?.classList.add('active');

    // Cambiar capa base
    map.removeLayer(currentBaseLayer);
    
    const nuevaCapaBase = L.tileLayer(
        capasBaseConfig[layerKey].url, 
        {
            attribution: capasBaseConfig[layerKey].nombre,
            maxZoom: capasBaseConfig[layerKey].maxZoom || 18,
            minZoom: capasBaseConfig[layerKey].minZoom || 1
        }
    );
    
    nuevaCapaBase.addTo(map);
    currentBaseLayer = nuevaCapaBase;
    window.currentBaseLayer = nuevaCapaBase;
    
    // Sincronizar radio buttons
    const radioButtons = document.querySelectorAll(`input[name="baseLayer"], input[name="baseLayerMobile"]`);
    radioButtons.forEach(radio => {
        radio.checked = (radio.value === layerKey);
    });
    
    console.log(`Capa base cambiada a: ${capasBaseConfig[layerKey].nombre}`);
}

function setupInitialTheme() {
    console.log("Cargando tema inicial:", activeTemaName);
    
    // Marcar el botón del tema activo
    const initialThemeButton = document.querySelector(`.theme-btn[data-theme="${activeTemaName}"]`);
    if (initialThemeButton) {
        initialThemeButton.classList.add('active');
    }
    
    // Cargar el tema
    manejarCambioTema(activeTemaName, map, currentBaseLayer, capasOrdenadas, allTemasConfig);
    
    // Actualizar sidebar después de cargar el tema
    setTimeout(() => {
        actualizarCapasSidebar(activeTemaName, allTemasConfig);
        sincronizarEstadoCapas(activeTemaName, allTemasConfig);
        // ACTUALIZAR LEYENDA AL CARGAR TEMA INICIAL
        actualizarLeyenda(activeTemaName, allTemasConfig);
    }, 100);
}

function setupThemeListeners() {
    console.log('Configurando listeners de temas...');
    
    document.querySelectorAll('.theme-btn').forEach(button => {
        button.addEventListener('click', function() {
            const themeName = this.dataset.theme;
            console.log(`Cambiando a tema: ${themeName}`);
            
            if (allTemasConfig[themeName]) {
                // Remover clase active de todos los botones
                document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Actualizar tema activo
                activeTemaName = themeName;
                
                // Manejar cambio de tema
                manejarCambioTema(activeTemaName, map, currentBaseLayer, capasOrdenadas, allTemasConfig);
                
                // Actualizar sidebar después del cambio de tema
                setTimeout(() => {
                    actualizarCapasSidebar(activeTemaName, allTemasConfig);
                    sincronizarEstadoCapas(activeTemaName, allTemasConfig);
                    // ACTUALIZAR LEYENDA AL CAMBIAR TEMA
                    actualizarLeyenda(activeTemaName, allTemasConfig);
                }, 100);
                
                console.log(`Tema cambiado a: ${themeName}`);
            } else {
                console.error(`Tema '${themeName}' no encontrado en la configuración`);
            }
        });
    });
}
