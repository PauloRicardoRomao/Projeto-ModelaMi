const botaoMenu = document.querySelector(".menu-mobile");
const containerMenu = document.querySelector(".container-menu");
const body = document.querySelector("body");
const botaoForm = document.querySelector(".container .box .form-contato button");

if (botaoMenu && containerMenu) {
    botaoMenu.addEventListener("click", (event) => {
        if (containerMenu.style.display === 'none' || containerMenu.style.display === '') {
            containerMenu.style.display = 'flex';
            botaoMenu.style.backgroundColor = 'rgb(112, 101, 53)';
            botaoMenu.style.boxShadow = 'inset 0px 0px 10px 5px rgb(177, 152, 40)';
            body.style.overflow = 'hidden';
            containerMenu.style.backgroundColor = 'rgb(0, 0, 0, 0.7)';
            botaoForm.style.display = 'none';
        } else {
            containerMenu.style.display = 'none';
            botaoMenu.style.backgroundColor = '#000';
            botaoMenu.style.boxShadow = 'none';
            botaoMenu.style.color = '#fff';
            body.style.overflow = 'auto';
            botaoForm.style.display = 'flex';
        }
    });
}