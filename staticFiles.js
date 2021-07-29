const express = require ('express');
const app = express();

app.use(express.static('static'));

app.get ('/', (request, response) => {
    response.send("Hello World today");
})

app.listen(3000);