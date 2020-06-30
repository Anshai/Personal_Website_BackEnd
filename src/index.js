const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const app = express();


class App {
    static init(){

        this.port = 4200;
        this.dbName = 'testDataBaseBoi';
        this.url = `mongodb://127.0.0.1:2717/${this.dbName}`;
        
        app.use(cors());
        
        let server;
        const client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true});

        client.connect(err => {
            console.log('Connecting to the database...');
            if(err){
                console.log('Failed to connect to the database...\nThe app will exit now...');
                console.dir(err);
            } else {
                console.log('Succesfuly connected...');
                const db_ref = client.db(this.dbName);
        
                server = app.listen(this.port, () => {
                    console.log(`Server running on port: ${this.port}`);
                });
            }
        });
    }
}

App.init();


