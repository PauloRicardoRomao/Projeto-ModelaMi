const botaoMenu = document.querySelector(".menu-mobile");
const containerMenu = document.querySelector(".container-menu");
const body = document.querySelector("body");
const botaoForm = document.getElementById("enviar-mensagem");
const moduloProcedimentos = document.getElementById('agendamento-modulo-1');
let modulo =  null;
let procedimentoSelecionado = null;

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

function abreFechaModal(moduloSelecionado){
    modulo = document.getElementById(moduloSelecionado);
    console.log(moduloSelecionado);
    const visibilidadeModulo = window.getComputedStyle(modulo).display;
    if (visibilidadeModulo === 'none'){
        modulo.style.display = 'flex';
    } else {
        modulo.style.display = 'none';
    }
}
// Array com os números dos módulos
const modulos = [1, 2, 3];
// Itera sobre o array e configure o Event Listener para cada um
modulos.forEach(numero => {
    // Constrói o ID dinamicamente (ex: 'box1', 'box2', etc.)
    const boxId = `box${numero}`; 
    const boxModulo = document.getElementById(boxId);
    const moduloId = `modulo${numero}`;
    const btnCloseId = `closeModalIndex${numero}`
    const btnClose = document.getElementById(btnCloseId);
    
    boxModulo.addEventListener("click", () => abreFechaModal(moduloId));
    btnClose.addEventListener("click", () => abreFechaModal(moduloId));   
});

function abreInstagram(){
    window.open('https://www.instagram.com/modela_mi_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
}

function abreWpp(){
    window.open('https://api.whatsapp.com/send?phone=5514997044317');
}

/*Agendamentos*/

function chamaModalProcedimentos(){
    let imgFormulario = document.getElementById('container-img-form');
    let contImg = document.getElementById('img-modulo-agendamento');
    
    const larguraJanela = window.innerWidth;

    if(larguraJanela <= 600){
        if(moduloProcedimentos.style.display === 'flex'){
            moduloProcedimentos.style.display = 'none';
            imgFormulario.style.display = 'none';
            contImg.style.display = 'none';
        }
    }

    moduloProcedimentos.style.display = 'flex';
}


function pegaProcedimento(idProcedimento){
    const procedimentoConsulta = idProcedimento;
    procedimentoSelecionado = procedimentoConsulta;
    console.log(procedimentoSelecionado);
}
function alteraProcedimentoAgendamento(tituloBox, imgBox, procedimento){
    let tituloProcedimento = document.getElementById(tituloBox);
    let imgProcedimento = document.getElementById(imgBox);

    let tituloAgendamento = document.getElementById('titulo-procedimento-agendamento');
    let imgAgendamento = document.getElementById('img-modulo-agendamento');

    if(tituloProcedimento && imgProcedimento){
        tituloAgendamento.innerText = tituloProcedimento.innerText;
        let srcProcedimento = imgProcedimento.getAttribute('src');
        imgAgendamento.setAttribute('src', srcProcedimento);
        
        pegaProcedimento(procedimento);
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
   
    const janela = window.innerWidth;

    if(janela > 600){ 
        if(moduloProcedimentos.style.display === 'flex'){
            moduloProcedimentos.style.display = 'none';
            
            imgFormulario.style.display = 'flex';
            formInicial.style.display = 'flex';
            formFinal.style.display = 'none';
            contImg.style.borderRadius = '0%';
            novoParagrafo.style.display = 'none';
        }
    }else if(janela <= 600){
         if(moduloProcedimentos.style.display === 'flex'){
            moduloProcedimentos.style.display = 'none';
            
            formInicial.style.display = 'flex';
            formFinal.style.display = 'none';
        }
    }
}

function continuarAgendamento(){
    let formInicial = document.getElementById('form-modulo1');
    let formFinal = document.getElementById('form-modulo2');
    let imgForm = document.getElementById('img-modulo-agendamento');
    let txtNome = document.getElementById('txt-nome').value;
    let txtSobrenome = document.getElementById('txt-sobrenome').value;
    let txtEmail = document.getElementById('txt-email').value;
    let txtCel = document.getElementById('txt-cel').value;    

    if(!txtNome || !txtSobrenome || !txtEmail || !txtCel){
        alert('Necessário preencher todos os campos');
    } else{
        formInicial.style.display = 'none';
        imgForm.style.transition = 'left 0.5s ease-out, transform 0.5s ease-out';
        formFinal.style.display = 'flex'  
        imgForm.style.borderRadius = '0 40px 0 40px';
    }
}
document.getElementById('continuar-agendamento').addEventListener("click", (event) => continuarAgendamento());
const novoParagrafo = document.createElement('p');
async function confirmarAgendamento(){
    let formulario1 = document.getElementById('form-modulo1');
    let formulario2 = document.getElementById('form-modulo2');
    let imgFormulario = document.getElementById('container-img-form');

    let nomeFormulario = document.getElementById('txt-nome').value;
    let sobrenomeFormulario = document.getElementById('txt-sobrenome').value;
    let emailFormulario = document.getElementById('txt-email').value;
    let telefoneFormulario = document.getElementById('txt-cel').value;
    let dataHoraFormulario = document.getElementById('txt-data-hora').value;
    let localFormulario = document.getElementById('combo-local').value;
    
    if (!dataHoraFormulario || !localFormulario){
        alert('Necessário preencher todos os campos!');
    } else {
        const dados = {
            nome: nomeFormulario+" "+sobrenomeFormulario,
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

        await fetch("http://localhost:3000/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                entity: "consulta",
                action: "gravar",
                data: {
                    procedimento: procedimentoSelecionado, 
                    nome: nomeFormulario + " " + sobrenomeFormulario,
                    email: emailFormulario,
                    telefone: telefoneFormulario,
                    dataHora: dataHoraFormulario,
                    local: localFormulario,
                    obsAgendamento: "Sem observações"
                }
            })
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
        nomeFormulario.value = "";
        sobrenomeFormulario.value = "";
        emailFormulario.value = ""; 
        telefoneFormulario.value = "";
        dataHoraFormulario.value = "";
        procedimentoSelecionado = "";
    }
}
document.getElementById('confirmar-agendamento').addEventListener("click", (event) => confirmarAgendamento());

function limparFormContato(){
    let inputs = document.querySelectorAll('input');
    let textareas = document.querySelectorAll('textarea');

    inputs.forEach(input => input.value = "");
    textareas.forEach(textarea => textarea.value = "");
}
document.getElementById('enviar-mensagem').addEventListener("click", (event) => limparFormContato());

