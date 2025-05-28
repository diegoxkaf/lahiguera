// Configuracion Global de las Dimensiones

// Importa todos los archivos de configuracion de cada dimension
import agriculturaConfig from './agricultura.js';
import infraestructuraConfig from './infraestructura.js';
import inversionesConfig from './inversiones.js';
import mineriaConfig from './mineria.js';
import pescaConfig from './pesca.js';
import planificacionConfig from './planificacion.js';
import riesgosConfig from './riesgos.js';
import telecomunicacionesConfig from './telecomunicaciones.js';
import turismoConfig from './turismo.js';
import energiaConfig from './energia.js';

// Agrega aquí todas las configuraciones de tus temas con sus respectivos nombres
const allTemasConfig = {
    agricultura: agriculturaConfig,
    infraestructura: infraestructuraConfig,
    inversiones: inversionesConfig,
    mineria: mineriaConfig,
    pesca: pescaConfig,
    planificacion: planificacionConfig,
    riesgos: riesgosConfig,
    telecomunicaciones: telecomunicacionesConfig,
    turismo: turismoConfig,
    energia: energiaConfig,
};

export default allTemasConfig;