// Configuración de temas y estilos
const temasConfig = {
    mineria: {
        capas: ['relaves_mineros', 'limite_comunal'],
        estilo: {
            relaves_mineros: {
                type: 'point', // Tipo de capa: point, line, polygon
                atributo: 'ESTADO_INS', // Asegúrate de que este atributo exista en tu GeoJSON
                nombrePersonalizado: 'Relaves Mineros', // Nombre personalizado de la Capa
                iconos: {
                    'INACTIVO': 'claro3.png',
                    'ACTIVO': 'Entel3.png',
                    'ABANDONADO': 'Movistar3.png'
                },
                estiloAlternativo: {
                    color: '#FF6B6B', // Color del borde del punto
                    fillColor: '#FF6B6B', // Color de relleno del punto
                    radius: 5, // Radio del punto
                    weight: 1, // Grosor del borde del punto
                    fillOpacity: 0.8 // Transparencia del relleno del punto
                },
                popupCampos: ['NOMBRE_EMP', 'TIPO_INSTA', 'NOMBRE_INS'],
                alias: {
                    'NOMBRE_EMP': 'Nombre Empresa',
                    'TIPO_INSTA': 'Tipo Instalación',
                    'NOMBRE_INS': 'Nombre Instalación'
                },
                // Definir colores por valor del atributo si es necesario
                colores: {
                    'Inactivo': '#FF6B6B',
                    'Activo': '#4ECDC4',
                    'Abandonado': '#C7F464'
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
        capas: ['Energia_linea_de_transmision'],
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
            },
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
            }
        }
    }
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
