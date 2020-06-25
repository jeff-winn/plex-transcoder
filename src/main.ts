import 'reflect-metadata';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { TranscodeService } from './transcoding/services/transcode-service';
import { TranscodeRequestContext } from './transcoding/model/transcode-request-context';
import { TranscodeRequest } from './transcoding/model/transcode-request';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/transcode', async (req, res) => {
    let context = new TranscodeRequestContext();
    context.SessionId = req.header('x-plex-session-id');
    context.RequestId = req.header('x-request-id');
    context.Request = req.body as TranscodeRequest;

    let service = new TranscodeService();
    await service.transcode(context);
});

app.get('/api/ping', (req, res) => {
    return res.send('Ok');
});

app.listen(34800, () => {
    console.log('Started');
});