const inversionesConfig = {
    capas: ['inversiones_SEIA', 'inversiones_bip','inversiones_geo_cgr','limite_comunal_linea','toponimia'],
    estilo: {
        inversiones_SEIA: {
            url:'inversiones_SEIA.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'Sector Productivo', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Inversiones Privadas 2010 - 2025', // Nombre personalizado de la Capa
            iconos: {
                'Energia': 'inv_energia.png',
                'Infraestructura Portuaria': 'inv_portuaria.png',
                'Mineria': 'inv_mineria.png',
                'Otros':'inv_Otros.png',
                'Pesca y Acuicultura':'inv_pesca.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'Nombre',
                'Sector Productivo',
                'Inversion (MMU$)',
                'Titular',
                'Tipo',
                'Estado',
                'Fecha Calificacion',
                'Link del Expediente',
                'Descripcion',
                'Origen del Dato'
                ],
            alias: {
                'Nombre': 'Nombre Proyecto',
                'Sector Productivo': 'Sector Productivo',
                'Inversion (MMU$)':'Inversion en MMU$',
                'Titular': 'Titular del Proyecto',
                'Tipo':'Tipo de Ingreso Al SEIA',
                'Estado':'Estado del Proyecto',
                'Fecha Calificacion':'Fecha Calificacion',
                'Link del Expediente':'Link Expediente SEIA',
                'Descripcion':'Descripcion',
                'Origen del Dato':'Origen de la Data'
            }
        },
        inversiones_bip: {
            url:'inversiones_bip.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'SECTOR', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Inversion Pública 2015-2025 - BIP', // Nombre personalizado de la Capa
            iconos: {
                'DEPORTES': 'pub_deporte.png',
                'EDUCACION, CULTURA Y PATRIMONIO': 'pub_educacion.png',
                'MULTISECTORIAL': 'pub_multisectorial.png',
                'PESCA': 'pub_pesca.png',
                'RECURSOS HIDRICOS': 'pub_hidraulicas.png',
                'SALUD': 'pub_salud.png',
                'SEGURIDAD PUBLICA': 'pub_seguridad.png',
                'TRANSPORTE': 'pub_transporte.png',
                'VIVIENDA Y DESARROLLO URBANO': 'pub_habitacional.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'DESCRIPCIÓN',
                'SECTOR',
                'SUB SECTOR',
                'AÑO POSTULACIÓN',
                'CÓDIGO BIP',
                'COSTO TOTAL [M$]',
                'ETAPA ACTUAL',
                'INSTITUCIÓN FORMULADORA',
                'INSTITUCIÓN FINANCIERA',
                'FUENTE FINANCIERA',
                'Descripcion',
                'Origen de la Informacion'
                ],
            alias: {
                'DESCRIPCIÓN': 'Nombre Proyecto',
                'SECTOR': 'Sector',
                'SUB SECTOR':'Sub Sector',
                'AÑO POSTULACIÓN': 'Año Postulacion',
                'CÓDIGO BIP':'Codigo BIP',
                'COSTO TOTAL [M$]':'Costo total Proyecto en M$',
                'ETAPA ACTUAL':'Etapa Actual',
                'INSTITUCIÓN FORMULADORA':'Institución Formuladora',
                'INSTITUCIÓN FINANCIERA':'Institución Financiera',
                'FUENTE FINANCIERA':'Fuente Financiera',
                'Descripcion':'Nota',
                'Origen de la Informacion':'Origen de la Información'
            }
        },
        inversiones_geo_cgr: {
            url:'inversiones_geo_cgr.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'CLASIFICACION', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Inversion Pública 2015-2025 - GEOCGR', // Nombre personalizado de la Capa
            iconos: {
                'Areas verdes; esparcimiento y equipamiento vario urbano y rural': 'pub_areaverde.png',
                'Deporte': 'pub_deporte.png',
                'Edificaciones públicas': 'pub_edificacion.png',
                'Educación y cultura': 'pub_educacion.png',
                'Habitacional': 'pub_habitacional.png',
                'Hidráulicas': 'pub_hidraulicas.png',
                'Portuarias y aeroportuarias': 'pub_portuaria.png',
                'Salud y sanidad': 'pub_salud.png',
                'Transporte terrestre': 'pub_transporte.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'Titulo',
                'DESCRIPCION',
                'CLASIFICACION',
                'MONTO_VIGENTE',
                'F_ADJUDICACION',
                'URL_ACTA',
                'SERV_MAND',
                'CODIGO_BIP',
                'ID_MERCADO_PUB',
                'Descripcion_1',
                'Origen Data'
                ],
            alias: {
                'Titulo':'Nombre Proyecto',
                'DESCRIPCION':'Descripcion',
                'CLASIFICACION':'Categoria',
                'MONTO_VIGENTE':'Monto en pesos',
                'F_ADJUDICACION':'Fecha Adjudicacion',
                'URL_ACTA':'Acta Adjudicacion',
                'SERV_MAND':'Servicio Mandante',
                'CODIGO_BIP':'Codigo BIP',
                'ID_MERCADO_PUB':'Codigo Mercado Publico',
                'Descripcion_1':'Nota',
                'Origen Data':'Origen de la Data'
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
    }
};

export default inversionesConfig;
