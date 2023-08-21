const express = require('express')
const app = express()
const port = 3000

 const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

   app.get('/', (req, res) => {

    connection.query('SELECT * FROM people ', (err, rows, fields) => {
        if(!err) {
            if(res == null)
            {
                const sql = `INSERT INTO people(name) values ('Antonio Passos')`
                connection.query(sql)
                connection.end()
            }
            else{
                res.send('<h1>Full Cycle Rocks!!!</h1>' + JSON.stringify(rows))
            }
            
        } else {
            console.log(err);
        }
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})