// Funciones para actualizar la leyenda

/**
 * Actualiza la leyenda en la sidebar.
 * @param {string} tema - El tema actual.
 * @param {object} temasConfig - El objeto de configuración de temas.
 */
export function actualizarLeyenda(tema, temasConfig) {
    const sidebarLegendContainer = document.getElementById('sidebar-legend');
    
    if (!sidebarLegendContainer) {
        console.warn('Contenedor de leyenda no encontrado');
        return;
    }
    
    // Limpiar leyenda anterior
    sidebarLegendContainer.innerHTML = '';
    
    // Validar que existe el tema
    if (!temasConfig || !temasConfig[tema]) {
        console.warn(`No se encontró configuración para el tema: ${tema}`);
        sidebarLegendContainer.innerHTML = '<p class="text-muted">No hay leyenda disponible para este tema.</p>';
        return;
    }
    
    const temaConfig = temasConfig[tema];
    
    // Verificar si existe configuración de leyenda
    if (!temaConfig.leyenda || Object.keys(temaConfig.leyenda).length === 0) {
        console.log(`No hay configuración de leyenda para el tema: ${tema}`);
        
        // Generar leyenda automática basada en la configuración de estilos
        generarLeyendaAutomatica(tema, temasConfig, sidebarLegendContainer);
        return;
    }
    
    // Generar leyenda desde configuración explícita
    console.log(`Generando leyenda para tema: ${tema}`);
    
    Object.entries(temaConfig.leyenda).forEach(([capa, config]) => {
        if (!config || !config.titulo || !config.items) {
            console.warn(`Configuración de leyenda inválida para capa: ${capa}`);
            return;
        }
        
        const sidebarLeyendaHTML = document.createElement('div');
        sidebarLeyendaHTML.classList.add('legend-container', 'mb-3');

        const tituloLeyenda = document.createElement('h6');
        tituloLeyenda.classList.add('fw-bold', 'text-primary', 'mb-2');
        tituloLeyenda.textContent = config.titulo;
        sidebarLeyendaHTML.appendChild(tituloLeyenda);

        config.items.forEach(item => {
            if (!item || !item.color || !item.label) {
                console.warn('Item de leyenda inválido:', item);
                return;
            }
            
            const itemLeyenda = document.createElement('div');
            itemLeyenda.classList.add('legend-item', 'd-flex', 'align-items-center', 'mb-1');

            const colorLeyenda = document.createElement('div');
            colorLeyenda.classList.add('legend-color', 'me-2');
            colorLeyenda.style.backgroundColor = item.color;
            colorLeyenda.style.width = '16px';
            colorLeyenda.style.height = '16px';
            colorLeyenda.style.border = '1px solid #ccc';
            colorLeyenda.style.borderRadius = '2px';
            colorLeyenda.style.flexShrink = '0';
            itemLeyenda.appendChild(colorLeyenda);

            const labelLeyenda = document.createElement('span');
            labelLeyenda.classList.add('small');
            labelLeyenda.textContent = item.label;
            itemLeyenda.appendChild(labelLeyenda);

            sidebarLeyendaHTML.appendChild(itemLeyenda);
        });
        
        sidebarLegendContainer.appendChild(sidebarLeyendaHTML);
    });
    
    console.log(`Leyenda actualizada para tema: ${tema}`);
}

/**
 * Genera una leyenda automática basada en la configuración de estilos
 * @param {string} tema - El tema actual
 * @param {object} temasConfig - Configuración de temas
 * @param {HTMLElement} container - Contenedor donde insertar la leyenda
 */
function generarLeyendaAutomatica(tema, temasConfig, container) {
    const temaConfig = temasConfig[tema];
    
    if (!temaConfig.estilo) {
        container.innerHTML = '<p class="text-muted small">No hay información de leyenda disponible.</p>';
        return;
    }
    
    console.log(`Generando leyenda automática para tema: ${tema}`);
    
    Object.entries(temaConfig.estilo).forEach(([capaNombre, capaConfig]) => {
        const legendContainer = document.createElement('div');
        legendContainer.classList.add('legend-container', 'mb-3');
        
        // Título de la capa
        const titulo = document.createElement('h6');
        titulo.classList.add('fw-bold', 'text-primary', 'mb-2');
        titulo.textContent = capaConfig.nombrePersonalizado || capaNombre;
        legendContainer.appendChild(titulo);
        
        // Generar items de leyenda basados en colores definidos
        if (capaConfig.colores) {
            Object.entries(capaConfig.colores).forEach(([valor, color]) => {
                const itemLeyenda = document.createElement('div');
                itemLeyenda.classList.add('legend-item', 'd-flex', 'align-items-center', 'mb-1');

                const colorBox = document.createElement('div');
                colorBox.classList.add('legend-color', 'me-2');
                colorBox.style.backgroundColor = color;
                colorBox.style.width = '16px';
                colorBox.style.height = '16px';
                colorBox.style.border = '1px solid #ccc';
                colorBox.style.borderRadius = '2px';
                colorBox.style.flexShrink = '0';
                itemLeyenda.appendChild(colorBox);

                const label = document.createElement('span');
                label.classList.add('small');
                label.textContent = valor;
                itemLeyenda.appendChild(label);

                legendContainer.appendChild(itemLeyenda);
            });
        }
        // Generar items basados en iconos
        else if (capaConfig.iconos) {
            Object.entries(capaConfig.iconos).forEach(([valor, iconFile]) => {
                const itemLeyenda = document.createElement('div');
                itemLeyenda.classList.add('legend-item', 'd-flex', 'align-items-center', 'mb-1');

                const iconBox = document.createElement('div');
                iconBox.classList.add('legend-icon', 'me-2');
                iconBox.style.width = '16px';
                iconBox.style.height = '16px';
                iconBox.style.flexShrink = '0';
                
                const icon = document.createElement('img');
                icon.src = `/assets/icons/${iconFile}`;
                icon.style.width = '100%';
                icon.style.height = '100%';
                icon.style.objectFit = 'contain';
                iconBox.appendChild(icon);
                itemLeyenda.appendChild(iconBox);

                const label = document.createElement('span');
                label.classList.add('small');
                label.textContent = valor;
                itemLeyenda.appendChild(label);

                legendContainer.appendChild(itemLeyenda);
            });
        }
        // Estilo alternativo genérico
        else if (capaConfig.estiloAlternativo) {
            const itemLeyenda = document.createElement('div');
            itemLeyenda.classList.add('legend-item', 'd-flex', 'align-items-center', 'mb-1');

            const colorBox = document.createElement('div');
            colorBox.classList.add('legend-color', 'me-2');
            colorBox.style.backgroundColor = capaConfig.estiloAlternativo.fillColor || capaConfig.estiloAlternativo.color || '#555';
            colorBox.style.width = '16px';
            colorBox.style.height = '16px';
            colorBox.style.border = '1px solid #ccc';
            colorBox.style.borderRadius = '2px';
            colorBox.style.flexShrink = '0';
            itemLeyenda.appendChild(colorBox);

            const label = document.createElement('span');
            label.classList.add('small');
            label.textContent = 'Elementos de la capa';
            itemLeyenda.appendChild(label);

            legendContainer.appendChild(itemLeyenda);
        }
        
        // Solo agregar si tiene contenido
        if (legendContainer.children.length > 1) {
            container.appendChild(legendContainer);
        }
    });
    
    if (container.children.length === 0) {
        container.innerHTML = '<p class="text-muted small">No hay información de leyenda disponible.</p>';
    }
}