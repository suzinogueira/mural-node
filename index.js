const PORT= 3000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let posts = [
    {id: "00001",
    title: "Teste do Mural",
    description: "Descrição Teste"},
]

app.listen(PORT, ()=>{
    console.log("Server running on port", PORT)
})

app.get("/all", (req, res)=>{
    res.json(JSON.stringify(posts));
})

app.post("/new", (req, res)=>{

})