const express = require('express')
const app = express()

let todos = [];

app.post('/', function (req,res){
    todos.push({
        title,
        id
    })
})

app.delete('/', function(req,res){
    
})

app.get('/', function (req, res) {
  res.json({
    todos
  })
})

app.listen(3000);