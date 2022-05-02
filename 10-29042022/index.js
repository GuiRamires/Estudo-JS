/*
Estrutura de Backend, onde iremos selecionar,
cadastrar, atulizar e deletar dados sobre os
clientes, ou seja, criaremos um CRUD
CRUD

 C -> Create: quando cria-se dados no banco
 R -> Read: Quando lemos dados no banco
 U -> Update: Quando atualizamos dados no banco
 D -> Delete: Quando apagamos dados no banco

 vamos usar os verbos: GET, POST, PUT, DELETE, onde:
 GET -> Read
 POST -> Create
 PUT -> Update
 DELETE -> Delete

*/

// importação do módulo express
const express = require('express');

// importação do modulo mongoose
const mongoose = require('mongoose')

// criação do app referente ao express
const app = express();

// preparar o servidor para receber json
app.use(express.json());



    /*
    Caminho do banco de dados mongodb
    mongodb+srv://renanlazoti:<password>@bdd-do-rs.q4zaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/

const urldb = "mongodb+srv://guiramires:gui2302@ramires.gr2yw.mongodb.net/bdddogui?retryWrites=true&w=majority";
mongoose.connect(urldb,{useNewUrlParser:true,useUnifiedTopology:true});

/*
    Definição do esquema de dados da tabela
    Schema
*/

const tabela = mongoose.Schema({
    nome:{type:String,require},
    email:{type:String,require},
    telefone:{type:String},require,
    cidades:{type:String},require
});

const Produtos = mongoose.model("tbprodutos",tabela);

// definição de uma rota padrão
const default_route = "/api/Produtos";

// rota para listar os Produtos com endpoint listar
app.get(`${default_route}/listar`,(req,res)=>{
      Cliente.find().then((dados) => {

        res.status(200).send({ output: dados});
      })
      .cath((erro) =>
      res
         .status(500)
         .send(( output `Erro interno ao processar a compra -> ${erro}` ))
      );
          
});
           

        

    

        
// rota para cadastrar os produtos com endpoint cadastrar
app.post(`${default_route}/cadastrar`,(req,res)=>{
    const cli = new Produtos(req.body);
    cli
       .save()
       .then((dados)=>{
        res.status(201).send({output:`Cadastro realizado`,payload:dados})
    })
    .catch((erro)=> console.error(`Erro ao tentar cadastrar ${erro}`));

});


// rota para atualizar os Produtos com endpoint atualizar
// passagem de argumentos pela url com id do produto 
app.put (`${default_route}/atualizar/:id`,(req,res) =>{
    Produtos.findByIdAndUpdate(req.params.id,req.body,{new:true},(erro,dados)=> {
        if(erro){
            return res.status(500).send({output:`Não atualizou -> ${erro}`});
        }
        res.status(200).send({output:"Dados atualizados"});
   })
});



// rota para apagar ps produtos com endpoint deletar
app.delete(`${default_route}/apagar/:id`,(req,res) =>{
    
    Produtos.findByIdAndDelete(req.params.id,(erro,dados) =>{
    if(erro) {
        return res
          .status(500)
          .send({output:`Erro ao tentar apagar produto -> ${erro}`});
    }
    res.status(204).send({output: `Apagados` });
   });
});

//definir as portas de comunicaçao do servidor 
app.listen(2302,
    ()=>console.log("Servidor on-line em http://localhost:2302"));
