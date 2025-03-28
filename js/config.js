// Configuración de temas y estilos
const temasConfig = {
    mineria: {
        capas: ['relaves_mineros', 'Mineria_Instalaciones_Mineras','Mineria_Yacimientos','Mineria_Propiedad_Minera','limite_comunal'],
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
            Mineria_Yacimientos: {
                type: 'point', // Tipo de capa: point, line, polygon
                atributo: 'GRUPO_RECU', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Yacimientos Mineros', // Nombre personalizado de la Capa
                iconos: {
                    'Ag': 'ag.png',
                    ' ': 'sin_valor.png',
                    'Ag-(Cu)': 'ag_cu.png',
                    'Ag-(Cu, Mn)':'ag_cu_mn.png',
                    'Au':'au.png',
                    'Au, Ag':'au_ag.png',
                    'Au, Ag-(Cu, Pb)':'au_ag_cu_pb.png',
                    'Au, Ag-(Pb, Zn, Cu)':'au_ag_pb_zn_cu.png',
                    'Au, Cu':'au_cu.png',
                    'Au, Cu, Ag':'au_cu_ag.png',
                    'Au, Cu-(Ag)':'au_cu_ag2.png',
                    'Au, Cu-(Fe)':'au_cu_fe.png',
                    'Au-(Ag)':'au_ag2.png',
                    'Au-(Ag, Cu)':'au_ag_cu.png',
                    'Au-(Cu)':'au_cu2.png',
                    'Au-(Cu, Ag)':'au_cu_ag3.png',
                    'Au-(Cu, Fe)':'au_cu_fe2.png',
                    'Au-(Cu, Pb, Zn)':'au_cu_pb_zn.png',
                    'Au-(Pb, Ag, Cu)':'au_cu_ag_cu.png',
                    'Baritina':'baritina.png',
                    'Cu':'cu.png',
                    'Cu, Ag':'cu_ag.png',
                    'Cu, Ag, Au':'cu_ag_au.png',
                    'Cu, Au':'cu_au.png',
                    'Cu, Au, Ag':'cu_au_ag.png',
                    'Cu, Au, Fe':'cu_au_fe.png',
                    'Cu, Au-(Fe)':'cu_au_fe2.png',
                    'Cu, Au-(Pb, Zn)':'cu_au_pb_zn.png',
                    'Cu, Fe':'cu_fe.png',
                    'Cu-(Ag)':'cu_ag2.png',
                    'Cu-(Ag, Au)':'cu_ag_au2.png',
                    'Cu-(Ag, Fe)':'cu_ag_fe.png',
                    'Cu-(Ag, Fe, Pb)':'cu_ag_fe_pb.png',
                    'Cu-(Au)':'cu_au2.png',
                    'Cu-(Au, Ag)':'cu_au_ag2.png',
                    'Cu-(Au, Fe)':'cu_au_fe3.png',
                    'Cu-(Au, Pb, Zn)':'cu_au_pb_zn2.png',
                    'Cu-(Fe)':'cu_fe2.png',
                    'Cu-(Fe, Au)':'cu_fe_au.png',
                    'Fe':'fe.png',
                    'Fe, Au':'fe_au.png',
                    'Fe, Cu':'fe_cu.png',
                    'Fe, Cu, Au':'fe_cu_au.png',
                    'Fe-(Cu, Au)':'fe_cu_au2.png',
                    'Rocas Fosfóricas':'rocas_fosforicas.png',
                },
                estiloAlternativo: {
                    color: '#FF6B6B', // Color del borde del punto
                    fillColor: '#FF6B6B', // Color de relleno del punto
                    radius: 5, // Radio del punto
                    weight: 1, // Grosor del borde del punto
                    fillOpacity: 0.8 // Transparencia del relleno del punto
                },
                popupCampos: ['ID_YACIMIE', 'NOMBRE', 'GRUPO_RECU','TAMANO_YAC','ACTIVIDAD_','PROPIETARI','ACCESIBILI','URL_PDF', 'Origen Informacion', 'Ultima Actualizacion del Dato' ],
                alias: {
                    'ID_YACIMIE': 'Codigo del Yacimiento',
                    'NOMBRE': 'Nombre del Yacimiento',
                    'GRUPO_RECU': 'Tipo de Recurso',
                    'TAMANO_YAC': 'Tamaño del Yacimiento',
                    'ACTIVIDAD_': 'Actividad',
                    'PROPIETARI': 'Propietario',
                    'ACCESIBILI': 'Accesibilidad',
                    'URL_PDF':'Informacion',
                    'Origen Informacion': 'Origen del Dato',
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
    agricultura: {
        capas: ['Agro_Derechos_Agua', 'Agro_apr', 'Agro_plantaciones_frutales','Agro_catastro_fruticola','hidrografia'],
        estilo: {
            Agro_Derechos_Agua: {
                type: 'point', // Tipo de capa: point, line, polygon
                atributo: 'Uso del Ag', // Asegúrate de que este atributo exista en tu GeoJSON
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
                popupCampos: ['Código de', 'Nombre Sol', 'Unidad de','Fecha de R','Nº Resolu','Fecha Toma','Tipo Derec', 'Naturaleza','Uso del Ag','Cuenca','Fuente','Caudal An','Ejercicio','Origen','Ult_Actual','Link_Data'],
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
                    'Link_Data':'Direcccion de acceso a la fuente de los datos',
                }
            },
            Agro_apr: {
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
                popupCampos: ['Comuna', 'Especie', 'Variedad','Año plantacion','Nº Arboles','Superficie','Descripcion','Origen del Dato'],
                alias: {
                    'Comuna': 'Comuna',
                    'Especie': 'Especia',
                    'Variedad': 'Variedad',
                    'Año plantacion':'Año Plantacion',
                    'Nº Arboles':'Nº Arboles',
                    'Superficie':'Superficie',
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
            }
        },
        leyenda: {
        }
    },
    pesca: {
        capas: ['pesca_caletas', 'pesca_infraestructura_doh', 'pesca_aaa','pesca_amerb','pesca_concesiones','pesca_planes_manejo','pesca_areas_protegidas'],
        estilo: {
            pesca_caletas: {
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
                             'Principales Actividades',
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
                    'Principales Actividades':'Principales Actividades',
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
                type: 'polygon', // Tipo de capa: point, line, polygon
                atributo: 'Condición en que se encuentra el estado de un Área de Manejo', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Areas de Manejo y Explotacion de Productos Bentonicos', // Nombre personalizado de la Capa
                atributo: 'Condición en que se encuentra el estado de un Área de Manejo',
                colores: {
                    'DECRETADO': '#73BBA3',
                    'PENDIENTE': '#88D66C',
                    'RECHAZADO': '#F6FB7A',
                },
                popupCampos: [
                    'Nombre sector AMERB',
                     'Fecha ingreso de la solicitud AMERB',
                      'Detalle del estado de la tramitación (Decretada, Tramite, Rechazada)',
                      'Estado de tramitación del AMERB',
                      'Condición en que se encuentra el estado de un Área de Manejo',
                      'Superficie AMERB en hectáreas',
                      'Especies principales del AMERB',
                      'Nombre de la o las organización (es) de pescadores artesanales vinculado (s)',
                    'Número de Registro Pescadores Artesanales',
                    'Fecha del Registro Pescadores Artesanales',
                    'Número del decreto del Ministerio de Economía que establece el sector como AMERB (Dcto. MINECON)',
                    'Período de validez de la destinación del Área de Manejo',
                    'Descripcion',
                    'Origen Dato',
                    'Ultima Actualizacion Dato'
                    ],
                alias: {
                    'Nombre sector AMERB': 'Nombre sector AMERB',
                    'Fecha ingreso de la solicitud AMERB': 'Fecha ingreso de la solicitud AMERB',
                    'Detalle del estado de la tramitación (Decretada, Tramite, Rechazada)': 'Detalle del estado de la tramitación (Decretada, Tramite, Rechazada)',
                    'Estado de tramitación del AMERB':'Estado de tramitación del AMERB',
                    'Condición en que se encuentra el estado de un Área de Manejo':'Condición en que se encuentra el estado de un Área de Manejo',
                    'Superficie AMERB en hectáreas':'Superficie AMERB en hectárease',
                    'Especies principales del AMERB':'Especies principales del AMERB',
                    'Nombre de la o las organización (es) de pescadores artesanales vinculado (s)':'Nombre de la o las organización (es) de pescadores artesanales vinculado (s)',
                    'Número de Registro Pescadores Artesanales':'Número de Registro Pescadores Artesanales',
                    'Fecha del Registro Pescadores Artesanales':'Fecha del Registro Pescadores Artesanales',
                    'Número del decreto del Ministerio de Economía que establece el sector como AMERB (Dcto. MINECON)':'Número del decreto del Ministerio de Economía que establece el sector como AMERB (Dcto. MINECON)',
                    'Período de validez de la destinación del Área de Manejo':'Período de validez de la destinación del Área de Manejo',
                    'Descripcion':'Descripcion',
                    'Origen Dato':'Origen del Dato',
                    'Ultima Actualizacion Dato':'Ultima Actualizacion del Dato'
                },
                // Personalizar el color del borde y la transparencia
                estiloBase: {
                    color: '#E83A14', // Color del borde
                    weight: 1, // Grosor del borde
                    // Opacity: sirve para darle transparencia a las lineas
                    fillOpacity: 0.3 // Transparencia del relleno
                }
            },
            pesca_concesiones: {
                type: 'polygon', // Tipo de capa: point, line, polygon
                atributo: 'Especie', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Concesiones de Acuicultura', // Nombre personalizado de la Capa
                atributo: 'Especie',
                colores: {
                    'Olivo': '#5F1B00',
                    'Lima': '#91300A',
                    'Limonero': '#D34F1E',
                    'Nectarino': '#ECA106',
                },
                popupCampos: ['Comuna', 'Especie', 'Variedad','Año plantacion','Nº Arboles','Superficie','Descripcion','Origen del Dato'],
                alias: {
                    'Comuna': 'Comuna',
                    'Especie': 'Especia',
                    'Variedad': 'Variedad',
                    'Año plantacion':'Año Plantacion',
                    'Nº Arboles':'Nº Arboles',
                    'Superficie':'Superficie',
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
            pesca_planes_manejo: {
                type: 'polygon', // Tipo de capa: point, line, polygon
                atributo: 'Especie', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Planes de Manejo de Recursos Bentonicos', // Nombre personalizado de la Capa
                atributo: 'Especie',
                colores: {
                    'Olivo': '#5F1B00',
                    'Lima': '#91300A',
                    'Limonero': '#D34F1E',
                    'Nectarino': '#ECA106',
                },
                popupCampos: ['Comuna', 'Especie', 'Variedad','Año plantacion','Nº Arboles','Superficie','Descripcion','Origen del Dato'],
                alias: {
                    'Comuna': 'Comuna',
                    'Especie': 'Especia',
                    'Variedad': 'Variedad',
                    'Año plantacion':'Año Plantacion',
                    'Nº Arboles':'Nº Arboles',
                    'Superficie':'Superficie',
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
            pesca_areas_protegidas: {
                type: 'polygon', // Tipo de capa: point, line, polygon
                atributo: 'Especie', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Areas Marinas Protegidas', // Nombre personalizado de la Capa
                atributo: 'Especie',
                colores: {
                    'Olivo': '#5F1B00',
                    'Lima': '#91300A',
                    'Limonero': '#D34F1E',
                    'Nectarino': '#ECA106',
                },
                popupCampos: ['Comuna', 'Especie', 'Variedad','Año plantacion','Nº Arboles','Superficie','Descripcion','Origen del Dato'],
                alias: {
                    'Comuna': 'Comuna',
                    'Especie': 'Especia',
                    'Variedad': 'Variedad',
                    'Año plantacion':'Año Plantacion',
                    'Nº Arboles':'Nº Arboles',
                    'Superficie':'Superficie',
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
        },
        leyenda: {
        }
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
    },
    openTopoMap: {
        url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png',
        nombre: 'OpenTopoMap'
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
