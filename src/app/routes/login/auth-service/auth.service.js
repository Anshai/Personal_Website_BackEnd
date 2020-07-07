const bcrypt = require('bcrypt');
const e = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const adminAccount = require('../admin-account');

const login = (req, res) => {
    const userData = req.body;
    console.log('entered the login function');
    adminAccount.findOne({username: userData.username}, function(err, user){
        if(err){
            console.log(err);
        } else {
            bcrypt.compare(userData.password, user.password, (err, validPassword) => {
                if(!err){
                    console.log('not error');
                    if(validPassword){
                        res.send(JSON.stringify({validPassword: true}));
                    }
                } else {
                    console.log(err);
                }
            });
        }
    });
}

module.exports = {
    login: login
}