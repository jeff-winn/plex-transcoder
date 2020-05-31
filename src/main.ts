import express from 'express';

const app = express();

app.post('/api/transcode', (req, res) => {
    return res.send('Ok!');
});

app.listen(8080, () => {
    console.log('started');
});