const botaoMenu = document.querySelector(".menu-mobile");
const containerMenu = document.querySelector(".container-menu");

if (botaoMenu && containerMenu) {
    botaoMenu.addEventListener("click", (event) => {
        if (containerMenu.style.display === 'none' || containerMenu.style.display === '') {
            containerMenu.style.display = 'flex';
        } else {
            containerMenu.style.display = 'none';
        }
    });
}