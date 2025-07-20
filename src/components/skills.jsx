import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import htmlLogo from "../assets/html.webp";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import javaLogo from "../assets/java.png";
function Skills() {
  // useGSAP(()=>{
  //    const tl =gsap.timeline();
  //    tl.fromTo("#img-html",
  //       {scale:0},{
  //          scale:1,
  //          duration:2,
  //          scrollTrigger:{
  //             scroller:"body",
  //             trigger:"#page3",
  //             // markers:true,
  //             start:"top 40%",
  //             end:"top 30%",
  //             scrub:2,
  //          }
  //       }
  //    ),">"
  //       tl.to("#img-html",{
  //           transform:"translateX(-150vw)",
  //          //  transform:"translateY(1/2)",

  //           scrollTrigger:{
  //             scroller:"body",
  //             trigger:"#page3",
  //             // markers:true,
  //             start:"top 9%",
  //             end:"top -100%",
  //             scrub:2,
  //             // pin:true
  //           }
  //       }),">"
  //       tl.to("#img-css",{
  //          transform:"translateX(-170vw)",
  //          scrollTrigger:{
  //             scroller:"body",
  //             trigger:"#page3",
  //             // markers:true,
  //             start:"top 9%",
  //             end:"top -100%",
  //             scrub:2,
  //             opacity:0,
  //             // pin:true,
  //          }
  //       }),">"
  //       tl.to("#img-js",{
  //          transform:"translateX(-190vw)",
  //          scrollTrigger:{
  //             scroller:"body",
  //             trigger:"#page3",
  //             // markers:true,
  //             start:"top 9%",
  //             end:"top -100%",
  //             scrub:2,
  //             // pin:true,
  //              opacity:0,
  //          }
  //       }),">"
  //       tl.to("#img-react",{
  //          transform:"translateX(-210vw)",
  //          // delay:2,
  //          scrollTrigger:{
  //             // scroller:"body",
  //             trigger:"#page3",
  //             // markers:true,
  //             start:"top 5%",
  //             end:"top -100%",
  //             scrub:2,
  //              opacity:0,
  //             // pin:true,
  //          }
  //       }),">"
  //       tl.to("#img-java",{
  //          transform:"translateX(-230vw)",
  //          // dealy:3,
  //          scrollTrigger:{
  //             scroller:"body",
  //             trigger:"#page3",
  //             markers:true,
  //             start:"top 9%",
  //             end:"top -200%",
  //             scrub:2,
  //             pin:true,
  //          }
  //       })

  // })
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#page3",
          start: "top top",
          end: "+=4000", // Long scroll
          scrub: 2,
          pin: true,
          // markers: true,
        },
      });

      tl.fromTo("#img-html", { scale: 0 }, { scale: 1, duration: 1 }, 0)
        .to("#img-html", { x: "-150vw" }, ">")
        .fromTo("#img-css", { x: "100vw" }, { x: "-170vw", }, ">")
        .fromTo("#img-js", { x: "150vw" }, { x: "-190vw", }, ">")
        .fromTo("#img-react", { x: "200vw" }, { x: "-210vw", }, ">")
        .fromTo("#img-java", { x: "260vw" }, { x: "-230vw", }, ">");
    });

    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#page3",
          start: "top top",
          end: "+=2000",
          scrub: 3,
          pin: true,
          // markers: true,
        },
      });

      tl.fromTo("#img-html", { scale: 0 }, { scale: 1, duration: 0.5 }, 0)
        .to("#img-html", { x: "-120vw" }, ">")
        .fromTo("#img-css", { x: "100vw" }, { x: "-140vw" }, ">")
        .fromTo("#img-js", { x: "150vw" }, { x: "-160vw" }, ">")
        .fromTo("#img-react", { x: "200vw" }, { x: "-180vw" }, ">")
        .fromTo("#img-java", { x: "260vw" }, { x: "-200vw" }, ">");
    });

    return () => mm.revert(); // cleanup
  }, []);

  return (
    <>
      <div
        className="h-[calc(100vh-60px)] w-full bg-gradient-to-b from-gray-900 via-gray-500 to-gray-900 overflow-x-hidden"
        id="page3"
      >
        <div className="w-full flex justify-center">
          <h1 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-6xl p-5 font-bold">
            Tech Stack
          </h1>
        </div>
        <div className="relative h-[400px] bg-transparent overflow-hidden flex items-center">
          {/* HTML logo - Centered */}
          <img
            src={htmlLogo}
            id="img-html"
            className="absolute left-[50%]  transform -translate-x-1/2  size-50 sm:size-60 md:size-80 lg:size-100"
            alt="html"
          />

          {/* Other logos - Hidden to the right side of screen */}
          <img
            src={cssLogo}
            id="img-css"
            className="absolute  left-[100%]  size-40 sm:size-60 md:size-80 lg:size-90"
            alt="css"
          />
          <img
            src={jsLogo}
            id="img-js"
            className="absolute  left-[150%] size-50 sm:size-60 md:size-80 lg:size-100"
            alt="js"
          />
          <img
            src={reactLogo}
            id="img-react"
            className="absolute  left-[200%] size-50 sm:size-60 md:size-80 lg:size-100"
            alt="react"
          />
          <img
            src={javaLogo}
            id="img-java"
            className="absolute  left-[260%] size-40 sm:size-60 md:size-80 lg:size-90"
            alt="java"
          />
        </div>
      </div>
      {/* <div className='h-screen w-full bg-black'></div> */}
    </>
  );
}
export default Skills;
