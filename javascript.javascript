// seleciona formulário
const formulario = document.getElementById("formContato");

// envio
formulario.addEventListener("submit", function(event){

    // impede o recarregamento da página
    event.preventDefault();

    // grava os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    //  retorno
    const retorno = document.getElementById("retorno");

    // validação de nome, email e mensagem
    if(nome === "" || email === "" || mensagem === ""){

        retorno.innerHTML = "Preencha todos os campos!";
        retorno.style.color = "red";

        return;
    }

    // validação do email
    if(!email.includes("@")){

        retorno.innerHTML = "Digite um e-mail válido!";
        retorno.style.color = "red";

        return;
    }

    // simulação de envio
    retorno.innerHTML = "Mensagem enviada com sucesso!";
    retorno.style.color = "green";

    // apaga os campos
    formulario.reset();

});