const express = require ('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
 res.send("Hello world")
})

app.get('/old', (req, res) => {
    res.redirect(301, '/new')
   })

app.get('/new', (req, res) => {
 res.send("hello from new path")
})

app.listen(port, ()=> {
    console.log("Connected to the server.")
})