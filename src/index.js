const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const app = express();

const port = 5000;
const dbName = 'testDataBaseBoi';
const url = `mongodb://127.0.0.1:2717/${dbName}`;

app.use(cors());

app.get('/', (req, res, next) => {
    console.log('got the reqest');
    console.log(req);
    res.send('nice');
});

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

client.connect(err => {
    console.log('here trying to connect');
    if(err){
        console.log('error yo');
        console.dir(err);
    } else {
        console.log('no err yo');
        const db = client.db(dbName);
        db.collection('testcoll2').insertOne({iHope2: 'it works23'});
    }
});

const server = app.listen(port, () => {
    console.log(`server running on ${port}`);
});