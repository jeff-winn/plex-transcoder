import ffmpeg from 'ffmpeg';

/** Identifies a mechanism which wraps the FFMPEG process. */
export interface FfmpegProcessWrapper {

};

export class FfmpegProcessWrapperImpl implements FfmpegProcessWrapper {    
    constructor(private filePath: string) {
    }

    public async start(): Promise<void> {
        let video = await new ffmpeg(this.filePath);
    }
};