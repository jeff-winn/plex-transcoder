import 'reflect-metadata';
import express from 'express';

const app = express();

app.post('/api/transcode', (req, res) => {
    return res.send('Ok!');
});

app.listen(34800, () => {
    console.log('started');
});