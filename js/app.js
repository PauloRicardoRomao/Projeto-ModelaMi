const botaoMenu = document.querySelector(".menu-mobile");
const containerMenu = document.querySelector(".container-menu");
const body = document.querySelector("body");
const botaoForm = document.querySelector(".container .box .form-contato button");
const modulo1 = document.getElementById('modulo1');
const modulo2 = document.getElementById('modulo2');
const modulo3 = document.getElementById('modulo3');
const moduloProcedimentos = document.getElementById('agendamento-modulo-1');


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
    if (modulo1.style.display === 'flex' || modulo2.style.display === 'flex' || 
    modulo3.style.display === 'flex' || moduloProcedimentos.style.display === 'flex'){
        modulo1.style.display = 'none';
        modulo2.style.display = 'none';
        modulo3.style.display = 'none';
        moduloProcedimentos.style.display = 'none';
    } 
}


const btnIntagram = document.getElementById('btn-instagram');
const btnFacebook = document.getElementById('btn-facebook');
const btnWpp = document.getElementById('btn-wpp');


function abreInstagram(){
    window.open('https://www.instagram.com/modela_mi_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
}

function abreWpp(){
    window.open('https://api.whatsapp.com/send?phone=5514997044317');
}





function chamaModalProcedimentos(){
    moduloProcedimentos.style.display = 'flex';
}

const dadosFormulario = '{}';
const dadosTratados = JSON.parse(dadosFormulario);


function fechaModuloAgendamento(){
    let formInicial = document.getElementById('form-modulo1');
    let formFinal = document.getElementById('form-modulo2');
    let contImg = document.getElementById('img-modulo-agendamento');
    
    if(moduloProcedimentos.style.display === 'flex'){
        moduloProcedimentos.style.display = 'none';
        
        formInicial.style.display = 'flex';
        formFinal.style.display = 'none';
        contImg.style.borderRadius = '0%';
    }
}

function continuarAgendamento(){
    let formInicial = document.getElementById('form-modulo1');
    let formFinal = document.getElementById('form-modulo2');
    let imgForm = document.getElementById('img-modulo-agendamento');
    
    formInicial.style.display = 'none';
    
    imgForm.style.transition = 'left 0.5s ease-out, transform 0.5s ease-out';
    formFinal.style.display = 'flex'  
    imgForm.style.borderRadius = '0 40px 0 40px';
}

document.getElementById('continuar-agendamento').addEventListener("click", (event) => continuarAgendamento());

function alteraProcedimentoAgendamento(tituloBox, imgBox){
    let tituloProcedimento = document.getElementById(tituloBox);
    let imgProcedimento = document.getElementById(imgBox);

    let tituloAgendamento = document.getElementById('titulo-procedimento-agendamento');
    let imgAgendamento = document.getElementById('img-modulo-agendamento');

    if(tituloProcedimento && imgProcedimento){
        tituloAgendamento.innerText = tituloProcedimento.innerText;
        let srcProcedimento = imgProcedimento.getAttribute('src');
        imgAgendamento.setAttribute('src', srcProcedimento);
        chamaModalProcedimentos();
    }else{
        console.warn("Elemento 'tituloBox' ou 'imgBox' não encontrado.");
    }
}
