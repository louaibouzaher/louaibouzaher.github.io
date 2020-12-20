import React, { useRef } from "react";
import "./App.css";
import "./index.css";
import Hero from "./Components/Hero";
import Resume from "./Components/Resume";
import Education from "./Components/Education";
import Conributions from "./Components/Conributions";
import Awards from "./Components/Awards";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";
import { BsArrowDownShort} from "react-icons/bs";
import Navbar from "./Components/Navbar";
function App() {
  const linkRef = useRef(null);
  const HandleClick = () => {
    if (linkRef.current.hash == "#contact") {
      linkRef.current.classList.remove('transform', '-rotate-180');
      linkRef.current.href = "#hero";
    } else {
      linkRef.current.classList.add('transform', '-rotate-180');
      linkRef.current.href = "#contact";
    }
  };
  return (
    <div id='hero' className="App m-0 w-full flex flex-col items-center">
      <a
        ref={linkRef}
        href="#contact"
        className="downArrow "
        onClick={HandleClick}
      >
        <BsArrowDownShort 
          className=" hidden lg:block text-green-400 animate-bounce"
          size={60}
        />
      </a>
      <Navbar />
      <Hero />
      <Resume />
      <Education />
      <Conributions />
      <Experiences />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;
