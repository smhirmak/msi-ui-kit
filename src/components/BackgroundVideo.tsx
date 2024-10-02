import React from 'react';

interface BackgroundVideoProps {
  videoSrc: string;
  posterImg?: string;
  className?: string;
  [key: string]: any; // Diğer props için
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoSrc, posterImg, className, ...props }) => (
  <div className={`relative overflow-hidden ${className}`} {...props}>
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
      poster={posterImg}
    >
      <source src={`${videoSrc}.webm`} type="video/webm" />
      <source src={`${videoSrc}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default BackgroundVideo;
