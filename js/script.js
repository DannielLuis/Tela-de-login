//
const usuario = 'daniel';
const acesso = 1234

const btn = document.querySelector(".btn");

/*window.onload = function(){
    console.log(btn);
}*/

function logar(){
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(login == usuario && senha == acesso){
        alert('Login realizado com sucesso');
    }else{
        alert('Usuario ou senha incorreto');
    }
}
/*
btn.addEventListener("click", () => {
    logar();
});*/

btn.addEventListener("click", (e) => {
    e.preventDefault()
    //alert("Testando o botão")
    logar();
});

