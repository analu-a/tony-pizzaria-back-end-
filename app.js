/*****************************************************
 * Objetivo: Criar uma API para responder produtos   *
 *  de uma pizzaria                                  *                           
 * Data: 12/12/2023                                  *
 * Autor: Ana Luiza                                  *
 * Versão: 1.0                                       *
*****************************************************/
const express =  require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next)=> {

    response.header('Access-Control-allow-Origin', '*')
    response.header('Access-Control-allow-Methods', 'GET')
    app.use(cors())

    next()

})

//EndPoits: mostrar nome dos usuarios

app.get('/usuario/informacoes', cors(), async   function(request, response, next){

    let controleNomeUser = require('./modulo/tony-pizzariaArrayJson')
    let nomes = controleNomeUser.getUsuariosNome()

    response.json(nomes)
    response.status(200)

})

//EndPoint: Retorna os dados do usuario filtrando pelo nome
app.get('/usuario/informacoes/:nome' , cors(), async function(request, response, next){
  
    let nomeUser = request.params.nome

  
    let infoUsuario = require('./modulo/tony-pizzariaArrayJson')
    let dadosUser = infoUsuario.getUserInfo(nomeUser)

    if(dadosUser){
        response.json(dadosUser)
        response.status(200)
    }  else{
        response.json({ERRO: "Não foi possivel encontrar um item"})
        response.status(404)
    }
 
})

//EndPoint: Retorna os dados da pizza filtrando pelo sabor
app.get('/produtos/pizza:sabor', cors(), async function(request, response, next){

    
    let saborPizza = request.query.sabor

    let controleSaborPizza = require ('./modulo/tony-pizzariaArrayJson')
    let dadosPizza = controleSaborPizza.getPizzainformacoes(saborPizza)

    if(dadosPizza){
        response.json(dadosPizza)
        response.status(200)
    } else {
        response.status(404)
        response.json({Erro: "Não foi possivel encontrar um item"})
    }
})

app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')

})

