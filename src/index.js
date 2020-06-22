const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
    res.send("lmao nice");
});

const server = app.listen(3000, () => {

});