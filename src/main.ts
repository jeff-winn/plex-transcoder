import 'reflect-metadata';
import express from 'express';

const app = express();

app.post('/api/transcode', (req, res) => {
    return res.send('Ok!');
});

app.get('/api/test', (req, res) => {
    return res.send('success');
});

app.listen(34800, () => {
    console.log('started');
});