
const telecomunicacionesConfig = { 
    capas: ['Telecomunicaciones_antenas_4G', 'Telecomunicaciones_antenas_5G','limite_comunal_linea','toponimia'],
    estilo: {
        Telecomunicaciones_antenas_5G: {
            url:'Telecomunicaciones_antenas_5G.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'OPERADOR', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Antenas 5G', // Nombre personalizado de la Capa
            iconos: {
                'Telefónica': 'Movistar5G.png',
                'Wom': 'WOM5G.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: ['OPERADOR', 'FRECUENCIA', 'DIRECCION','Descripcion','Origen_Informacion'],
            alias: {
                'OPERADOR': 'Operador',
                'FRECUENCIA': 'Frecuencia',
                'DIRECCION': 'Dirección',
                'Descripcion':'Descripción',
                'Origen_Informacion':'Origen de la Información'
            },
        },
        Telecomunicaciones_antenas_4G: {
            url:'Telecomunicaciones_antenas_4G.geojson',
            type: 'point',
            nombrePersonalizado: 'Antenas 4G',
            atributo: 'NOMBRE_EMP',
            iconos: {
                'CLARO CHILE S.A.': 'Claro4G.png',
                'ENTEL PCS': 'Entel4G.png',
                'MOVISTAR MOVIL':'Movistar4G.png',
                'Wom':'WOM4G.png'
            },
            popupCampos: ['NOMBRE_EMP', 'TITE_COD', 'TITE_DESCR','Descripcion','Origen_Informacion','Ultima Actualizacion'],
            alias: {
                'NOMBRE_EMP': 'Operador',
                'TITE_COD': 'Tecnología',
                'TITE_DESCR': 'Nota',
                'Descripcion':'Descripción',
                'Origen_Informacion':'Origen de la Data',
                'Ultima Actualizacion':'Ultima Actualizacion Data'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#2d3436', // Color del borde
                weight: 2, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0 // Transparencia del relleno
            }
        },
        limite_comunal_linea: {
            url:'limite_comunal_linea.geojson',
            type: 'line',
            nombrePersonalizado: 'Limite Comunal',
            atributo: 'NOM_COMUNA',
            colores: {
                'La Higuera': '#333644'
            },
            popupCampos: ['NOM_COMUNA', 'NOM_PROVIN', 'NOM_REGION'],
            alias: {
                'NOM_COMUNA': 'Comuna',
                'NOM_PROVIN': 'Provincia',
                'NOM_REGION': 'Region'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#2d3436', // Color del borde
                weight: 2, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0 // Transparencia del relleno
            }
        },
        toponimia: {
            url:'toponimia.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'Tipo', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Toponimia', // Nombre personalizado de la Capa
            iconos: { // Edicion de Iconos
                'Localidad': 'localidad.png'
            },
            estiloAlternativo: {// Icono alternativo en caso que no encuentre el icono
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 4, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: ['Nombre' ],
            alias: {
                'Nombre': 'Nombre',
            },
            etiquetas: {
                campo: 'Nombre',
                estilo: {
                    color: '#000000', // Color del texto
                    fontSize: '9px', // Tamaño de la fuente
                    fontFamily: 'Arial, sans-serif', // Familia de la fuente
                    bufferColor: '#88304E', // Color del contorno
                    bufferWidth: 0.3, // Ancho del contorno
                    offsetY: -9, // Añadida propiedad para el offset vertical
                }
            }
        },
    },
    leyenda: {
    },
};

export default telecomunicacionesConfig;