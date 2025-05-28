const planificacionConfig = {
    capas: ['ipt_prc', 'ipt_prc_inundables', 'ipt_ZUBC','ipt_pri_elqui','limite_comunal_linea','toponimia'],
    estilo: {
        ipt_ZUBC: {
            url:'ipt_ZUBC.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'Z_COMUNAL', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Zonificacion de Uso del Borde Costero', // Nombre personalizado de la Capa
            colores: {
                'ZONA AAA': '#1E201E',
                'ZONA DE ASENTAMIENTOS HUMANOS': '#7C93C3',
                'ZONA DE CONSERVACION DE LA NATURALEZA': '6C4E31',
                'ZONA DE CONSERVACION DEL PATRIMONIO CULTURAL Y ARQ': '#FFDBB5',
                'ZONA DE PESCA ARTESANAL Y CALETAS': '#7AB2D3',
                'ZONA DE RESTRICCION POR RIESGO': '#AF1740',
                'ZONA FORESTAL': '#898121',
                'ZONA INDUSTRIAL': '#9A7E6F',
                'ZONA PORTUARIA': '#B7B7B7',
                'ZONA PREFERENTEMENTE TURISTICA': '#6439FF',
            },
            popupCampos: ['Z_COMUNAL', 'USO', 'REGIONAL','LEYENDA','Nota','Mapa Completo','Link Memoria','Origen Dato'],
            alias: {
                'Z_COMUNAL': 'Nombre',
                'LEYENDA': 'Id',
                'USO': 'Sub Uso',
                'REGIONAL': 'Uso Regional',
                'Mapa Completo': 'Mapa completo de la Zonificacion',
                'Link Memoria': 'Memoria de la Zonificacion',
                'Nota':'Descripcion',
                'Origen Dato':'Origen de la Informacion'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#1E201E', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.5 // Transparencia del relleno
            }
        },
        ipt_pri_elqui: {
            url:'ipt_pri_elqui.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'ZONA', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Plan Regulador Intercomunal', // Nombre personalizado de la Capa
            colores: {
                'APVN': '#78B3CE',
                'AU': '#C9E6F0A',
                'AV': '#8EB486',
                'ZEU-2': '#A59D84',
                'ZEU-3': '#C1BAA1',
                'ZEU-6': '#D7D3BF',
                'ZEU-7': '#ECEBDE',
                'ZEU-P1': '#E195AB',
                'ZEU-P2': '#FFCCE1',
            },
            popupCampos: ['ZONA', 'NOM', 'UPERM', 'UPROH', 'LOC', 'T_DO', 'N_DOC', 'P_DO',  'Link Decreto', 'Link Ordenanza', 'Link LGUC', 'Ordenanza LGUC', 'Descripcion', 'Origen Data'],
            alias: {
                'ZONA': 'Zona',
                'NOM': 'Descripcion Zona',
                'UPERM':'Usos Permitidos',
                'UPROH': 'Uso Prohibido',
                'LOC':'Localidad',
                'T_DO':'Tipo Documento',
                'N_DOC':'Numero Documento',
                'P_DO':'Fecha Publicacion',
                'Link Decreto':'Link Decreto',
                'Link Ordenanza':'Ordenanza Plan Regulador',
                'Link LGUC':'Ley General Urbanismo y Construccion',
                'Ordenanza LGUC':'Ordenanza LGUC',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen de la Informacion'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#8EA3A6', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.5 // Transparencia del relleno
            }
        },
        ipt_prc: {
            url:'ipt_prc.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'ZONA', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Plan Regulador Comunal', // Nombre personalizado de la Capa
            colores: {
                'Plaza': '#DDA853',
                'ZAP': '#FFFBCA',
                'ZAV': '#889E73',
                'ZC': '#500073',
                'ZCH1': '#CBA35C',
                'ZCH2': '#754E1A',
                'ZE': '#CDC1FF',
                'ZIP': '#FF8383',
                'ZIS': '#9AA6B2',
                'ZU1': '#9ACBD0',
                'ZU2': '#48A6A7',
                'ZU3': '#2973B2',
                'ZU4': '#23486A',
                'ZU5': '#09122C'
            },
            popupCampos: ['ZONA', 'NOM', 'UPERM', 'UPROH', 'LOC', 'T_DO', 'N_DOC', 'P_DO',  'Link Decreto', 'Link Ordenanza', 'Link LGUC', 'Ordenanza LGUC', 'Descripcion', 'Origen Data'],
            alias: {
                'ZONA': 'Zona',
                'NOM': 'Descripcion Zona',
                'UPERM':'Usos Permitidos',
                'UPROH': 'Uso Prohibido',
                'LOC':'Localidad',
                'T_DO':'Tipo Documento',
                'N_DOC':'Numero Documento',
                'P_DO':'Fecha Publicacion',
                'Link Decreto':'Link Decreto',
                'Link Ordenanza':'Ordenanza Plan Regulador',
                'Link LGUC':'Ley General Urbanismo y Construccion',
                'Ordenanza LGUC':'Ordenanza LGUC',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen de la Informacion'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#4B5945', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.5 // Transparencia del relleno
            }
        },
        ipt_prc_inundables: {
            url:'ipt_prc_inundables.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'ZONA', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Plan Regulador Comunal - Zonas Inundables', // Nombre personalizado de la Capa
            colores: {
                'AR1': '#F2B28C',
                'AR2': '#D2665A',
                'AR3': '#B82132'
            },
            popupCampos: ['ZONA', 'NOM', 'UPERM', 'LOC', 'T_DO', 'N_DOC', 'P_DO',  'Link Decreto', 'Link Ordenanza', 'Link LGUC', 'Ordenanza LGUC', 'Descripcion', 'Origen Data'],
            alias: {
                'ZONA': 'Zona',
                'NOM': 'Descripcion Zona',
                'UPERM':'Usos Permitidos',
                'LOC':'Localidad',
                'T_DO':'Tipo Documento',
                'N_DOC':'Numero Documento',
                'P_DO':'Fecha Publicacion',
                'Link Decreto':'Link Decreto',
                'Link Ordenanza':'Ordenanza Plan Regulador',
                'Link LGUC':'Ley General Urbanismo y Construccion',
                'Ordenanza LGUC':'Ordenanza LGUC',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen de la Informacion'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#B82132', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.5 // Transparencia del relleno
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

export default planificacionConfig;
