const express = require("express");
const app = express();
const users = require('./routes/users');

app.use(express.json())
app.use('/users', users);

app.get('/', (req, res) => {
    console.log("/");
})

app.listen(9000, (req, res) => {
    console.log("server is connected");
});