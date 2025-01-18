const VideoTitle = ({ title, overview }) => {

  return (
    <div className='absolute w-screen aspect-video  px-20 py-60 bg-gradient-to-tr from-black'>
      <h2 className='font-sans font-bold  font-5xl text-3xl mx-2 my-3 text-white uppercase '>{title}</h2>
      <p className='font-medium max-w-prose mx-2 my-3 text-white '>{overview}</p>
      <div className="my-6">
        <button className='font-medium p-4 m-2 rounded-md min-w-32 hover:bg-gray-200
        transition-all transiton duration-300 bg-slate-100'>
          ▶️Play</button>

        <button className=' p-4 m-2 font-medium rounded-md  hover:bg-gray-200
        transition-all transiton duration-300 bg-slate-100 min-w-32'>ℹ️ More Info</button>

      </div>

    </div>
  )
}

export default VideoTitle