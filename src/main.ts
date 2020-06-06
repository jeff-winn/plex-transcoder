import 'reflect-metadata';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/transcode', (req, res) => {
    return res.status(200)
        .contentType('text/plain')
        .send('Ok!');
});

app.get('/api/test', (req, res) => {
    return res.send('success');
});

app.listen(34800, () => {
    console.log('started');
});