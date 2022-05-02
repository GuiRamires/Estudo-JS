//importação do módulo do express
const express = require('express');





//reslizar a aplicação da função do express
//em uma variavel do aplicativo
const app = express();




//Permitir com que o servidor receba dados 
//no formato de json 
app.get("/", (req, res) => {
    res.send("Bem Vindo!");  
});





//criaçao de uma lista de clientes 
const clientes = [
    {
        id:12,
        nome:"Robson",
        idade:17
    },
    {
        id:46,
        nome:"Roger",
        idade:25,
    },
];


//rota para clientes
app.get("/api/clientes/listar",(req,res) => {
    res.status(200).send({ output:clientes});
    });

//cadastrar novos clientes
app.post("/api/clientes/cadastrar", (req, res) => {
  clientes.push(req.body);
  res.status(200).send({ output: "Clientes cadastrados!"});
})

app.listen(5000, () => console.log("http://localhost:5000"));

