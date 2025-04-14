document.addEventListener('DOMContentLoaded', () => {
    const perfilIcon = document.getElementById('perfil-icon');
    const menuSuspenso = document.getElementById('menu-suspenso');

    perfilIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique feche o menu instantaneamente
        menuSuspenso.style.display =
            menuSuspenso.style.display === 'flex' ? 'none' : 'flex';
    });

    // Fecha o menu se clicar fora
    document.addEventListener('click', (event) => {
        const isClickInside = perfilIcon.contains(event.target) || menuSuspenso.contains(event.target);
        if (!isClickInside) {
            menuSuspenso.style.display = 'none';
        }
    });
});