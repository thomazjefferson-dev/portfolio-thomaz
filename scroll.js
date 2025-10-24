window.revelar = ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 2000,
    delay: 1200
});

// Topo do site
revelar.reveal('.txt-topo-site h1', { delay: 800, origin: 'left' });
revelar.reveal('.txt-topo-site p', { delay: 1000, origin: 'left' });
revelar.reveal('.txt-topo-site .btn-contato', { delay: 1200, origin: 'left' });
revelar.reveal('.img-topo-site', { delay: 1400, origin: 'right' });

// Especialidades
revelar.reveal('.titulo', { delay: 800, origin: 'left' });
revelar.reveal('.especialidades-box', { delay: 1000, origin: 'bottom', interval: 400 });

// Sobre
revelar.reveal('.img-sobre', { delay: 800, origin: 'left' });
revelar.reveal('.txt-sobre', { delay: 1000, origin: 'right' });

// Portfólio
revelar.reveal('.img-port', { delay: 800, origin: 'bottom', interval: 400 });

// // Formulário
// revelar.reveal('form input', { delay: 800, origin: 'left', interval: 300 });
// revelar.reveal('form textarea', { delay: 1100, origin: 'left' });
// revelar.reveal('form .btn-enviar', { delay: 1400, origin: 'left' });