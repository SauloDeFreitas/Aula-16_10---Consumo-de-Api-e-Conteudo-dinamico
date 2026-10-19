'use strict'

const conteiner = document.getElementById('conteinerPrincipal')
const URL = "https://fakestoreapi.com/products/"
const numeroProduto = 0

//Api que eu devo usar :
//fake store api

async function buscar() {
    const busca = await fetch( URL + numeroProduto).then(res=>res.json()).then(json=>console.log(json))
}

buscar()
