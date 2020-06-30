import { TranscodeRequestContext } from "./transcode-request-context";

export class TranscodeService {
    public transcode(context: TranscodeRequestContext): Promise<void> {
        return new Promise<void>(() => {

        });
    }
};