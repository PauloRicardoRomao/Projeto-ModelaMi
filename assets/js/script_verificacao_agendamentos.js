document.getElementById("btn-confirmar-aut-age").addEventListener("click", (event) => {
    window.location('../pages/procedimentos.html');
});


function abrirModalConfirmacao(mensagem, onConfirm) {
    // --- ESTILO VIA JS ---
    const estilo = document.createElement('style');
    estilo.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }

        .modal-box {
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            max-width: 350px;
            width: 90%;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            animation: fadeIn 0.25s ease;
        }

        .modal-box h3 {
            margin-bottom: 15px;
            font-size: 18px;
            color: #333;
        }

        .modal-actions {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }

        .modal-btn {
            flex: 1;
            margin: 0 5px;
            padding: 10px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 15px;
            transition: background 0.2s;
        }

        .btn-cancelar {
            background: #ccc;
            color: #333;
        }

        .btn-confirmar {
            background: #2d89ef;
            color: #fff;
        }

        .btn-confirmar:hover {
            background: #1a5fd0;
        }

        .btn-cancelar:hover {
            background: #b5b5b5;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(estilo);

    // --- ESTRUTURA DO MODAL ---
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'modal-box';
    modal.innerHTML = `
        <h3>${mensagem}</h3>
        <div class="modal-actions">
            <button class="modal-btn btn-cancelar">Cancelar</button>
            <button class="modal-btn btn-confirmar">Confirmar</button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const btnCancelar = modal.querySelector('.btn-cancelar');
    const btnConfirmar = modal.querySelector('.btn-confirmar');

    // --- FUNÇÕES ---
    function fecharModal() {
        overlay.remove();
        estilo.remove(); // remove o estilo se quiser que seja limpo após o uso
    }
    btnCancelar.addEventListener('click', fecharModal);
    btnConfirmar.addEventListener('click', () => {
        fecharModal();
        if (typeof onConfirm === 'function') onConfirm();
    });
}

function mostrarNotificacao(texto, cor = '#3a3a3aff') {
    const aviso = document.createElement('div');
    aviso.textContent = texto;
    aviso.style.position = 'fixed';
    aviso.style.top = '20px';
    aviso.style.right = '20px';
    aviso.style.background = cor;
    aviso.style.color = '#fff';
    aviso.style.padding = '10px 15px';
    aviso.style.borderRadius = '8px';
    aviso.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.47)';
    aviso.style.zIndex = '10000';
    document.body.appendChild(aviso);

    setTimeout(() => aviso.remove(), 3000);
}

const btnCancelarAge = document.getElementById('btn-cancelar-agendamento');
async function cancelarAgendamento(){
    const url = "http://localhost:3000/";
    let id = document.getElementById("codigo-agendamento").value;

    abrirModalConfirmacao('Tem certeza que deseja realizar o cancelamento?', async () => {
        try {
            const resposta = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                action: 'deletar', 
                entity: 'consulta',  
                id: id
            });

            if (!resposta.ok) throw new Error('Erro ao cancelar.');
            
            mostrarNotificacao('Cancelamento realizado com sucesso!');

            document.querySelectorAll("#container-forms-agendamento form").forEach(formulario => {
                formulario.reset();
            });
        }catch (erro){
            mostrarNotificacao('Falha ao realizar o cancelamento.', 'red');
            console.error(erro);
        }
    });
}

const btnRealizarPag = document.getElementById('btn-realizar-pagamento');
function confirmarAgendamento(){
}