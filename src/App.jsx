import NavBar from "./components/navBar";
import Hero from "./components/Hero";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/next"
function App(){
  return(
    <>
    <NavBar />
    <Hero></Hero>
    <AboutMe />
    <Skills />
    <Projects />
   <Contact />
      <Analytics />
    </>
  )
}

export default App;
