import myntra from "../assets/myntra.png";
import golf from "../assets/golf.png";
import cococola from "../assets/cococola.png";
import bubble from "../assets/bubble.png";
function Projects() {
  return (
    <>
      <div className="h-[calc(100vh-60px)] w-full " id="projects">
        <div className="w-full relative flex justify-center items-center ">
          <h1 className="text-3xl sm:text4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text  absolute top-[50vh] my-Projects">
            My Projects
          </h1>
        </div>
        <div className="w-full flex justify-around relative ">
          <div
            id="myntra"
            className="h-40  w-[20%] absolute top-25 left-10
          border-0 rounded-2xl  flex items-center justify-center  overflow-hidden"
          >
            <h3 className=" project-written">Myntra project</h3>
            <img className="card" src={myntra} alt="myntra" />
          </div>
          <div
            id="golf"
            className="h-40  w-[20%] absolute top-25 right-10 
          border-0 rounded-2xl overflow-hidden flex items-center justify-center "
          >
            <h3 className=" project-written">Familygolf project</h3>
            <img className="card" src={golf} alt="myntra" />
          </div>
          <div
            id="coco"
            className="h-40  w-[20%] absolute top-120 left-10
          border-0 rounded-2xl overflow-hidden flex items-center justify-center "
          >
            <h3 className=" project-written">coco-cola project</h3>
            <img
              className="card"
              src={cococola}
              alt="myntra"
            />
          </div>
          <div
            id="bubble"
            className="h-40  w-[20%] absolute top-120 right-10 
          border-0 rounded-2xl overflow-hidden flex items-center justify-center "
          >
            <h3 className=" project-written">bubble game</h3>
            <img className="card" src={bubble} alt="myntra" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
