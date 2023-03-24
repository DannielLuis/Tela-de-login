//
const btn = document.querySelector(".btn");

window.onload = function(){
    console.log(btn);
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Testando o botão")
});

