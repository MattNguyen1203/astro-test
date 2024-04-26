'use client'
import ReactPlayer from 'react-player'

const Video = ({type, url, className, options}) => {
  const Comp = type === 'url' || type === 'file' ? ReactPlayer : iframe
  return (
    <Comp
      className={className}
      controls={options?.isControl}
      playing={options?.isPlaying}
      width={options?.width}
      height={options?.height}
      url={
        type === 'url' || type === 'file'
          ? url
          : `https://www.tiktok.com/embed/v2/${url}`
      }
      allowFullScreen={options?.allowfullscreen}
      frameBorder='0'
    />
  )
}

export default Video
