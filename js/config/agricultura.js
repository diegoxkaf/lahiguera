const agriculturaConfig = {
    capas: ['Agro_Derechos_Agua', 'Agro_apr', 'Agro_plantaciones_frutales','Agro_catastro_fruticola','hidrografia','limite_comunal_linea','toponimia'],
    estilo: {
        Agro_Derechos_Agua: {
            url:'Agro_Derechos_Agua.geojson', // Nombre del Archivo en la Carpeta /geojson
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'Uso del Ag', // Nombre del atributo en el GeoJSON
            nombrePersonalizado: 'Derechos de Agua', // Nombre personalizado de la Capa
            iconos: {
                'Bebida/Uso Domestico/Saneamiento': 'Derechos Agua.png',
                'Riego': 'Derechos Riego.png',
                'Uso Minero': 'Derechos Mineria.png',
                'Sin Informacion': 'Derechos_sininfo.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            //Configuracion del Popup (Nombre del campo)
            popupCampos: ['Código de', 'Nombre Sol', 'Unidad de','Fecha de R','Nº Resolu','Fecha Toma','Tipo Derec', 'Naturaleza','Uso del Ag','Cuenca','Fuente','Caudal An','Ejercicio','Origen','Ult_Actual','Link_ Data'],
            alias: {
                'Código de': 'Codigo de Expediente',
                'Nombre Sol': 'Nombre del Solicitante',
                'Unidad de': 'Unidad de resolucion /Oficio/C.B.R.',
                'Fecha de R': 'Fecha de Resolucion / Envio al Juez / Inscripcion C.B.Rs',
                'Nº Resolu':'N° Resolución/ Oficio/ Fojas | N° CBR',
                'Fecha Toma':'Fecha Toma Razon',
                'Tipo Derec':'Tipo de Derecho',
                'Naturaleza':'Naturaleza del Agua',
                'Uso del Ag':'Uso del Agua',
                'Cuenca':'Nombre de la Cuenca',
                'Fuente':'Fuente de Origen',
                'Caudal An':'Caudal Anual Promedio en Lt/s',
                'Ejercicio':'Ejercicio del Derecho',
                'Origen':'Origen de la Informacion',
                'Ult_Actual':'Ultima consulta realizada de la informacion',
                'Link_ Data':'Direcccion de acceso a la fuente de los datos',
            }
        },
        Agro_apr: {
            url:'Agro_plantaciones_frutales.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'COMUNA', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Servicios Sanitarios Rurales', // Nombre personalizado de la Capa
            iconos: {
                'LA HIGUERA': 'Torre Agua2.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: ['NOMBRE', 'FUENTE', 'FECHA_ACTUALIZACION','LEVANTAMIENTO','Descripcion','Origen Data'],
            alias: {
                'NOMBRE': 'Nombre de la Instalacion',
                'FUENTE': 'Fuente',
                'FECHA_ACTUALIZACION': 'Fecha Actualizacion Dato',
                'LEVANTAMIENTO':'Levantamiento',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen de la Informacion'
            }
        },
        Agro_plantaciones_frutales: {
            url:'Agro_plantaciones_frutales.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'Especie', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Catastro Fruticola - Plantaciones', // Nombre personalizado de la Capa
            atributo: 'Especie',
            colores: {
                'Olivo': '#5F1B00',
                'Lima': '#91300A',
                'Limonero': '#D34F1E',
                'Nectarino': '#ECA106',
            },
            popupCampos: ['Comuna', 'Especie', 'Variedad','Año plantacion','Nª Arboles','Sup. en ha','Descripcion','Origen del Dato'],
            alias: {
                'Comuna': 'Comuna',
                'Especie': 'Especie',
                'Variedad': 'Variedad',
                'Año plantacion':'Año Plantacion',
                'Nª Arboles':'Nº Arboles',
                'Sup. en ha':'Superficie en Ha',
                'Descripcion':'Descripcion',
                'Origen del Dato':'Origen del Dato',
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#E83A14', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.3 // Transparencia del relleno
            }
        },
        Agro_catastro_fruticola: {
            url:'Agro_catastro_fruticola.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'Infraestructura', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Catastro Fruticola - Instalaciones', // Nombre personalizado de la Capa
            iconos: {
                'Agroindustrias': 'Agroindustria.png',
                'Camaras de Frio':'CamarasFrio.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: ['Comuna', 'Tipo Empresa', 'Procesamiento','Especie','Infraestructura','Descripcion', 'Origen Data'],
            alias: {
                'Comuna': 'Nombre Comuna',
                'Tipo Empresa': 'Tipo de empresa',
                'Procesamiento':'Tipo de procesamiento',
                'Especie': 'Especie',
                'Infraestructura':'Infraestructura',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen del Dato'
            }
        },
        hidrografia: {
            url:'hidrografia.geojson',
            type: 'line',
            nombrePersonalizado: 'Hidrografia',
            atributo: 'tipo', // Asegúrate de que este atributo exista en tu GeoJSON
            colores: {
                'Laguna': '#E8F6EF',
                'Costa': '#E8F6EF',
                'Isla': '#E8F6EF',
                'Quebrada': '#B8DFD8'
            },// Configuracion del Estilo Base de la Linea (Ancho, transparencia, Segmentacion de la Linea)
            estiloBase: {
                weight: 4,
                opacity: 0.8,
                dashArray: '1'
            },
            popupCampos: ['nombre', 'tipo', 'Descripcion', 'Origen del Dato','Ultima Actualizacion'],
            alias: {
                'nombre': 'Nombre',
                'tipo': 'Tipo',
                'Descripcion': 'Descripcion',
                'Origen del Dato': 'Origen del Dato',
                'Ultima Actualizacion':'Ultima Actualizacion del Dato'
            },
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
    }
};

export default agriculturaConfig;
