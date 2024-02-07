// const http = require('http') 

// http.createServer(function (req, res) { 
//     res.writeHead(200, {'Content-Type': 'text/html'}) 

//     res.end('Hello World!') 
// }).listen(8080) 

const express = require('express') 
const app = express() 
const port = 3000 
app.get('/', (req, res) => { //route //arrow function drop function word use arrow
    res.send('Hello Express!') 
}) 

app.get('/goodbye', (req, res) => { //route //arrow function drop function word use arrow
    res.send('Goodbye!') 
}) 
app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`) 
}) 