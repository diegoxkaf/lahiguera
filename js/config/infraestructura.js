const infraestructuraConfig = {
    capas: ['infraestructura_municipio', 'infraestructura_parvulos', 'infraestructura_salud','infraestructura_colegios', 'infraestructura_carabineros', 'infraestructura_deportes','infraestructura_compañias', 'infraestructura_bibliotecas','infraestructura_cuerpos_bomberos','limite_comunal_linea','toponimia'],
    estilo: {
        infraestructura_municipio: {
            url:'infraestructura_municipio.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'NOM_COM', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Municipio', // Nombre personalizado de la Capa
            iconos: {
                'La Higuera': 'Municipio.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'DIRECCION',
                'Descripcion',
                'Origen Data',
                ],
            alias: {
                'DIRECCION': 'Dirección',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen de la Informacion'
            }
        },
        infraestructura_parvulos: {
            url:'infraestructura_parvulos.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'NOM_COM_ES', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'E. Educación Parvularia', // Nombre personalizado de la Capa
            iconos: {
                'LA HIGUERA': 'Parvulario.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'NOM_ESTAB',
                'Dependencia',
                'Ruralidad',
                'N_TOTAL',
                'DIRECCION',
                'NUMERO',
                'REFERENCIA',
                'Descripcion',
                'Origen Dato',
                ],
            alias: {
                'NOM_ESTAB': 'Nombre del establecimiento',
                'Dependencia': 'Organismo Dependiente',
                'Ruralidad':'Area Geográfica',
                'N_TOTAL': 'Matricula Total',
                'DIRECCION':'Dirección',
                'NUMERO':'Número',
                'REFERENCIA':'Referencia',
                'Descripcion':'Descripcion',
                'Origen Dato':'Origen del Dato'
            }
        },
        infraestructura_salud: {
            url:'infraestructura_salud.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'COD_DEP', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Establecimientos de Salud', // Nombre personalizado de la Capa
            iconos: {
                '5': 'Salud.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'NOMBRE',
                'TIPO',
                'DEP_ADM',
                'NIVEL',
                'PRESTADOR',
                'COMPLEJIDA',
                'TIPO_ATEN',
                'URGENCIA',
                'TIPO_URGE',
                'Descripcion',
                'Origen Data',
                ],
            alias: {
                'NOMBRE': 'Nombre',
                'TIPO': 'Tipo',
                'NIVEL':'Nivel',
                'PRESTADOR': 'Prestador',
                'COMPLEJIDA':'Complegidad',
                'TIPO_ATEN':'Tipo de Atención',
                'URGENCIA':'¿Cuenta con Urgencias?',
                'TIPO_URGE':'Tipo de Urgencias',
                'Descripcion':'Descripcion',
                'Origen Dato':'Origen de la Informacion'
            }
        },
        infraestructura_colegios: {
            url:'infraestructura_colegios.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'TIPO_SOST', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'E. Educación Escolar', // Nombre personalizado de la Capa
            iconos: {
                '1': 'escolar.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'NOM_RBD',
                'DIRECCION',
                'NUMERO',
                'REFERENCIA',
                'MAT_PARV',
                'MAT_BAS_RE',
                'MAT_MHC_RE',
                'MAT_HOM_TO',
                'MAT_MUJ_TO',
                'MAT_TOTAL',
                'Descripcion',
                'Origen Dato',
                ],
            alias: {
                'NOM_RBD':'Nombre del Establecimiento',
                'DIRECCION':'Dirección',
                'NUMERO':'Número',
                'REFERENCIA':'Referencia',
                'MAT_PARV': 'Nº Mat. Parvularia',
                'MAT_BAS_RE':'Nº Mat. Basica',
                'MAT_MHC_RE':'Nº Mat. Media',
                'MAT_HOM_TO':'Mat. Total Hombres',
                'MAT_MUJ_TO':'Mat. Total Mujeres',
                'MAT_TOTAL':'Matrícula Total',
                'Descripcion':'Descripcion',
                'Origen Dato':'Origen de la Informacion'
            }
        },
        infraestructura_carabineros: {
            url:'infraestructura_carabineros.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'RG', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Carabineros de Chile', // Nombre personalizado de la Capa
            iconos: {
                '4': 'Carabineros.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'NOMBRE_UNI',
                'TIPO_DE_UN',
                'NOMBRE_DE',
                'NUMERO',
                'Descripcion',
                'Origen Dato',
                ],
            alias: {
                'NOMBRE_UNI': 'Nombre de la Unidad',
                'TIPO_DE_UN': 'Tipo de Unidad',
                'NOMBRE_DE':'Direccion',
                'NUMERO': 'Numero',
                'Descripcion':'Descripcion',
                'Origen Dato':'Origen de la Informacion'
            }
        },
        infraestructura_deportes: {
            url:'infraestructura_deportes.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'CATEGORIA', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Infraestructura Deportiva', // Nombre personalizado de la Capa
            iconos: {
                'Base': 'Deportes.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'NOMBRE',
                'CONDICIO',
                'SECTOR',
                'ACCESO_DIS',
                'TIPO_ENTRA',
                'Descripcion',
                'Origen Dato',
                ],
            alias: {
                'NOMBRE': 'Nombre',
                'CONDICIO': 'Tipo',
                'SECTOR':'¿Público - Privado?',
                'ACCESO_DIS': 'Acceso Discapacidad',
                'TIPO_ENTRA':'Tipo de Entrada',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen de la Informacion'
            }
        },
        infraestructura_compañias: {
            url:'infraestructura_compañias.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'CUT_CUERPO', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Compañias de Bomberos', // Nombre personalizado de la Capa
            iconos: {
                '04112': 'Bomberos.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'COMPAñIA',
                'DIRECCION',
                'TELEFONO',
                'Descripcion',
                'Origen Data',
                ],
            alias: {
                'COMPAñIA': 'Nombre compañia',
                'DIRECCION': 'Direccion',
                'TELEFONO':'Telefono',
                'Descripcion':'Descripción',
                'Origen Data':'Origen de la Información'
            }
        },
        infraestructura_bibliotecas: {
            url:'infraestructura_bibliotecas.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'comuna', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Bibliotecas Publicas', // Nombre personalizado de la Capa
            iconos: {
                'La Higuera': 'Biblioteca.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'recinto',
                'codigo',
                'tipo_recin',
                'web_nac',
                'nombre_via',
                'num_via',
                'actualiza',
                'Descripcion',
                'Origen Data',
                ],
            alias: {
                'recinto': 'Nombre',
                'codigo': 'Codigo Biblioteca',
                'tipo_recin':'Tipo',
                'web_nac': 'Web',
                'nombre_via':'Direccion',
                'num_via':'Numero',
                'actualiza':'Ultima Actualizacion Dato',
                'Descripcion':'Descripcion',
                'Origen Dato':'Origen de la Informacion'
            }
        },
        infraestructura_cuerpos_bomberos: {
            url:'infraestructura_cuerpos_bomberos.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'NOMBRE_DEL', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Cuerpos de Bomberos', // Nombre personalizado de la Capa
            iconos: {
                'La Higuera': 'Bomberos.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'NOMBRE_DEL',
                'NOMBRE_DE',
                'NUMERACIó',
                'Descripcion',
                'Origen Data',
                ],
            alias: {
                'NOMBRE_DEL': 'Nombre del Cuerpo',
                'NOMBRE_DE': 'Direccion',
                'NUMERACIó':'Numero',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen de la Informacion'
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

export default infraestructuraConfig;
