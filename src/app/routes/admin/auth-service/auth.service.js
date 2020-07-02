const login = (req, res) => {
    console.log('login route activated');
    res.send('login route activated BOI');
}

module.exports = {
    login: login
}