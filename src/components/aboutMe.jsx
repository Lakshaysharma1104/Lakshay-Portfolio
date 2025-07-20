import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// import styles from "../css/about.module.css"
function AboutMe() {
  useGSAP(() => {
    gsap.from("#about-Me", {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2  #about-Me",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.from(" #about-intro", {
      opacity: 0,
      x: 30,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2  #about-intro",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.from("#about-focus", {
      opacity: 0,
      x: 30,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2 #about-focus",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.from(" #about-extra", {
      opacity: 0,
      x: 30,
      duration: 1,
      scrollTrigger: {
        trigger: "#about-extra",
        scroller: "body",
        markers: false,
        start: "top 85%",
        end: "top 80%",
        scrub: true,
      },
    });
    gsap.from(".p-scroll", {
      opacity: 0,
      x: -30,
      duration: 2,
      delay: 1,
      stagger: 7,
      scrollTrigger: {
        trigger: ".p-scroll",
        scroller: "body",
        markers: false,
        start: "top 85%",
        end: "top 80%",
        scrub: 3,
      },
    });
  });

  return (
    <>
      <div
        className="h-[calc(100vh-60px)] w-full   relative  overflow-x-hidden "
        id="page2"
      >
        <h1
          className="  top-9 font-bold text-transparent text-center bg-clip-text  text-6xl p-5 "
          id="about-Me"
        >
          About Me
        </h1>
        <div className="relative w-full flex justify-center text-center p-size">
          <h2
            id="about-intro"
            className="text-3xl  absolute p-5 top-[30px] font-semibold about-bg mb-2 "
          >
            Introduction
          </h2>
          <p className=" absolute top-[90px] pl-6 mb-2 p-scroll">
            I'm Lakshay Sharma, a BTech Computer Science Engineering student at
            JMIT. My journey into tech started with curiosity — how do websites
            work? That led me into frontend development, where I found a natural
            passion for building user-focused digital experiences.
          </p>

          <h2
            id="about-focus"
            className="text-3xl  absolute p-5 top-[155px] font-semibold about-bg"
          >
            What I'm Focused On
          </h2>
          <p className=" absolute top-[215px] pl-6 p-scroll">
            Right now, I'm focused on building real-world frontend projects
            using React and Tailwind. I've developed applications like a Myntra
            clone, a Coca-Cola landing page, and a working calculator. I'm also
            learning backend with Spring Boot to become a full-stack developer.
          </p>

          <h2
            id="about-extra"
            className="text-3xl  absolute p-5 top-[275px] font-semibold about-bg"
          >
            Beyond Tech (Co-curricular)
          </h2>
          <p className=" absolute top-[345px] pl-6 p-scroll">
            Apart from coding, I've taken part in team-based events like MUNs
            and Enchanted, which helped me grow soft skills like communication,
            planning, and coordination. I'm also passionate about chess,
            fitness, and staying mentally disciplined through spirituality.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
