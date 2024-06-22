/*painel de curiosidades (inicio)*/
const painels = document.querySelectorAll('.painel')

function removeActiveClasses() {
    painels.forEach((painel) => {
        painel.classList.remove('ativado')
    })
}

painels.forEach((painel) => {
    painel.addEventListener('click', () => {
        removeActiveClasses()
        painel.classList.add('ativado')
    })
})
/*(fim)*/

/*Mensagem de enviado (inicio)*/
function enviarFormulario() {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome && email && mensagem) {

        document.getElementById('mensagemConfirmacao').innerText = 'Sua menssagem foi enviada!';
        
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
    }
}
/*(fim)*/

