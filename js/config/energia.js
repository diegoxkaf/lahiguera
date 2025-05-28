const energiaConfig = {
    capas: ['Energia_linea_de_transmision', 'Energia_media_tension','Energia_Plantas_eolicas', 'Energia_Potencial_Fotovoltaico','Energia_Solares', 'Energia_Subestaciones', 'Energia_Termoelectricas','limite_comunal_linea','toponimia'],
    estilo: {
        Energia_linea_de_transmision: {
            url:'Energia_linea_de_transmision.geojson',
            type: 'line',
            nombrePersonalizado: 'Linea de Transmision - Alta Tension',
            atributo: 'TENSION_KV', // Asegúrate de que este atributo exista en tu GeoJSON
            colores: {
                '500': '#FF6B6B',
                '220': '#4ECDC4',
                '110': '#2A9D8F',
                '23': '#E9C46A'
            },// Configuracion del Estilo Base de la Linea (Ancho, transparencia, Segmentacion de la Linea)
            estiloBase: {
                weight: 4,
                opacity: 0.8,
                dashArray: '1'
            },
            popupCampos: ['NOMBRE', 'TRAMO','PROPIEDAD','TIPO', 'CIRCUITO','F_OPERACIO', 'TENSION_KV','LONG_KM','ESTADO','FECH_ACT','Origen de la Data'],
            alias: {
                'NOMBRE': 'Nombre',
                'TRAMO': 'Tramo',
                'CIRCUITO': 'Circuito',
                'TENSION_KV':'Tension (KV)',
                'LONG_KM': 'Longitud de la linea en Km',
                'PROPIEDAD':'Propietario',
                'TIPO': 'Tipo de Linea',
                'F_OPERACIO':'Entrada en Operacion',
                'ESTADO':'Estado de la Linea',
                'FECH_ACT':'Ultima Actualizacion del Dato',
                'Origen de la Data':'Origen de la Informacion'
            },
            etiquetas: {
                campo: 'NOMBRE',
                estilo: {
                    color: '#000000', // Color del texto
                    fontSize: '9px', // Tamaño de la fuente
                    fontFamily: 'Arial, sans-serif', // Familia de la fuente
                    bufferColor: '#0118D8', // Color del contorno
                    bufferWidth: 0.3 // Ancho del contorno
                }
            }
        },
        Energia_media_tension: {
            url:'Energia_media_tension.geojson',
            type: 'line',
            nombrePersonalizado: 'Linea de Transmision - Media Tension',
            atributo: 'DESC_TENSION', // Asegúrate de que este atributo exista en tu GeoJSON
            colores: {
                '>1 kV y <15 kV': '#7E8A97',
                '23 kV': '#ED9728',
                'NULL': '#7E8A97'
            },// Configuracion del Estilo Base de la Linea (Ancho, transparencia, Segmentacion de la Linea)
            estiloBase: {
                weight: 4,
                opacity: 0.8,
                dashArray: '1'
            },
            popupCampos: ['NOMBRE_EMPRESA', 'DESC_TIPO_DISPOSICION_TRAMO','DESC_TIPO_PROPIEDAD','DESC_MATERIAL','DESC_TENSION','LARGO_RED', 'NUMERO_FASES','FECHA_INSTALACION','Origen Data'],
            alias: {
                'NOMBRE_EMPRESA': 'Propietaria de la Linea',
                'DESC_TIPO_DISPOSICION_TRAMO': 'Disposicion del Tramo',
                'DESC_TIPO_PROPIEDAD': 'Tipo de Propiedad',
                'DESC_MATERIAL':'Material del Cable',
                'DESC_TENSION':'Tension (KV)',
                'LARGO_RED': 'Longitud de la linea en Mt',
                'NUMERO_FASES':'Numero de Fases',
                'FECHA_INSTALACION': 'Fecha de Instalacion',
                'Origen Data':'Origen de la Informacion'
            },
            etiquetas: {
                campo: 'NOMBRE',
                estilo: {
                    color: '#000000', // Color del texto
                    fontSize: '9px', // Tamaño de la fuente
                    fontFamily: 'Arial, sans-serif', // Familia de la fuente
                    bufferColor: '#0118D8', // Color del contorno
                    bufferWidth: 0.3 // Ancho del contorno
                }
            }
        },
        Energia_Plantas_eolicas: {
            url:'Energia_Plantas_eolicas.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'TIPO', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Plantas Eólicas', // Nombre personalizado de la Capa
            iconos: {
                'EOLICO': 'eolico.png',
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: ['NOMBRE', 'PROPIEDAD', 'POTENCIAMW','UNIDADES','SIST_ELECT','ESTADO','F_OPERACIO', 'FECH_ACT','Origen de la Informacion'],
            alias: {
                'NOMBRE': 'Nombre',
                'PROPIEDAD': 'Propietario',
                'POTENCIAMW': 'Potencia en MW',
                'UNIDADES': 'Unidades',
                'SIST_ELECT':'Sistema Eléctrico',
                'ESTADO':'Estado',
                'F_OPERACIO':'Fecha Entrada en Operación',
                'FECH_ACT':'Ultima Actualizacion Dato',
                'Origen de la Informacion':'Origen de la Informacion'
            }
        },
        Energia_Potencial_Fotovoltaico: {
            url:'Energia_Potencial_Fotovoltaico.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'COMUNA', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Potencial Fotovoltaico 2021', // Nombre personalizado de la Capa
            atributo: 'NOM_COMUNA',
            colores: {
                'Potencial': '#E83A14'
            },
            popupCampos: ['COMUNA', 'REGION', 'Superficie_ha','Potencia_MW','Origen de la Data'],
            alias: {
                'COMUNA': 'Comuna',
                'REGION': 'Region',
                'Superficie_ha': 'Sup. Total Comunal(ha)',
                'Potencia_MW':'Potencia Total Comunal(MW)',
                'Origen de la Data':'Origen de la Informacion'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#E83A14', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.3 // Transparencia del relleno
            }
        },
        Energia_Solares: {
            url:'Energia_Solares.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'TIPO', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Plantas Solares', // Nombre personalizado de la Capa
            iconos: {
                'FOTOVOLTAICO': 'solar.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: ['NOMBRE', 'PROPIEDAD', 'POTENCIAMW','SIST_ELECT','ESTADO','F_OPERACIO','FECH_ACT','Origen del Dato'],
            alias: {
                'NOMBRE': 'Nombre Empresa',
                'PROPIEDAD': 'Propietario',
                'POTENCIAMW': 'Potencia en MW',
                'SIST_ELECT':'Sistema Eléctrico',
                'ESTADO':'Estado',
                'F_OPERACIO':'Fecha Entrada en Operación',
                'FECH_ACT':'Ultima Actualizacion Dato',
                'Origen del Dato':'Origen de la Informacion'
            }
        },
        Energia_Subestaciones: {
            url:'Energia_Subestaciones.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'SUBTIPO', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Subestaciones Elécticas', // Nombre personalizado de la Capa
            iconos: {
                '100': 'subestacion.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: ['NOMBRE', 'PROPIEDAD', 'TIPO','TENSION_KV','ESTADO','F_OPERACIO', 'FECH_ACT', 'Origen del Dato'],
            alias: {
                'NOMBRE': 'Nombre',
                'PROPIEDAD': 'Propietario',
                'TIPO':'Tipo',
                'TENSION_KV': 'Tension en KV',
                'ESTADO':'Estado',
                'F_OPERACIO':'Fecha Operacion',
                'FECH_ACT':'Ultima Actualizacion Dato',
                'Origen del Dato':'Origen de la Informacion'
            }
        },
        Energia_Termoelectricas: {
            url:'Energia_Termoelectricas.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'TIPO', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Plantas Termoelectricas', // Nombre personalizado de la Capa
            iconos: {
                'TERMOELECTRICA': 'termoelectrica.png',
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: ['NOMBRE', 'PROPIEDAD', 'UNIDADES','COMBUSTIBL','POTENCIAMW','SIST_ELECT','ESTADO','F_OPERACIO','FECH_ACT','Origen del Dato'],
            alias: {
                'NOMBRE': 'Nombre Empresa',
                'PROPIEDAD': 'Propietario',
                'UNIDADES':'Unidades',
                'COMBUSTIBL':'Combustible Usado',
                'POTENCIAMW': 'Potencia en MW',
                'SIST_ELECT':'Sistema Eléctrico',
                'ESTADO':'Estado',
                'F_OPERACIO':'Fecha Entrada en Operación',
                'FECH_ACT':'Ultima Actualizacion Dato',
                'Origen del Dato':'Origen de la Informacion'
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

export default energiaConfig;