// Desplazamiento suave solo para enlaces internos (los que empiezan con "#")
document.querySelectorAll('nav a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        const targetSelector = this.getAttribute('href');
        if (targetSelector.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(targetSelector);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Animación de aparición para hero-banner y secciones normales
const secciones = document.querySelectorAll('.section, .hero-banner');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

secciones.forEach(seccion => {
    observer.observe(seccion);
});
