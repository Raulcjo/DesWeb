const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3307,
    database:"apidevweb"
})

module.exports = conexao
