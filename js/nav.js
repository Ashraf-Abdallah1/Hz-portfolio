fetch("nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav").innerHTML = data;


        // het is voor    kleur van de link van de huidge pagina  (nodig omdat de nav met js wordt geladen )
        const links = document.querySelectorAll('.navbar a');
        const currentPage = window.location.pathname.split('/').pop();

        links.forEach(link => {
            if(link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    });