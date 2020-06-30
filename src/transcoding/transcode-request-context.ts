import Request, { response } from 'express';
import { TranscodeRequest } from './transcode-request';

/** Provides contextual information for a transcode request. */
export class TranscodeRequestContext {
    public SessionId: string | undefined;
    public RequestId: string | undefined;
    public Request: TranscodeRequest | undefined;
};