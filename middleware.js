const express = require('express');
const app = express();

/* function myFunc(request, response, next) {
    console.log("logged");
    next();
}

const myFunc = (req, res, next) =>{
    console.log("logged");
    next();
}

const requestTime= (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

// app.use(myFunc)
app.use(requestTime)

app.get('/', (request, response)=> {
    let responseText = "Hello world<br>"
    responseText += '<small> requested at '+request.requestTime+'</small>'
    response.send(responseText);
});
 */


app.use((req, res, next)=>{
    console.log('time :'+Date.now());
    next();
});



app.listen(3000, ()=> {
    console.log("Server Connected....")
})