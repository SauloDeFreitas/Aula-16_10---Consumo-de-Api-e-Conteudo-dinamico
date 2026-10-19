'use strict'

const conteiner = document.getElementById('conteinerPrincipal')
const URL = "https://fakestoreapi.com/products/"

//Api que eu devo usar :
//fake store api

async function buscar(numeroProduto) {
    const busca = await fetch( URL + numeroProduto).then(res=>res.json()).then(json=>console.log(json))
    
    return busca
}

function criarCards(titulo, descricao, preco){
    const divConteiner = document.getElementById("conteinerPrincipal")
    const conteinerCard = document.createElement("div")
    const precoCard = document.createElement("span")
    const descricaoCard = document.createElement("span")
    const tituloCard = document.createElement("h1")
    
    tituloCard.textContent = titulo
    descricaoCard.textContent = descricao
    precoCard.textContent = preco

    conteinerCard.className = "card"
    conteinerCard.append(titulo, descricao, preco)

    divConteiner.appendChild(conteinerCard)
}

function criarTelaCards(){
    const resultado = buscar(1)
    console.log("a")
    criarCards(resultado.title, resultado.description, resultado.price)
}
