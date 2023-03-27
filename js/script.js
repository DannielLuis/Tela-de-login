//
const usuario = 'daniel';
const acesso = 159

const conteiner_alert = document.querySelector(".conteiner_alert");
const alert_1 = document.querySelector(".alert_1");
const alert_2 = document.querySelector(".alert_2");
const btn_ok = document.querySelector(".alert_1 button");

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

function myAlert(qual){
    conteiner_alert.classList.add("isVisivel");
    if(qual == "alert1"){
        alert_1.classList.add("isVisivel");
    }else if(qual == "alert2"){
        alert_2.classList.add("isVisivel");
    }
};

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
    };
};

function limparCampos(){
    document.getElementById('usuario').value=''
    document.getElementById('senha').value=''
};

function logar(){
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(login == usuario && senha == acesso){
        alert('Login realizado com sucesso');
        //limparCampos();
    }else{
        //alert('Usuario ou senha incorreto');
        //limparCampos();
        myAlert("alert1");
    }
    limparCampos();
};

btn_ok.addEventListener("click", () => {
    conteiner_alert.classList.remove("isVisivel");
    alert_1.classList.remove("isVisivel");
    alert_2.classList.remove("isVisivel");
})

ver.addEventListener("click", () => {
    //alert("Testando o botão")
    mostrarSenha();
});

btn.addEventListener("click", (e) => {
    e.preventDefault()
    //alert("Testando o botão")
    logar();
});

