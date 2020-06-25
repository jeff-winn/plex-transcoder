import { TranscodeRequestContext } from "../model/transcode-request-context";

export class TranscodeService {
    public transcode(context: TranscodeRequestContext): Promise<void> {
        return new Promise<void>(() => {

        });
    }
};