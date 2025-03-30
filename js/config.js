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
        },
        leyenda: {
        }
    },
    riesgo: {
        capas: ['riesgo_puntos_criticos', 'riesgo_remocion_masa', 'riesgo_punto_encuentro','riesgo_cota30mt', 'riesgo_linea_segura', 'riesgo_via_evacuacion','riesgo_area_evacuar'],
        estilo: {
            riesgo_puntos_criticos: {
                type: 'point', // Tipo de capa: point, line, polygon
                atributo: 'COMUNA', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Puntos Criticos Invierno 2024', // Nombre personalizado de la Capa
                iconos: {
                    'LA HIGUERA': 'puntos_criticos.png'
                },
                estiloAlternativo: {
                    color: '#FF6B6B', // Color del borde del punto
                    fillColor: '#FF6B6B', // Color de relleno del punto
                    radius: 5, // Radio del punto
                    weight: 1, // Grosor del borde del punto
                    fillOpacity: 0.8 // Transparencia del relleno del punto
                },
                popupCampos: [
                    'SECTOR',
                    'CAUSA_PUNT',
                    'ACCIONES_D',
                    'SI_LA_RESP',
                    'NIVEL_DE_R',
                    'Descripcion',
                    'Origen Dato',
                    ],
                alias: {
                    'SECTOR': 'Sector',
                    'CAUSA_PUNT': 'Causa del Evento',
                    'ACCIONES_D':'Acciones',
                    'SI_LA_RESP': 'Responsable',
                    'NIVEL_DE_R':'Nivel de Riesgo',
                    'Descripcion':'Descripcion',
                    'Origen Dato':'Origen de la Informacion'
                }
            },
            riesgo_remocion_masa: {
                type: 'point', // Tipo de capa: point, line, polygon
                atributo: 'Tipo de remoción', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Remocion en Masa', // Nombre personalizado de la Capa
                iconos: {
                    'Flujo': 'derrumbes.png'
                },
                estiloAlternativo: {
                    color: '#FF6B6B', // Color del borde del punto
                    fillColor: '#FF6B6B', // Color de relleno del punto
                    radius: 5, // Radio del punto
                    weight: 1, // Grosor del borde del punto
                    fillOpacity: 0.8 // Transparencia del relleno del punto
                },
                popupCampos: [
                    'Codigo',
                    'Tipo de remoción',
                    'Tipo de material',
                    'Clasificación',
                    'Detonante',
                    'Día del evento',
                    'Mes de inicio',
                    'Año del evento',
                    'Estación',
                    'Enlace del informe',
                    'Autor del informe',
                    'Fuente de información',
                    'Descripcion',
                    'Origen Dato'
                    ],
                alias: {
                    'Codigo': 'Codigo',
                    'Tipo de remoción': 'Tipo de remoción',
                    'Tipo de material':'Tipo de material',
                    'Clasificación': 'Clasificación',
                    'Detonante':'Detonante',
                    'Día del evento':'Día del evento',
                    'Mes de inicio':'Mes de inicio',
                    'Año del evento':'Año del evento',
                    'Estación':'Estación',
                    'Enlace del informe':'Enlace del informe',
                    'Autor del informe':'Autor del informe',
                    'Fuente de información':'Fuente de información',
                    'Descripcion':'Descripcion',
                    'Origen Dato':'Origen del Dato'
                }
            },
            riesgo_punto_encuentro: {
                type: 'point', // Tipo de capa: point, line, polygon
                atributo: 'nom_com', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Puntos de Encuentro', // Nombre personalizado de la Capa
                iconos: {
                    'La Higuera': 'punto_encuentro.png'
                },
                estiloAlternativo: {
                    color: '#FF6B6B', // Color del borde del punto
                    fillColor: '#FF6B6B', // Color de relleno del punto
                    radius: 5, // Radio del punto
                    weight: 1, // Grosor del borde del punto
                    fillOpacity: 0.8 // Transparencia del relleno del punto
                },
                popupCampos: [
                    'name',
                    'sector',
                    'Descripcion',
                    'Recomendaciones SENAPRED',
                    'Origen Data'
                    ],
                alias: {
                    'name': 'Nombre del Punto',
                    'sector': 'Sector',
                    'Descripcion':'Descripcion',
                    'Recomendaciones SENAPRED': 'Recomendaciones SENAPRED',
                    'Origen Data':'Origen de la Informacion'
                }
            },
            riesgo_cota30mt: {
                type: 'line',
                nombrePersonalizado: 'Cota 30 Mts.',
                atributo: 'Descripcion', // Asegúrate de que este atributo exista en tu GeoJSON
                colores: {
                    'Cota 30 mts. Amenaza por Tsunami': '#ff1e00'
                },// Configuracion del Estilo Base de la Linea (Ancho, transparencia, Segmentacion de la Linea)
                estiloBase: {
                    weight: 4,
                    opacity: 0.8,
                    dashArray: '1'
                },
                popupCampos: ['Descripcion', 'Recomendaciones SENAPRED', 'Origen Data'],
                alias: {
                    'Descripcion': 'Descripcion',
                    'Recomendaciones SENAPRED': 'Recomendaciones SENAPRED',
                    'Origen Data': 'Origen de la Data'
                }
            },
            riesgo_linea_segura: {
                type: 'line',
                nombrePersonalizado: 'Linea Segura',
                atributo: 'tipo', // Asegúrate de que este atributo exista en tu GeoJSON
                colores: {
                    'Límite de área de evacuación': '#ff1e00'
                },// Configuracion del Estilo Base de la Linea (Ancho, transparencia, Segmentacion de la Linea)
                estiloBase: {
                    weight: 4,
                    opacity: 0.8,
                    dashArray: '1'
                },
                popupCampos: ['Descripcion', 'Recomendaciones SENAPRED', 'Origen Data'],
                alias: {
                    'Descripcion': 'Descripcion',
                    'Recomendaciones SENAPRED': 'Recomendaciones SENAPRED',
                    'Origen Data': 'Origen de la Data'
                }
            },
            riesgo_via_evacuacion: {
                type: 'line',
                nombrePersonalizado: 'Via de Evacuacion',
                atributo: 'nom_com', // Asegúrate de que este atributo exista en tu GeoJSON
                colores: {
                    'La Higuera': '#3953ff'
                },// Configuracion del Estilo Base de la Linea (Ancho, transparencia, Segmentacion de la Linea)
                estiloBase: {
                    weight: 4,
                    opacity: 0.8,
                    dashArray: '1'
                },
                popupCampos: ['name', 'sector','Descripcion','Recomendaciones SENAPRED', 'Origen Data'],
                alias: {
                    'name':'Codigo de la Via de Evacuacion',
                    'sector':'Sector',
                    'Descripcion': 'Descripcion',
                    'Recomendaciones SENAPRED': 'Recomendaciones SENAPRED',
                    'Origen Data': 'Origen de la Data'
                }
            },
            riesgo_area_evacuar: {
                type: 'polygon', // Tipo de capa: point, line, polygon
                atributo: 'Descripcion', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Area a Evacuar', // Nombre personalizado de la Capa
                atributo: 'Descripcion',
                colores: {
                    'Area de Evacuacion por Amenaza de Tsunami': '#ff557f'
                },
                popupCampos: ['sector', 'Descripcion', 'Recomendaciones SENAPRED','Origen Data'],
                alias: {
                    'sector': 'Sector',
                    'Descripcion': 'Region',
                    'Recomendaciones SENAPRED':'Recomendaciones de SENAPRED',
                    'Origen Data':'Origen de la Informacion'
                },
                // Personalizar el color del borde y la transparencia
                estiloBase: {
                    color: '#ff557f', // Color del borde
                    weight: 1, // Grosor del borde
                    // Opacity: sirve para darle transparencia a las lineas
                    fillOpacity: 0.5 // Transparencia del relleno
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
