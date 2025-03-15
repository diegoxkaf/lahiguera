// Configuración de temas y estilos
const temasConfig = {
    mineria: {
        capas: ['relaves_mineros'],
        estilo: {
            relaves_mineros: {
                type: 'point', // Tipo de capa: point, line, polygon
                atributo: 'ESTADO_INS', // Asegúrate de que este atributo exista en tu GeoJSON
                icono: '/assets/icons/claro3.png',
                popupCampos: ['NOMBRE_EMP', 'TIPO_INSTA', 'NOMBRE_INS'],
                // Definir colores por valor del atributo si es necesario
                colores: {
                    'Inactivo': '#FF6B6B',
                    'Activo': '#4ECDC4',
                    'Abandonado': '#C7F464'
                }
            },
        },
        leyenda: {
            relaves_mineros: {
                titulo: 'Relaves Mineros',
                items: [
                    {color: '#FF6B6B', label: 'Inactivo'},
                    {color: '#4ECDC4', label: 'Activo'},
                    {color: '#C7F464', label: 'Abandonado'}
                ]
            }
        }
    },
    energia: {
        capas: ['Energia_linea_de_transmision'],
        estilo: {
            Energia_linea_de_transmision: {
                type: 'line',
                atributo: 'TENSION (KV)', // Asegúrate de que este atributo exista en tu GeoJSON
                colores: {
                    '500': '#FF6B6B',
                    '220': '#4ECDC4',
                    '110': '#2A9D8F',
                    '23': '#E9C46A'
                },
                estiloBase: {
                    weight: 3,
                    opacity: 0.8,
                    dashArray: '5,5' // Opcional para líneas discontinuas
                },
                popupCampos: ['NOMBRE', 'CIRCUITO', 'TIPO', 'TRAMO']
            },
        },
        leyenda: {
            Energia_linea_de_transmision: {
                titulo: 'Lineas de Transmision',
                items: [
                    {color: '#FF6B6B', label: '500 Kv'},
                    {color: '#4ECDC4', label: '220 Kv'},
                    {color: '#2A9D8F', label: '110 Kv'},
                    {color: '#E9C46A', label: '23 Kv'}
                ]
            }
        }
    }
};