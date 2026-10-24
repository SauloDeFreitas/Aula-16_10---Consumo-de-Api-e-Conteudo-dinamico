'use strict'

const conteiner = document.getElementById('conteinerPrincipal')
const URL = "https://fakestoreapi.com/products/"
let produtos = []

//Api que eu devo usar :
//fake store api

async function buscar(numeroProduto) {
    const busca = await fetch( URL + numeroProduto).then(res=>res.json())
    
    return busca
}

function limparTela(){
     const divConteiner = document.getElementById("conteinerPrincipal")
     divConteiner.innerHTML = ""
}

function descricaoCard(titulo, preco, imagem, descricao){
    limparTela()
    const divConteiner = document.getElementById("conteinerPrincipal")
    const imgDescricao = document.createElement("img")
    const descricaoDes = document.createElement("p")
    const precoDes = document.createElement("span")
    const tituloDes = document.createElement("h1")
    
    imgDescricao.src = imagem
    descricaoDes.textContent = descricao
    precoDes.textContent = "R$" + preco
    tituloDes.textContent = titulo

    const divEsquerda = document.createElement("div")
    const divDireita = document.createElement("div")

    divEsquerda.append(tituloDes, imgDescricao)
    divDireita.append( descricaoDes, precoDes)
    divEsquerda.className = "divEsquerda"
    divDireita.className = "divDireita"

    const divDescricao = document.createElement("div")
    divDescricao.className = "divDescricao"
    divDescricao.append(divEsquerda, divDireita)
    divConteiner.appendChild(divDescricao)
}

function home(){
    limparTela()
    for(let i = 1; i< 15; i++){
        criarCards(produtos[i].titulo, produtos[i].preco, produtos[i].imagem, produtos[i].descricao)
    }
}

function criarCards(titulo, preco, imagem, descricao){
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
    conteinerCard.onclick = ()=>{descricaoCard(titulo, preco, imagem, descricao)}
    conteinerCard.append(tituloCard,imagemCard, precoCard)

    divConteiner.appendChild(conteinerCard)
}

async function criarTelaCards(){
    for(let i = 1; i< 15; i++){
        const resultado = await buscar(i)

        const card = {
            categoria : resultado.category,
            titulo : resultado.title,
            preco : resultado.price,
            imagem : resultado.image,
            descricao : resultado.description
        }

        produtos[i] = card
        criarCards(card.titulo, card.preco, card.imagem, card.descricao)
    }
}


async function criarCardsFiltrados(categoria){
    for(let i = 1; i< 15; i++){
        if(produtos[i].categoria === categoria){
            const card = {
                titulo : produtos[i].titulo,
                preco : produtos[i].preco,
                imagem : produtos[i].imagem,
                descricao : produtos[i].descricao
            }
            criarCards(card.titulo, card.preco, card.imagem, card.descricao)
        }
    }
}

function filtrarCard(){
    const select = document.getElementById("categoriasSelect")
    limparTela()
    criarCardsFiltrados(select.value)
}
