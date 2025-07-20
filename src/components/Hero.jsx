
function Hero(){
    return(
       <>
       <div className="w-[100%] h-[100vh] overflow-x-hidden ">
        <div className='w-full h-screen flex justify-center items-center
         relative '>
            <div className=' bg-white size-60 overfow:hidden
        border-0 rounded-full profile-pic p-2 m-2 sadow:md
          transition-all ease-in-out duration-200'></div>
         <h2 className="text-center  absolute bottom-43  text-3xl p-2 m-2">Hi! I am Lakshay Sharma</h2>
         <p className=" text-center absolute bottom-27 p-2 m-2
         ">A Computer Science student with a passion for backend development, clean code, and building real-world projects.
</p>
        </div>
       </div>
       </>
    )
}

export default Hero;