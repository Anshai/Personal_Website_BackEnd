const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./routes/routes');


class App {
    static init(){

        this.port = 4200;
        this.dbName = 'PersonalWebstie';
        this.url = `mongodb://127.0.0.1:2717/${this.dbName}`;
        
        app.use(cors());
        app.use(router);

        
        let server;
        const client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true});

        client.connect(err => {
            console.log('Connecting to the database...');
            if(err){
                console.log('Failed to connect to the database...\nThe app will exit now...');
                console.dir(err);
            } else {
                console.log('Succesfuly connected...');
                const db= client.db(this.dbName);
                const adminColl = db.collection('AdminUsers');

                adminColl.findOne({}, (err, result) => {
                    if(result === null) {
                        adminColl.insertOne({username: 'admin', pasword: 'admin'});
                    }
                });

                server = app.listen(this.port, () => {
                    console.log(`Server running on port: ${this.port}`);
                });
            }
        });
    }
}

App.init();


