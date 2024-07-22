require('dotenv').config()
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    return res.json('API está Ok');
});

// const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => { console.log(`${process.env.START} port ${process.env.PORT}`); });

//app.listen(3000, () => { console.log(process.env.START); });