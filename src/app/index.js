const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')
const adminAccount = require('./routes/login/admin-account');

const app = express();

const router = require('./routes/router');


class App {
    static init(){

        this.port = 4200;
        this.dbName = 'PersonalWebstie';
        this.url = `mongodb://127.0.0.1:2717/${this.dbName}`;
        
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(router);

        
        let server;
        const client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true});

        mongoose.connect(`mongodb://127.0.0.1:2717/${this.dbName}`, {useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
            console.log('Succesfuly connected...');

            server = app.listen(this.port, () => {
                console.log(`Server running on port: ${this.port}`);
            });



        }).catch(err => {  
            console.log('Failed to connect to the database...\nThe app will exit now...');
            console.log(err);
        });
    }
}

App.init();


