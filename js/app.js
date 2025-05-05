const botaoMenu = document.querySelector(".menu-mobile");
const containerMenu = document.querySelector(".container-menu");
const body = document.querySelector("body");
const botaoForm = document.querySelector(".container .box .form-contato button");
const modulo1 = document.getElementById('modulo1');
const modulo2 = document.getElementById('modulo2');
const modulo3 = document.getElementById('modulo3');


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

function chamaModal1(){
    modulo1.style.display = 'flex';
}

function chamaModal2(){
    modulo2.style.display = 'flex';
}

function chamaModal3(){
    modulo3.style.display = 'flex';
}

const boxModulo1 = document.getElementById('box1');
boxModulo1.addEventListener("click", (event) => chamaModal1());

const boxModulo2 = document.getElementById('box2');
boxModulo2.addEventListener("click", (event) => chamaModal2());

const boxModulo3 = document.getElementById('box3');
boxModulo3.addEventListener("click", (event) => chamaModal3());


function fechaModulo(){
    if (modulo1.style.display === 'flex' || modulo2.style.display === 'flex' || modulo3.style.display === 'flex'){
        modulo1.style.display = 'none';
        modulo2.style.display = 'none';
        modulo3.style.display = 'none';
    } 
}

