const turismoConfig = {
    capas: ['turismo_atractivos_turisticos', 'turismo_rutas','turismo_bienes_nacionales_protegidos', 'turismo_infraestructura', 'turismo_snaspe','turismo_monumentos_nacionales','limite_comunal_linea','toponimia'],
    estilo: {
        turismo_bienes_nacionales_protegidos: {
            url:'turismo_bienes_nacionales_protegidos.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'BNP', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Bienes Nacionales Protegidos', // Nombre personalizado de la Capa
            atributo: 'BNP',
            colores: {
                'ISLA GAVIOTA': '#85193C'
            },
            popupCampos: ['BNP', 'REGION', 'DECRETO','SUPERFICIE','ADMINISTRA','Descripcion','Origen Dato'],
            alias: {
                'BNP': 'Nombre',
                'REGION': 'Region',
                'DECRETO':'Decreto',
                'SUPERFICIE':'Superficie en hectáreas',
                'ADMINISTRA':'Administracion del Bien',
                'Descripcion':'Descripción',
                'Origen Dato':'Origen del Dato'
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#85193C', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.5 // Transparencia del relleno
            }
        },
        turismo_snaspe: {
            url:'turismo_snaspe.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'CATEGORIA', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Sistema Nacional de Áreas Protegidas', // Nombre personalizado de la Capa
            colores: {
                'Reserva Nacional': '#4A102A'
            },
            popupCampos: ['NOMBRE_TOT', 'CATEGORIA', 'NOMBRE_UNI','REGION', 'CONDICION','DECRETO_VI','TIPO_DE_PR','Descripcion','Origen Dato'],
            alias: {
                'NOMBRE_TOT': 'Nombre',
                'CATEGORIA': 'Categoría',
                'REGION':'Región',
                'CONDICION':'Condición',
                'DECRETO_VI':'Decreto Vigente',
                'TIPO_DE_PR':'Tipo de Propiedad',
                'Descripcion':'Descripción',
                'Origen Dato':'Origen de la Información',
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#4A102A', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.5 // Transparencia del relleno
            }
        },
        turismo_monumentos_nacionales: {
            url:'turismo_monumentos_nacionales.geojson',
            type: 'polygon', // Tipo de capa: point, line, polygon
            atributo: 'categoria', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Monumentos Nacionales', // Nombre personalizado de la Capa
            colores: {
                'Santuario de la Naturaleza': '#7C4585'
            },
            popupCampos: ['nombre', 'comuna','provincia','categoria', 'codigo','SUPERFIC_1','tipo_decre','num_dec','fch_dec','Descripcion','Origen Data'],
            alias: {
                'nombre': 'Nombre',
                'comuna': 'Comuna',
                'provincia':'Provincia',
                'categoria':'Categoría',
                'codigo':'Código del Monumento',
                'SUPERFIC_1':'Superficie en Hectáreas',
                'tipo_decre':'Tipo de Decreto',
                'num_dec':'Número del Decreto',
                'fch_dec':'Fecha del Decreto',
                'Descripcion':'Descripción',
                'Origen Data':'Origen de la Información',
            },
            // Personalizar el color del borde y la transparencia
            estiloBase: {
                color: '#7C4585', // Color del borde
                weight: 1, // Grosor del borde
                // Opacity: sirve para darle transparencia a las lineas
                fillOpacity: 0.5 // Transparencia del relleno
            }
        },
        turismo_rutas: {
            url:'turismo_rutas.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'Nombre Ruta', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Rutas Turísticas', // Nombre personalizado de la Capa
            iconos: {
                'Huellas de Humboldt': 'tour1.png',
                'Humboldt Aventura': 'tour2.png',
                'Sabores de Humboldt': 'tour3.png',
            },
            estiloAlternativo: {
                color: '#FF6B6B', // Color del borde del punto
                fillColor: '#FF6B6B', // Color de relleno del punto
                radius: 5, // Radio del punto
                weight: 1, // Grosor del borde del punto
                fillOpacity: 0.8 // Transparencia del relleno del punto
            },
            popupCampos: [
                'Nombre Ruta',
                'Descripcion',
                'Lugar',
                'Tour Operador',
                'Origen Data',
                ],
            alias: {
                'Nombre Ruta': 'Nombre Ruta',
                'Descripcion': 'Descripcion',
                'Lugar':'Lugar',
                'Tour Operador': 'Tour Operador',
                'Origen Data':'Origen Data',
            }
        },
        turismo_infraestructura: {
            url:'turismo_infraestructura.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'Tipo', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Infraestructura Turística', // Nombre personalizado de la Capa
            iconos: {
                'Apart Hotel': 'Aparthotel.png',
                'Artesanía tradicional y/o contemporánea': 'Artesania.png',
                'Buceo recreativo autónomo': 'buceo.png',
                'Cabañas': 'Cabañas.png',
                'Camping o recinto de campamento': 'Camping.png',
                'Canotaje': 'canotaje.png',
                'Centro de turismo de naturaleza o lodge': 'Lodge.png',
                'Comida rápida': 'Comidarapida.png',
                'Departamentos turísticos y/o ejecutivos': 'Departamentos.png',
                'Especializado en turismo aventura': 'Taventura.png',
                'General': 'OtrosTurismo.png',
                'Hostal': 'Hostal.png',
                'Hotel': 'Hotel.png',
                'Local': 'OtrosTurismo.png',
                'Manualidades': 'manualidades.png',
                'Observación de flora y fauna': 'observacion2.png',
                'Paseos náuticos': 'botes.png',
                'Paseos náuticos - Observación de flora y fauna': 'observacion.png',
                'Picada': 'Picada.png',
                'Productos agroelaborados': 'agroelaborados.png',
                'Receptivo': 'OtrosTurismo.png',
                'Receptivo y emisivo': 'OtrosTurismo.png',
                'Restaurante': 'Restaurante.png',
                'Souvenirs': 'souvenirs.png',
                'Transporte marítimo': 'nautico.png'
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
                'Localidad',
                'Direccion',
                'Telefono',
                'Email',
                'Sitio Web',
                'Tipo',
                'Servicio Cumple Inspeccion',
                'Servicio Cumple Patente',
                'Link Sernatur',
                'Origen Dato',
                'Descripcion',
                'Ultima Actualizacion del Dato'
                ],
            alias: {
                'Nombre': 'Nombre',
                'Localidad': 'Localidad',
                'Direccion':'Direccion',
                'Telefono': 'Telefono',
                'Email':'Email',
                'Sitio Web':'Sitio Web',
                'Tipo':'Tipo',
                'Servicio Cumple Inspeccion':'¿Cumple Inspeccion?',
                'Servicio Cumple Patente':'¿Cumple Patente?',
                'Link Sernatur':'Link Sernatur',
                'Descripcion':'Nota',
                'Origen Dato':'Origen de la Información',
                'Ultima Actualizacion del Dato':'Ultima Actualización del Dato'
            }
        },
        turismo_atractivos_turisticos: {
            url:'turismo_atractivos_turisticos.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'SUBTIPO', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Atractivos Turísticos', // Nombre personalizado de la Capa
            iconos: {
                'ÁREA MARINA PROTEGIDA (AMP)': 'areamarina.png',
                'ÁREA SILVESTRE PROTEGIDA DEL ESTADO (ASPE)': 'areasilvestre.png',
                'BAHÍA O CALETA': 'bahia.png',
                'CERRO': 'cerro.png',
                'CIUDAD': 'ciudad.png',
                'FIESTA RELIGIOSA': 'fiesta_religiosa.png',
                'ISLA O ARCHIPIÉLAGO': 'isla.png',
                'OBSERVATORIO ASTRONÓMICO': 'Observatorio.png',
                'PENÍNSULA, CABO O PUNTA': 'peninsula.png',
                'PLAYA O BALNEARIO': 'playa.png',
                'PUEBLO O ALDEA TRADICIONAL': 'pueblo.png',
                'VALLE Y QUEBRADA': 'valle.png',
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
                'DESCRIPCIO',
                'CATEGORIA',
                'JERARQUIA',
                'TIPO',
                'SUBTIPO',
                'LOCALIDAD',
                'ADMINISTRA',
                'ESTACIONAL',
                'USO_TUR',
                'DEMANDA',
                'SERVICIOS',
                'ESTADO',
                'Descripcion',
                'Origen Data'
                ],
            alias: {
                'NOMBRE':'Nombre',
                'DESCRIPCIO':'Descripcion',
                'CATEGORIA':'Categoria',
                'JERARQUIA':'Jerarquia',
                'TIPO':'Tipo',
                'SUBTIPO':'Subtipo',
                'LOCALIDAD':'Localidad',
                'ADMINISTRA':'Administracion',
                'ESTACIONAL':'Estacionalidad',
                'USO_TUR':'Uso Turistico',
                'DEMANDA':'Demanda',
                'SERVICIOS':'Servicios',
                'ESTADO':'Estado',
                'Descripcion':'Sobre el Catastro',
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

export default turismoConfig;