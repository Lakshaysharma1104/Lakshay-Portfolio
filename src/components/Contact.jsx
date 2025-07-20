import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Contact() {

  return (
    <>
      <div
        className="overflow-x-hidden"
        id="contact"
      >
        <div className="w-full flex justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r  absolute top-auto contact-heading">
            Contact Me.......
          </h1>
        </div>
        <div className="h-[calc(100vh-60px)] w-full flex justify-around items-center transition-all duration-1000 ease-in-out relative">
          <a href="mailto:lakshay1223093@jmit.ac.in" target="_blank">
            <img className="contact" src="../src/assets/mail.png" alt="mail" />
          </a>
          <a
            href="https://www.linkedin.com/in/lakshay-sharma-138184306/"
            target="_blank"
          >
            <img
              className="contact"
              src="../src/assets/linkedin.png"
              alt="linkedin-image"
            />
          </a>
          <a href="https://github.com/Lakshaysharma1104" target="_blank">
            <img
              className="contact"
              src="../src/assets/github.png"
              alt="github-image"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
