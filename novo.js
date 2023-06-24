// armazenando todos os elementos li,lista(s), do html.
let elements = document.getElementsByTagName("li")
// o for percorre cada item da lista
for(let i = 0;i<elements.length;i++){
// criamos uma span,HTML <span> é um conteiner generico em linha para conteúdo fraseado.
    let span = document.createElement("span")
    // criamos uma variável para criar um x de deletar o item da lista e armazenando na variável close
    let close = document.createTextNode("/u00D7")
    // definimos uma class para a variável span
    span.className = "close"
    //adicionamos o simbolo de fechar na variavel span
    span.appendChild(close)
//adicionamos a variavel elements na lista span
    elements[i].appendChild(span)
}
// criamos a variavel close
let close = document.getElementsByClassName("close")
//o for vai percorrer todos os elemmentos que possuirem a classe close
for(let i = 0; i < close.length;i++){
//quando clicado em algun elemento com o close a função será executada
close[i].onclick = function(){
//criamos uma variavel para rmazenar o elemento que tem o close e que está snedo no momento
    let div = this.parentElement
//depois ocultamos o elemento que foi clicado
    div.style.display = "none"
}
}
//criar função de new ellement
function newEllement(){
//criamos um New Ellement li na variavel li
    let li = document.createElement("li")
//pegar o que o user digita no input
let input = document.getElementById("task").value
//cria uma variavel para armazenar um texto node:um texto node auxilia na criação de elemento no html
let text = document.createTextNode(input)
li.appendChild(text)
console.log(text)
if (input === "") {
    alert("digite alguma tarefa a ser adicionada a lista")
} else {
document.getElementById("principalList").appendChild(li)
}
document.getElementById("task").value=""
}

let botao = document.querySelector("#button_add")

botao.addEventListener("click", function(event) {
    event.preventDefault()
    newEllement()
})
