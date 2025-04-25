// Desplazamiento suave al hacer clic en los enlaces del nav
document.querySelectorAll('nav a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de aparición cuando se muestra cada sección
const secciones = document.querySelectorAll('.section');

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
