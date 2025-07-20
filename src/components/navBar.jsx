import { useState, useEffect } from "react";
function NavBar() {
const [darkMode,setDarkMode] = useState(()=>{
 return localStorage.getItem("theme")==="dark"
});
useEffect(()=>{
  changeTheme();
},darkMode);
const changeTheme =()=>{
  

    if(darkMode){
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme","dark");
    }else{
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
    setDarkMode(!darkMode);

    
}
  // const [darkMode, setDarkMode] = useState(() => {
  //   return localStorage.getItem("theme") === "dark";
  // });

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     document.documentElement.classList.remove("light");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.add("light");
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

  // const changeTheme = () => {
  //   setDarkMode(prev => !prev); 
  // };
  return (
    <>
      <nav className="w-[100%] h-[60px] flex justify-between  fixed z-10 hover:shadow-2xl hover:shadow-cyan-400 transition-all ease-in-out duration-200 p-2">
        <div className="w-[50%] h-[60px]">
          <button className="w-12 h-12 flex items-center justify-center 
        rounded-full transition-all duration-300 
        border-2 border-gray-400 hover:bg-gray-700 text-white text-2xl hover:shadow-2xl hover:shadow-cyan-400"
        onClick={changeTheme}> {darkMode?"🌙":"☀️"}
        </button>
          
        </div>

        <div className="w-[50%] h-[60px] flex justify-around items-center lg:text-[20px] sm:text-[16px]md:text-[18px] text-[10px] uppercase">
          <a className="link-style" href="/">
            Home
          </a>
          <a className="link-style" href="#about-Me">
            About ME
          </a>
          <a className="link-style" href="#page3">
            Skills
          </a>
          <a className="link-style" href="#projects">
            Projects
          </a>
          <a className="link-style" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
