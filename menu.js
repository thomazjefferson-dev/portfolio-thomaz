let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile'); // corrigido o ID
let overlay = document.querySelector('.overlay-menu'); // elemento overlay

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    if (overlay) overlay.classList.add('ativo');
});

// Adicionar função para fechar o menu
let btnFechar = document.getElementById('btn-fechar');
if (btnFechar) {
    btnFechar.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        if (overlay) overlay.classList.remove('ativo');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.menu-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        if (overlay) overlay.classList.remove('ativo');
    });
});

// Fechar menu ao clicar na sobreposição
if (overlay) {
    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.classList.remove('ativo');
    });
}