import 'reflect-metadata';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyParser.json());

app.post('/api/transcode', (req, res) => {
    return res.status(200)
        .contentType('text/plain')
        .send('Ok!');
});

app.get('/api/health', (req, res) => {
    return res.sendStatus(200);
});

app.listen(34800, () => {
    console.log('started');
});