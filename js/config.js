// Configuración de temas y estilos
const temasConfig = {
    mineria: {
        capas: ['relaves_mineros', 'Mineria_Instalaciones_Mineras','Mineria_Propiedad_Minera','limite_comunal'],
        estilo: {
            relaves_mineros: {
                type: 'point', // Tipo de capa: point, line, polygon
                atributo: 'ESTADO_INS', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Relaves Mineros', // Nombre personalizado de la Capa
                iconos: {
                    'INACTIVO': 'Relave_inactivo.png',
                    'ACTIVO': 'Relave_activo.png',
                    'ABANDONADO': 'Relave_Abandonado.png'
                },
                estiloAlternativo: {
                    color: '#FF6B6B', // Color del borde del punto
                    fillColor: '#FF6B6B', // Color de relleno del punto
                    radius: 5, // Radio del punto
                    weight: 1, // Grosor del borde del punto
                    fillOpacity: 0.8 // Transparencia del relleno del punto
                },
                popupCampos: ['NOMBRE_EMP', 'TIPO_INSTA', 'NOMBRE_INS','TIPO_INSTA','RECOBRESO','ESTADO_INS','VOL_AUTORIZADO','Origen del Dato', 'Ultima Actualizacion Dato'],
                alias: {
                    'NOMBRE_EMP': 'Nombre Empresa',
                    'TIPO_INSTA': 'Tipo Instalación',
                    'NOMBRE_INS': 'Nombre Instalación',
                    'TIPO_INSTA': 'Tipo Instalación',
                    'RECOBRESO': 'Recobreso',
                    'ESTADO_INS': 'Estado de la Instalación',
                    'VOL_AUTORIZADO': 'Volumen Autorizado',
                    'Origen del Dato': 'Origen del Dato',
                    'Ultima Actualizacion Dato': 'Ultima Actualizacion del Dato',
                },
                // Definir colores por valor del atributo si es necesario
                colores: {
                    'Inactivo': '#FF6B6B',
                    'Activo': '#4ECDC4',
                    'Abandonado': '#C7F464'
                }
            },
            Mineria_Instalaciones_Mineras: {
                type: 'point', // Tipo de capa: point, line, polygon
                atributo: 'Tipo_Insta', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Instalaciones Mineras', // Nombre personalizado de la Capa
                iconos: {
                    'CAMPAMENTO': 'campamento.png',
                    'CANCHA DE ACOPIO': 'CanchaAcopio.png',
                    'DEPÓSITO RMM - ESTÉRILES': 'Deposito_RMM.png',
                    'DEPÓSITO RMM - MINERAL DE BAJA LEY':'Deposito_RMM2.png',
                    'ESTACION DE COMPRESORES':'estacion_compresores.png',
                    'EXPLORACION DE SUPERFICIE':'exploracion.png',
                    'EXPLORACIÓN SUBTERRÁNEA':'exploracion1.png',
                    'MINA RAJO ABIERTO':'mina_rajo_abierto.png',
                    'MINA SUBTERRANEA':'Mina_Subterranea.png',
                    'PLANTA CONCENTRADORA':'concentradora.png',
                    'PLANTA MOLIENDA':'molienda.png',
                    'POLVORIN':'polvorin.png',
                    'PROSPECCION':'prospeccion.png',
                    'RECONOCIMIENTO':'reconocimiento.png',
                    'TALLERES Y MAESTRANZA':'talleres.png',
                },
                estiloAlternativo: {
                    color: '#FF6B6B', // Color del borde del punto
                    fillColor: '#FF6B6B', // Color de relleno del punto
                    radius: 5, // Radio del punto
                    weight: 1, // Grosor del borde del punto
                    fillOpacity: 0.8 // Transparencia del relleno del punto
                },
                popupCampos: ['Nombre_Emp', 'Nombre_Ins', 'Tipo_Insta','Tipo_Miner','Familia','Pasta_Prin','Estado','Cota', 'Origen del Dato', 'Ultima Actualizacion del Dato' ],
                alias: {
                    'Nombre_Emp': 'Nombre Empresa',
                    'Nombre_Ins': 'Nombre de la Instalación',
                    'Tipo_Insta': 'Tipo de Instalación',
                    'Tipo_Miner': 'Tipo de Mineral',
                    'Familia': 'Familia',
                    'Pasta_Prin': 'Mineral principal',
                    'Estado': 'Estado de la Instalacion',
                    'Cota':'Cota',
                    'Origen del Dato': 'Origen del Dato',
                    'Ultima Actualizacion del Dato': 'Ultima Actualizacion del Dato',
                }
            },
            Mineria_Propiedad_Minera: {
                type: 'polygon',
                nombrePersonalizado: 'Propiedad Minera',
                atributo: 'Tipo Propiedad',
                colores: {
                    'Explotacion Codigo 1932':'#D34F1E',
                    'Exploracion Codigo 1983':'#ECA106',
                    'Explotacion Codigo 1983':'#5F1B00'
                },
                popupCampos: ['Rol Nacional','Nombre Concesion','Rut Titular','Direccion Titular','Superficie Hectareas', 'Situacion', 'Forjas','Ciudad Inscripcion','Año Inscripcion','Tipo Inscripcion','Tipo Propiedad', 'Origen Dato','Ultima Actualizacion Dato'],
                alias: {
                    'Rol Nacional': 'Rol Nacional',
                    'Nombre Concesion': 'Nombre Concesión',
                    'Rut Titular': 'Rut Titular',
                    'Direccion Titular': 'Direccion Titular',
                    'Superficie Hectareas': 'Hectareas',
                    'Situacion': 'Situacion',
                    'Forjas': 'Forjas',
                    'Ciudad Inscripcion': 'Ciudad Inscripcion',
                    'Año Inscripcion': 'Año Inscripcion',
                    'Tipo Inscripcion': 'Tipo Inscripcion',
                    'Tipo Propiedad': 'Tipo Propiedad',
                    'Origen Dato': 'Origen del Dato',
                    'Ultima Actualizacion Dato': 'Ultima Actualizacion del Dato'
                },
                // Personalizar el color del borde y la transparencia
                estiloBase: {
                    color: '#EEEEEE', // Color del borde
                    weight: 1, // Grosor del borde
                    // Opacity: sirve para darle transparencia a las lineas
                    fillOpacity: 0.3 // Transparencia del relleno
                }
            },
            limite_comunal: {
                type: 'polygon',
                nombrePersonalizado: 'Limite Comunal',
                atributo: 'NOM_COMUNA',
                colores: {
                    'La Higuera': '#FF6B6B'
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
            }
        },
        leyenda: {
            relaves_mineros: {
                titulo: 'Relaves Mineros',
                items: [
                    {color: '#FF6B6B', label: 'Inactivo'},
                    {color: '#4ECDC4', label: 'Activo'},
                    {color: '#C7F464', label: 'Abandonado'}
                ]
            },
            limite_comunal: {
                titulo: 'Comuna de La Higuera',
                items: [
                    {color: '#FF6B6B', label: 'La Higuera'}
                ]
            }
        }
    },
    energia: {
        capas: ['Energia_linea_de_transmision', 'Energia_Plantas_eolicas', 'Energia_Potencial_Fotovoltaico','Energia_Solares', 'Energia_Subestaciones', 'Energia_Termoelectricas'],
        estilo: {
            Energia_linea_de_transmision: {
                type: 'line',
                nombrePersonalizado: 'Linea de Transmision',
                atributo: 'TENSION', // Asegúrate de que este atributo exista en tu GeoJSON
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
                popupCampos: ['NOMBRE', 'CIRCUITO', 'TIPO', 'TRAMO'],
                alias: {
                    'NOMBRE': 'Nombre',
                    'CIRCUITO': 'Circuito',
                    'TIPO': 'Tipo',
                    'TRAMO': 'Tramo'
                },
                etiquetas: {
                    campo: 'NOMBRE',
                    estilo: {
                        color: '#000000',
                        fontSize: '8px',
                        fontFamily: 'Arial, sans-serif',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        padding: '1px',
                        borderRadius: '10px'
                    }
                }
            },
            Energia_Plantas_eolicas: {
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
                    'Superficie_ha': 'Superficie (ha)',
                    'Potencia_MW':'Potencia (MW)',
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
            }
        },
        leyenda: {
            Energia_linea_de_transmision: {
                titulo: 'Lineas de Transmisión',
                items: [
                    {color: '#FF6B6B', label: '500 Kv'},
                    {color: '#4ECDC4', label: '220 Kv'},
                    {color: '#2A9D8F', label: '110 Kv'},
                    {color: '#E9C46A', label: '23 Kv'}
                ]
            },
            limite_comunal: {
                titulo: 'Comuna de La Higuera',
                items: [
                    {color: '#FF6B6B', label: 'La Higuera'}
                ]
            },
            Energia_Potencial_Fotovoltaico: {
                titulo: 'Potencial Energético',
                items: [
                    {color: '#E83A14', label: 'Potencial Energético'}
                ]
            },
        }
    },
    telecomunicaciones: {
        capas: ['Telecomunicaciones_antenas_4G', 'Telecomunicaciones_antenas_5G'],
        estilo: {
            Telecomunicaciones_antenas_5G: {
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
            }
        },
    },
};

// Configuración de capas base
const capasBaseConfig = {
    openStreetMap: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        nombre: 'OpenStreetMap'
    },
    googleMaps: {
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        nombre: 'Google Maps'
    }
    // Puedes agregar más capas base aquí
};

// Capa común
const commonLayersConfig = {
    limite_comunal: {
        type: 'polygon',
        nombrePersonalizado: 'Limite Comunal',
        atributo: 'NOM_COMUNA',
        colores: { 'La Higuera': '#FF6B6B' },
        popupCampos: ['NOM_COMUNA', 'NOM_PROVIN', 'NOM_REGION'],
        estiloBase: {
            color: '#2d3436',
            weight: 2,
            fillOpacity: 0
        }
    }
};
