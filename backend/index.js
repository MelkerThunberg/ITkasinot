const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corseOptions = {
    origin: '*',
    Credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corseOptions));
app.use('/', router)

const port = 4000
const server = app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`)
})