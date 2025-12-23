import { AbsoluteFill, staticFile, useVideoConfig } from "remotion"
import { Gif } from "@remotion/gif"
import z from "zod"
import { Video } from '@remotion/media'

import { videoSchema } from "../config/types"

export const Background: React.FC<z.infer<typeof videoSchema>['background']> = ({ color, video, gif, seed }) => {
    const { fps, width, height } = useVideoConfig()
    
    if (video?.src) {
        return (
            <Video
                muted
                loop
                src={staticFile(video.src)} 
                trimBefore={(video.initTime || 0) * fps}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        )
    }

    if (gif?.src) {
        return (
            <AbsoluteFill>
                <Gif
                    src={staticFile(gif.src)}
                    fit="cover"
                    width={width}
                    height={height}
                    loopBehavior="loop"
                />
                <AbsoluteFill
                    className="pointer-events-none bg-stone-950/50"
                    style={{
                    mixBlendMode: "multiply",
                    }}
                />
            </AbsoluteFill>
        )
    }

    return (
        <AbsoluteFill style={{ backgroundColor: color }} />
      )
}