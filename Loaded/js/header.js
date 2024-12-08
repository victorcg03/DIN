window.addEventListener('load', ()=>{
    const header = 
    `<header>
        <div class="header-arriba">
            <img src="./img/logo.png" alt="Logo Loaded">
            <div class="derecha">
                <form action="">
                    <select name="" id="">
                        <option value="todos">Todo el catálogo</option>
                    </select>
                    <div>
                        <input type="search" placeholder="Buscar">
                        <i class="fa-solid fa-search"></i>
                    </div>
                </form>
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-shopping-cart"></i>
            </div>
        </div>
        <nav>
            <a href="./">Inicio</a>
            <a href="./catalogo.html">Catálogo</a>
            <a href="./novedades.html">Novedades 
            <div class="novedades-desplegable">
                <details>
                    <summary>Smartphones</summary>
                </details>
                <details>
                    <summary>Portátiles</summary>
                </details>
                <details>
                    <summary>Auriculares</summary>
                </details>
            </div>
            </a>
            <a href="./ofertas.html">Ofertas</a>
            <a href="./nosotros.html">Sobre nosotros</a>
        </nav>
    </header>`
    const footer = 
    `<footer>
        <div class="desplegable">
            <details>
                <summary>Por qué comprar</summary>
            </details>
        </div>
        <div class="desplegable">
            <details>
                <summary>Comunidad</summary>
            </details>
        </div>
        <div class="desplegable">
            <details>
                <summary>Otros</summary>
            </details>
        </div>
        <div class="pagos-redes">
            <img src="./img/pagos.png">
            <img src="./img/redes.png">
        </div>
    </footer>`
    document.querySelector('main').insertAdjacentHTML('beforebegin', header);
    document.querySelector('main').insertAdjacentHTML('afterend', footer);

    const links = document.querySelectorAll('nav a');

    const ventanaActual = window.location.pathname.split('/');
    console.log(ventanaActual);
    
    links.forEach(link => {
        let linkk = link.getAttribute('href').split('/');
        if (linkk[linkk.length-1] === ventanaActual[ventanaActual.length-1]) {
            link.classList.add('activo');
        }
    });
});