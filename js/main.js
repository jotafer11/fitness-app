    /** Show Sections */ 


    function show_dieta(){

          document.getElementById('dieta').style.display = 'block';
          document.getElementById('busqueda').style.display = 'none';

    }

    function show_busqueda(){

        document.getElementById('busqueda').style.display = 'block';
        document.getElementById('dieta').style.display = 'none';

    }    




    // Second Window Muuri  Effect

    const grid = new Muuri('.grid', {
        layout: {
            rounding: false
        }
    });
    
    window.addEventListener('load', () => {
        grid.refreshItems().layout();
        document.getElementById('grid').classList.add('imagenes-cargadas');
    
        // Agregamos los listener de los enlaces para filtrar por categoria.
        const enlaces = document.querySelectorAll('#categorias a');
        enlaces.forEach((elemento) => {
            elemento.addEventListener('click', (evento) => {
                evento.preventDefault();
                enlaces.forEach((enlace) => enlace.classList.remove('activo'));
                evento.target.classList.add('activo');
    
                const categoria = evento.target.innerHTML.toLowerCase();
                categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
            });
        });
    
    
        // Add listener for Images
        const overlay = document.getElementById('overlay');
        document.querySelectorAll('.grid .item img').forEach((elemento) => {
            elemento.addEventListener('click', () => {
                const ruta = elemento.getAttribute('src');
                const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
    
                overlay.classList.add('activo');
                document.querySelector('#overlay img').src = ruta;
                document.querySelector('#overlay .descripcion').innerHTML = descripcion;
            });
        });
    
        // CloseButton Eventlistener 
        document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
            overlay.classList.remove('activo');
        });
    
        // Overlay Eventlistener
        overlay.addEventListener('click', (evento) => {
            evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
        });
    });