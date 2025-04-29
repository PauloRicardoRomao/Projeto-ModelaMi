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


function fechaModulo(){
    if (moduloAberto) {
        const containerModulo = document.querySelectorAll('.container-modulo-principal');
        const conteudoModulo = document.querySelectorAll('#' + moduloAberto);
 

        containerModulo.forEach(container => {
            container.style.display = 'none';
            conteudoModulo.style.display = 'none';
        });

        

        /* conteudoModulo.forEach(conteudo => {
            conteudo.style.display = 'none';
        });*/

        
        moduloAberto = null; // Reseta o ID do módulo aberto
    }
}



document.querySelectorAll('#box1').addEventListener('click', function(){
    let containerModulo = document.querySelectorAll('.container-modulo-principal');
    let conteudoModulo = document.querySelectorAll('#modulo1');
    
    if (containerModulo[0] && containerModulo[0].style.display !== 'flex') {    
        containerModulo.style.display = 'flex';
        conteudoModulo.style.display = 'flex';
    }
});

document.querySelectorAll('#box2').addEventListener('click', function(){
    let containerModulo = document.querySelectorAll('.container-modulo-principal');
    let conteudoModulo = document.querySelectorAll('#modulo2');
    
    if (containerModulo[0] && containerModulo[0].style.display !== 'flex') {    
        containerModulo.style.display = 'flex';
        conteudoModulo.style.display = 'flex';
    }
})

document.querySelectorAll('#box3 img').addEventListener('click', function(){
    let containerModulo = document.querySelectorAll('.container-modulo-principal');
    let conteudoModulo = document.querySelectorAll('#modulo3');

    // Verifica se algum elemento foi encontrado antes de tentar acessar o índice 0
    if (containerModulo.length > 0 && conteudoModulo.length > 0) {
        // Acessa o primeiro elemento do NodeList e verifica seu estilo
        if (containerModulo[0].style.display !== 'flex') {
            // Acessa o primeiro elemento do NodeList para modificar o estilo
            containerModulo[0].style.display = 'flex';
            conteudoModulo[0].style.display = 'flex';
        }
    }
});