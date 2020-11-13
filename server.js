const express = require('express');
const app = express();

//MAIN PAGE
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/src/index.html");
})

//QUERY PARAMETERS | EXAMPLE: http://localhost:3000/query/?valor=<value>
app.get('/query', function (req, res) {
    res.send("<h1> O valor que você passou foi: "+req.query.valor+"</h1>");
})

//PARAMETERS | EXAMPLE: http://localhost:3000/noQuery/<value>
app.get('/noQuery/:noQueryParameters', function (req, res) {
    res.send("<h1> O valor que você passou foi: "+req.params.noQueryParameters+"</h1>");
})

//EXERCÍCIO
app.get('/teste', function (req, res) {
    res.sendFile(__dirname + "/src/front.html");
})

app.listen(3000, ()=> console.log("listening"));