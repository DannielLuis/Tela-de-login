//
const usuario = 'daniel';
const acesso = 159

const btn = document.querySelector(".btn");
const ver = document.querySelector(".btn_ver");
const oculta = document.getElementById("oculta");
const visivel = document.getElementById("visivel");

/*window.onload = function(){
    console.log(btn);
}*/
function desabilitar(){
    alert("Função desabilitada.")
    return false
}

//document.oncontextmenu=desabilitar

function mostrarSenha(){
    var senha = document.getElementById("senha");
    if(senha.type == "password"){
        senha.type = "text";
        oculta.classList.add("noVisivel");
        visivel.classList.remove("noVisivel");
    }else{
        senha.type = "password";
        visivel.classList.add("noVisivel");
        oculta.classList.remove("noVisivel");
    }
}

function limparCampos(){
    document.getElementById('usuario').value=''
    document.getElementById('senha').value=''
}

function logar(){
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(login == usuario && senha == acesso){
        alert('Login realizado com sucesso');
        //limparCampos();
    }else{
        alert('Usuario ou senha incorreto');
        //limparCampos();
    }
    limparCampos();
}

ver.addEventListener("click", () => {
    //alert("Testando o botão")
    mostrarSenha();
});

btn.addEventListener("click", (e) => {
    e.preventDefault()
    //alert("Testando o botão")
    logar();
});

