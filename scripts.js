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
    const divConteiner = document.getElementById("")
    const conteinerCard = document.createElement("div")
    const preco = document.createElement("span")
    const descricao = document.createElement("span")
    const titulo = document.createElement("h1")
    
    titulo.textContent = titulo
    descricao.textContent = descricao
    preco.textContent = preco

    conteinerCard.className = "card"
    conteinerCard.append(titulo, descricao, preco)

    divConteiner.appendChild(conteinerCard)
}

function criarTelaCards(){
    const resultado = buscar(1)
    criarCards(resultado.title, resultado.description, resultado.price)
}
