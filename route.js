const express = require ('express');
const port = 8080;
const app = express();

//Route paths
// const path = "/"
// const path = "/ab?c"

//Route Parameters
const path = "/users/:userId/books/:bookId"

app.get(path,(req, res) => {
    res.json("user Id is : " + req.params.userId);
    // res.download("user Id is : " + req.params.userId);
    res.end();
})

//Route Handlers
// app.get('/example',(req, res, next) => {
//     console.log("Response will be sent by next callback")
//     next();
// },(req, res)=>{
//     res.json("Final output");
// })
app.listen(port, ()=> {
    console.log("Connected to the server.")
})