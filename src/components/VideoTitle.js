import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video bg-gradient-to-r from-black/60 pt-[20%] px-6 md:px-24 absolute text-white'>
    <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
    <p className='hidden md:inline-block py-6 w-1/4 text-lg'>{overview}</p>
    <div>
        <button className='bg-white text-black font-bold px-3 md:px-12 py-1 md:py-4 text-xl rounded-lg hover:bg-opacity-70'>Play</button>
        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white px-12 p-4 text-xl bg-opacity-50 rounded-lg'>More</button>
    </div>
</div>
  )
}

export default VideoTitle