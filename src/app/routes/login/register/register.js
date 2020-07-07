const bcrypt = require('bcrypt');
const AdminAccModel = require('../admin-account');

const saltRounds = 10;

const register = (req, res) => {
    let data = req.body;
    console.log(data);

    bcrypt.hash(data.password, saltRounds, function(err, hash) {
        let newAcc = new AdminAccModel({
            username: data.username,
            password: hash
        })
        newAcc.save();
    });

}

module.exports = {
    register: register
}