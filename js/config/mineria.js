
const mineriaConfig = {
    capas: ['relaves_mineros', 'Mineria_Instalaciones_Mineras','Mineria_Yacimientos','Mineria_Propiedad_Minera','limite_comunal_linea','toponimia'],
    estilo: {
        relaves_mineros: {
            url:'relaves_mineros.geojson',
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
            popupCampos: ['NOMBRE_EMP', 'TIPO_INSTA', 'NOMBRE_INS','TIPO_INSTA','RECOBRERSO','ESTADO_INS','VOL_AUTORIZADO','Origen del Dato', 'Ultima Actualizacion Dato'],
            alias: {
                'NOMBRE_EMP': 'Nombre Empresa',
                'TIPO_INSTA': 'Tipo Instalación',
                'NOMBRE_INS': 'Nombre Instalación',
                'TIPO_INSTA': 'Tipo Instalación',
                'RECOBRERSO': 'Recobreso',
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
            url:'Mineria_Instalaciones_Mineras.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'Tipo_Insta', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Instalaciones Mineras', // Nombre personalizado de la Capa
            iconos: {
                'ADMINISTRACIÓN - OFICINA':'administracion.png',
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
            url:'Mineria_Yacimientos.geojson',
            type: 'point', // Tipo de capa: point, line, polygon
            atributo: 'GRUPO_RECU', // Asegúrate de que este atributo exista en tu GeoJSON
            nombrePersonalizado: 'Yacimientos Mineros', // Nombre personalizado de la Capa
            iconos: {
                'Ag': 'ag.png',
                ' ': 'sin_valor.png',
                'Au-(Zn)': 'au_zn.png',
                'Ag-(Cu)': 'au_cu.png',
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
            url:'Mineria_Propiedad_Minera.geojson',
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

export default mineriaConfig;
