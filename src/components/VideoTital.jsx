

export const VideoTital = ({original_title,overview}) => {
  return (
     <>
      <div className="pt-[20%] px-24 absolute w-screen aspect-video text-white bg-linear-to-l to-black">
        <h1 className="text-6xl font-bold">{original_title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
   
    <div>
        <button className="m-4 p-4 bg-white text-black rounded-lg px-12 hover:bg-white/70">▶Play</button>
        <button className="mx-2 m-4 p-4 bg-white text-black rounded-lg px-12">More Info</button>
    </div>
     </div>
     </>
  )
}
