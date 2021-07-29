const express = require ('express');

const app = express();
const port = 8080;

// app.get('/', (req, res) => {
//  console.log(req.headers);
//  console.log(req.path);
//  console.log("ip is : " + req.ip);
//  console.log(req.method);
//  console.log(req.subdomains);
//  console.log(req.params);
//  console.log(req.url);
//  console.log(req.hostname);
//  res.status(404).end();
// });

app.get('/user/:id', (req, res) => {
    console.log(req.params)
})

// app.post("/thing");

app.listen(port, ()=> {
    console.log("Connected to the server.")
})