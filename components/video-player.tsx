"use client"

import { useState, useEffect } from "react"
import ReactPlayer from "react-player/lazy"
import { useMobile } from "@/hooks/use-mobile"

interface VideoPlayerProps {
  url: string
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const [hasWindow, setHasWindow] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, [])

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-sm">
      {hasWindow && (
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls
          light={true}
          pip={true}
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      )}
    </div>
  )
}
