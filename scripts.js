'use strict'

const conteiner = document.getElementById('conteinerPrincipal')
const URL = "https://fakestoreapi.com/products/"

//Api que eu devo usar :
//fake store api

async function buscar(numeroProduto) {
    const busca = await fetch( URL + numeroProduto).then(res=>res.json())
    
    return busca
}

function criarCards(titulo, preco, imagem){
    const divConteiner = document.getElementById("conteinerPrincipal")
    const conteinerCard = document.createElement("div")
    const precoCard = document.createElement("span")
    const tituloCard = document.createElement("h1")
    const imagemCard = document.createElement("img")

    if(titulo.lenght  <= 15){
        tituloCard.textContent = titulo
    }
    else{
        const tituloCorrido = titulo.split(" ")
        tituloCard.textContent = tituloCorrido[0] +" " + tituloCorrido[1]+ " " + tituloCorrido[2] + "..."
    }
    precoCard.textContent = "R$" + preco
    imagemCard.src = imagem

    imagemCard.className = "imagemCard"
    precoCard.className = "precoCard"

    conteinerCard.className = "card"
    conteinerCard.append(tituloCard,imagemCard, precoCard)

    divConteiner.appendChild(conteinerCard)
}

async function criarTelaCards(){
    for(let i = 1; i< 15; i++){
         const resultado = await buscar(i)

        const card = {
            titulo : resultado.title,
            preco : resultado.price,
            imagem : resultado.image
        }
        criarCards(card.titulo, card.preco, card.imagem)
    }
}
