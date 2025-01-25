import { useState } from 'react';
import useTrailer from '../customHooks/useTrailer';
import { useSelector } from 'react-redux';

const VideoBackGround = ({ movieId }) => {
  
  if(!movieId) return
  useTrailer(movieId);
  const trailerVideo = useSelector((state) => state.TopRatedMovie?.MovieTrailer)
  
  return (

    <div className='w-screen aspect-video'>
      <iframe className='w-screen h-full' src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackGround