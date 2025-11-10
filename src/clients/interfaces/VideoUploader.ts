export interface VideoUploaderClient {
    uploadVideo(
        videoFilePath: string, 
        title: string, 
        description: string, 
        thumbnailFilePath?: string,
        tags?: Array<string>,
        scheduleAt?: Date
    ): Promise<{ url: string }>;
}