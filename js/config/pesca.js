const pescaConfig = {
    capas: ['pesca_caletas', 'pesca_infraestructura_doh', 'pesca_aaa','pesca_amerb','pesca_concesiones','pesca_planes_manejo','pesca_areas_protegidas','limite_comunal_linea','toponimia'],
    estilo: {
        pesca_caletas: {
            url:'pesca_caletas.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'Comuna', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Caletas Pesqueras Artesanales', // Nombre personalizado de la Capa
            iconos: {
                '4104': 'Caletas_Pesqueras.png',
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: ['Nombre Caleta',
                         'Cantidad de Organizaciones', 
                         'Cantidad de Embarcaciones',
                         'Cantidad de pescadores mujeres',
                         'Cantidad de pescadores hombre',
                         'Propiedad del Terreno',
                         'Principales actividades',
                         'Áreas potenciales',
                         'Cantidad de especies capturadas (TM)',
                         'Total Algas (TM)',
                         'Total Crustáceos (TM)',
                         'Total Moluscos (TM)',
                         'Total otros (TM)',
                         'Total Peces (TM)',
                         'Principales especies',
                         'Descripcion',
                         'Origen Data'
            ],
            alias: {
                'Nombre Caleta': 'Nombre Caleta',
                'Cantidad de Organizaciones': 'Cantidad de Organizaciones',
                'Cantidad de Embarcaciones': 'Cantidad de Embarcaciones',
                'Cantidad de pescadores mujeres': 'Cantidad de pescadoras Mujeres',
                'Cantidad de pescadores hombre':'Cantidad de pescadores Hombres',
                'Propiedad del Terreno':'Propiedad del Terreno',
                'Principales actividades':'Principales Actividades',
                'Áreas potenciales':'Áreas potenciales',
                'Cantidad de especies capturadas (TM)':'Cantidad de especies capturadas (TM)',
                'Total Algas (TM)':'Total Algas (TM)',
                'Total Crustáceos (TM)':'Total Crustáceos (TM)',
                'Total Moluscos (TM)':'Total Moluscos (TM)',
                'Total otros (TM)':'Total otros (TM)',
                'Total Peces (TM)':'Total Peces (TM)',
                'Principales especies':'Principales especies',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen Data'
            }
        },
        pesca_infraestructura_doh: {
            url:'pesca_infraestructura_doh.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'COMUNA', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Infraestructura de Obras Portuarias', // Nombre personalizado de la Capa
            iconos: {
                'La Higuera': 'Infraestructura_dop.png'
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'LOCATION',
                'NOMBRE', 
                'OPERATIVA',
                'Descripcion',
                'Origen Data'
   ],
   alias: {
       'LOCATION': 'Identificador MOP',
       'NOMBRE': 'Nombre de la Infraestructura',
       'OPERATIVA': '¿Operativa?',
       'Descripcion': 'Descripcion',
       'Origen Data':'Origen del Dato'
   }
        },
        pesca_aaa: {
            url:'pesca_aaa.geojson',
            type: 'line',
            nombrePersonalizado: 'Areas Apropiadas para la Acuicultura',
            atributo: 'Tipo de Área apropiada para el ejercicio de la acuicultura', // Asegúrate de que este atributo exista en tu GeoJSON
            colores: {
                '1': '#F3F7EC'
            },// Configuracion del Estilo Base de la Linea (Ancho, transparencia, Segmentacion de la Linea)
            estiloBase: {
                weight: 4,
                opacity: 0.8,
                dashArray: '1'
            },
            popupCampos: [
                'Nombre A.A.A.',
                'Tipo de Área apropiada para el ejercicio de la acuicultura',
                'N° Decreto SSFFAA', 
                'Fecha Decreto SSFFAA',
                'Descripcion',
                'Origen Dato',
                'Ultima Actualizacion Dato'
                ],
            alias: {
                'Nombre A.A.A.': 'Nombre del Area',
                'Tipo de Área apropiada para el ejercicio de la acuicultura': 'Tipo de Área apropiada para el ejercicio de la acuicultura',
                'N° Decreto SSFFAA': 'N° Decreto SSFFAA',
                'Fecha Decreto SSFFAA': 'Fecha Decreto SSFFAA',
                'Descripcion':'Descripcion',
                'Origen Dato':'Origen del Dato',
                'Ultima Actualizacion Dato':'Ultima Actualizacion del Dato',
            },
        },
        pesca_amerb: {
            url:'pesca_amerb.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'Condición en que se encuentra el estado de un Área de Manejo', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Areas de Manejo y Explotacion de Productos Bentonicos', // Nombre personalizado de la Capa
            atributo: 'Condición en que se encuentra el estado de un Área de Manejo',
            colores: {
                'DECRETADO': '#363062',
                'PENDIENTE': '#4D4C7D',
                'RECHAZADO': '#827397',
            },
            popupCampos: [
                'Nombre sector AMERB',
                 'Fecha ingreso de la solicitud AMERB',
                  'Detalle del estado de la tramitación (Decretada, Tramite,\nRechazada)',
                  'Estado de tramitación del AMERB',
                  'Condición en que se encuentra el estado de un Área de\nManejo',
                  'Superficie AMERB en hectáreas',
                  'Especies principales del AMERB',
                  'Nombre de la o las organización (es) de pescadores\nartesanales vinculado (s)',
                'Número de Registro Pescadores Artesanales',
                'Fecha del Registro Pescadores Artesanales',
                'Número del decreto del Ministerio de Economía que establece\nel sector como AMERB (Dcto. MINECON)',
                'Período de validez de la destinación del Área de Manejo',
                'Descripcion',
                'Origen Dato',
                'Ultima Actualizacion Dato'
                ],
            alias: {
                'Nombre sector AMERB': 'Nombre sector AMERB',
                'Fecha ingreso de la solicitud AMERB': 'Fecha ingreso de la solicitud AMERB',
                'Detalle del estado de la tramitación (Decretada, Tramite,\nRechazada)': 'Detalle del estado de la tramitación (Decretada, Tramite, Rechazada)',
                'Estado de tramitación del AMERB':'Estado de tramitación del AMERB',
                'Condición en que se encuentra el estado de un Área de\nManejo':'Condición en que se encuentra el estado de un Área de Manejo',
                'Superficie AMERB en hectáreas':'Superficie AMERB en hectárease',
                'Especies principales del AMERB':'Especies principales del AMERB',
                'Nombre de la o las organización (es) de pescadores\nartesanales vinculado (s)':'Nombre de la o las organización (es) de pescadores artesanales vinculado (s)',
                'Número de Registro Pescadores Artesanales':'Número de Registro Pescadores Artesanales',
                'Fecha del Registro Pescadores Artesanales':'Fecha del Registro Pescadores Artesanales',
                'Número del decreto del Ministerio de Economía que establece\nel sector como AMERB (Dcto. MINECON)':'Número del decreto del Ministerio de Economía que establece el sector como AMERB (Dcto. MINECON)',
                'Período de validez de la destinación del Área de Manejo':'Período de validez de la destinación del Área de Manejo',
                'Descripcion':'Descripcion',
                'Origen Dato':'Origen del Dato',
                'Ultima Actualizacion Dato':'Ultima Actualizacion del Dato'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#73BBA3', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.5 // Transparencia del relleno
            }
        },
        pesca_concesiones: {
            url:'pesca_concesiones.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'Grupo de especies de cultivo', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Concesiones de Acuicultura', // Nombre personalizado de la Capa
            atributo: 'Grupo de especies de cultivo',
            colores: {
                'PECES': '#618264',
                'MOLUSCOS': '#79AC78',
                'SALMONES': '#B0D9B1',
                'ALGAS': '#D0E7D2',
            },
            popupCampos: [
                'Nombre de Titular',
                'Número Pert, código de la solicitud de ingreso a trámite.',
                'Código de Centro de Cultivo de acuerdo al Registro Nacional\nde Acuicultura (RNA)',
                'Nombre de la(s) especie(s) de cultivo.',
                'Estado de trámite de la concesión y solicitud de acuicultura',
                'Grupo de especies de cultivo',
                'Superficie (Há)',
                'Descripcion',
                'Origen Data',
                'Ultima Actualizacion Dato'
                ],
            alias: {
                'Nombre de Titular': 'Nombre de Titular',
                'Número Pert, código de la solicitud de ingreso a trámite.': 'Número Pert, código de la solicitud de ingreso a trámite.',
                'Código de Centro de Cultivo de acuerdo al Registro Nacional\nde Acuicultura (RNA)': 'Código de Centro de Cultivo de acuerdo al Registro Nacional de Acuicultura (RNA)',
                'Nombre de la(s) especie(s) de cultivo.':'Nombre de la(s) especie(s) de cultivo.',
                'Estado de trámite de la concesión y solicitud de acuicultura':'Estado de trámite de la concesión y solicitud de acuicultura',
                'Grupo de especies de cultivo':'Grupo de especies de cultivo',
                'Superficie (Há)':'Superficie en ha',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen de la Data',
                'Ultima Actualizacion Dato':'Ultima Actualizacion del Dato'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#618264', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.6 // Transparencia del relleno
            }
        },
        pesca_planes_manejo: {
            url:'pesca_planes_manejo.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'Nombre de la región', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Planes de Manejo de Recursos Bentonicos', // Nombre personalizado de la Capa
            atributo: 'Nombre de la región',
            colores: {
                'REGION DE COQUIMBO': '#0B409C',
            },
            popupCampos: [
                'Número identificador',
                'Nombre correspondiente al Plan de Manejo Bentónico',
                'Nombre de las comunas correspondientes el Plan de manejo\nBentónico',
                'Numero de resolución pesquera que establece al Plan de\nManejo, corresponde a informes técnicos del Plan de Manejo\npara obtener el decreto o resolución exenta',
                'Fecha de promulgación de la resolución pesquera que\nestablece al plan de manejo pesquera',
                'Fecha de promulgación de la resolución pesquera que\naprueba el Plan de Manejo.',
                'Área referencial en hectáreas',
                'Especie(s) principal(es) que identifican el Plan de Manejo\nBentónico',
                'Régimen de extracción del Plan de Manejo determinado por el\nartículo 9° Bis de Ley General de Pesca y Acuicultura',
                'Descripcion',
                'Origen Data',
                'Ultima Actualizacion Data'
                ],
            alias: {
                'Número identificador': 'Número identificador',
                'Nombre correspondiente al Plan de Manejo Bentónico': 'Nombre correspondiente al Plan de Manejo Bentónico',
                'Nombre de las comunas correspondientes el Plan de manejo\nBentónico': 'Nombre de las comunas correspondientes el Plan de manejo Bentónico',
                'Numero de resolución pesquera que establece al Plan de\nManejo, corresponde a informes técnicos del Plan de Manejo\npara obtener el decreto o resolución exenta':'Numero de resolución pesquera que establece al Plan de Manejo, corresponde a informes técnicos del Plan de Manejo para obtener el decreto o resolución exenta',
                'Fecha de promulgación de la resolución pesquera que\nestablece al plan de manejo pesquera':'Fecha de promulgación de la resolución pesquera que establece al plan de manejo pesquera',
                'Fecha de promulgación de la resolución pesquera que\naprueba el Plan de Manejo.':'Fecha de promulgación de la resolución pesquera que aprueba el Plan de Manejo.',
                'Área referencial en hectáreas':'Área referencial en hectáreas',
                'Especie(s) principal(es) que identifican el Plan de Manejo\nBentónico':'Especie(s) principal(es) que identifican el Plan de Manejo Bentónico',
                'Régimen de extracción del Plan de Manejo determinado por el\nartículo 9° Bis de Ley General de Pesca y Acuicultura':'Régimen de extracción del Plan de Manejo determinado por el artículo 9° Bis de Ley General de Pesca y Acuicultura',
                'Descripcion':'Descripcion',
                'Origen Data':'Origen de la Data',
                'Ultima Actualizacion Data':'Ultima Actualizacion de la Data'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#815B5B', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.5 // Transparencia del relleno
            }
        },
        pesca_areas_protegidas: {
            url:'pesca_areas_protegidas.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'Nombre del Área Marina Protegida', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Áreas Marinas Protegidas', // Nombre personalizado de la Capa
            atributo: 'Nombre del Área Marina Protegida',
            colores: {
                'ARCHIPIELAGO DE HUMBOLDT': '#F6FB7A',
                'ISLA CHAÑARAL': '#ED7B7B',
                'ISLAS CHOROS DAMAS': '#F0B86E',
            },
            popupCampos: [
                'Nombre del Área Marina Protegida',
                'Numero de decreto que la establece',
                'Fecha de decreto que la establece',
                'Creador del Área Marina Protegida',
                'Superficie (Ha)',
                'Descripcion',
                'Origen Dato',
                'Ultima Actualizacion Dato'
            ],
            alias: {
                'Nombre del Área Marina Protegida': 'Nombre del Área Marina Protegida',
                'Numero de decreto que la establece': 'Numero de decreto que la establece',
                'Fecha de decreto que la establece': 'Fecha de decreto que la establece',
                'Creador del Área Marina Protegida':'Creador del Área Marina Protegida',
                'Superficie (Ha)':'Superficie (Ha)',
                'Descripcion':'Descripcion',
                'Origen Dato':'Origen del Dato',
                'Ultima Actualizacion Dato':'Ultima Actualizacion del Dato',
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#FFCD4B', // Color del borde
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

export default pescaConfig;
