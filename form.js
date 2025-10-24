// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contato-form');
    if (!form) return;

    const phone = '5521964361121'; // +55 21 96436-1121

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const telefone = document.getElementById('telefone')?.value.trim() || '';
        const mensagem = document.getElementById('mensagem')?.value.trim() || '';

        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha nome, email e mensagem.');
            return;
        }

        const text = `Olá, meu nome é ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(url, '_blank');
    });
});
// ...existing code...