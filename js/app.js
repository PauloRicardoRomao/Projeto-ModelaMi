const botaoMenu = document.querySelector(".menu-mobile");
const containerMenu = document.querySelector(".container-menu");
const body = document.querySelector("body");
const botaoForm = document.querySelector(".container .box .form-contato button");
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

const modulo1 = document.getElementById('modulo1');
function chamaModal1(){
    modulo1.style.display = 'flex';
}
const boxModulo1 = document.getElementById('box1');
boxModulo1.addEventListener("click", (event) => chamaModal1());

const modulo2 = document.getElementById('modulo2');
function chamaModal2(){
    modulo2.style.display = 'flex';
}
const boxModulo2 = document.getElementById('box2');
boxModulo2.addEventListener("click", (event) => chamaModal2());

const modulo3 = document.getElementById('modulo3');
function chamaModal3(){
    modulo3.style.display = 'flex';
}
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

function abreInstagram(){
    window.open('https://www.instagram.com/modela_mi_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
}

function abreWpp(){
    window.open('https://api.whatsapp.com/send?phone=5514997044317');
}

/*Agendamentos*/

function chamaModalProcedimentos(){
    moduloProcedimentos.style.display = 'flex';
}

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

function fechaModuloAgendamento(){
    let formInicial = document.getElementById('form-modulo1');
    let formFinal = document.getElementById('form-modulo2');
    let contImg = document.getElementById('img-modulo-agendamento');
    let imgFormulario = document.getElementById('container-img-form');
    
    if(moduloProcedimentos.style.display === 'flex'){
        moduloProcedimentos.style.display = 'none';
        
        imgFormulario.style.display = 'flex';
        formInicial.style.display = 'flex';
        formFinal.style.display = 'none';
        contImg.style.borderRadius = '0%';
        novoParagrafo.style.display = 'none';
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

const novoParagrafo = document.createElement('p');
function confirmarAgendamento(){
    let formulario1 = document.getElementById('form-modulo1');
    let formulario2 = document.getElementById('form-modulo2');
    let imgFormulario = document.getElementById('container-img-form');

    let nomeFormulario = document.getElementById('txt-nome').value;
    let sobrenomeFormulario = document.getElementById('txt-sobrenome').value;
    let emailFormulario = document.getElementById('txt-email').value;
    let telefoneFormulario = document.getElementById('txt-cel').value;
    let dataHoraFormulario = document.getElementById('txt-data-hora').value;
    let localFormulario = document.getElementById('combo-local').value;
    
    const dados = {
        nome: nomeFormulario,
        sobrenome: sobrenomeFormulario,
        email: emailFormulario,
        telefone: telefoneFormulario,
        datahora: dataHoraFormulario,
        local: localFormulario
    };
    const dadosTratados = JSON.stringify(dados);

    let dataHoraFormatada = new Date(dataHoraFormulario);

    const dataFormatada = dataHoraFormatada.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const horaFormatada = dataHoraFormatada.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const mensagem = `Consulta agendada ${nomeFormulario} ${sobrenomeFormulario}, para o dia: ${dataFormatada}, ás ${horaFormatada}!`;

    formulario1.style.display = 'none';
    formulario2.style.display = 'none';
    imgFormulario.style.display = 'none';
    
    novoParagrafo.innerText = mensagem;
    document.getElementById('conteudo-modulo-procedimentos').appendChild(novoParagrafo);
    novoParagrafo.style.fontFamily = 'Verdana';
    novoParagrafo.style.fontSize = '1.4em';
    novoParagrafo.style.color = '#fff'; 
    novoParagrafo.style.textAlign = 'Justify';
    novoParagrafo.style.width = '100%';
    novoParagrafo.style.width = '70%';
    novoParagrafo.style.marginTop = '5%';
    novoParagrafo.style.justifyContent = 'center';
    novoParagrafo.style.alignItems = 'center';
}
document.getElementById('confirmar-agendamento').addEventListener("click", (event) => confirmarAgendamento());
