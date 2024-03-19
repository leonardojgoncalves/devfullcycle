const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Leo')`
connection.query(sql);
const sql2 = `SELECT * FROM people`;
let resultado;
connection.query(sql2, (err,results) => {
  resultado = results;
});
connection.end();

app.get('/', (req,res) => { 
  console.log(resultado);
  var htmlStr = '<h1>Full Cycle</h1>';
  htmlStr +=  '<ul>';
  for(i=0; i<resultado.length;i++){
    htmlStr+=`<li>id: ${resultado[i].id} nome: ${resultado[i].name}</li>`
  };
  htmlStr += '</ul>';
  res.send(htmlStr);
})

app.listen(port, ()=> {
  console.log('Rodando na porta '+ port);
})