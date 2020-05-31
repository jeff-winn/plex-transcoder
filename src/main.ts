function main(): void {
    console.log("Started!");
}

import express from 'express';

const app = express();

app.get('/api/transcode', (req, res) => {
    return res.send('Ok!');
});

app.listen(8080, () => {
    console.log('started');
});