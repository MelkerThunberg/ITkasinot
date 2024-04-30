import express from "express";
import cors from 'cors';
import router from './routes/router.js';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;


const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

const corseOptions = {
    origin: '*',
    Credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corseOptions));
app.use('/', router)

const port = 4000
// eslint-disable-next-line no-unused-vars
const server = app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`)
})

