const express = require ( 'express');
const cors = require('cors')
const db = require('mongodb').MongoClient;

const app = express();
const port = 8800;

app.use(cors())
app.use(express.json())
const myData = {}

app.post('/', (req, res) =>{
    myData.name = req.body.fullName;
    myData.email = req.body.email;
    myData.phoneNumber=req.body.phoneNumber;
    myData.age = req.body.age;
    console.log('from post ',myData)
})

app.listen(port,()=> {
    console.log("Connected to the server")
} )

async function onConnection(){
    const uri = 'mongodb://localhost:27017';
    const client = new db(uri);
    try{
        await client.connect();
        const result = await client.db("sampleDB").collection("sampleCollection").insertMany([myData]);
        if(result){
            console.log('from db',result);
        } else {
            console.log("error")
        }
    }finally{
        client.close();
    }
}

onConnection().then(
    console.log("Connection Successfull")
).catch(e=>{
    console.log(e)
})


