import React from "react";
import SocialMedia from "./SocialMedia";
import PersonalPicture from "../Assets/louaibouzaherPic.jpg";
const Hero = () => {
  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap justify-around items-center container h-screen">
      <div className=" flex-grow container flex flex-col justify-center items-start p-10 mx-10 mt-10">
        <div className="font-sfb text-4xl m-1 text-white ">
          Hey there, I'm <span className='gradientText'> Louai Bouzaher! </span>
        </div>
        <div className="font-sans text-xl font-bold text-left m-1 text-white tracking-wide">
          Computer Science Student, UI/UX Enthusiast and Web Developer. <br />{" "}
          You can know more about me on this page.
        </div>
        <div className="container my-3">
          <SocialMedia />
        </div>
        <button className="gradientTextHover gradientBorder font-sans text-xl border-gray-900 hover:border-green-400 text-gray-500 border-solid my-5 mx-3 shadow-2xl rounded-lg font-bold tracking-wide h-12 w-40 align-middle bg-gray-900">Contact Me</button>
      </div>
      <img src={PersonalPicture} alt='louaiPic' className="h-1/2 shadow-2xl  rounded-full lg:mr-10 motion-safe:animate-spin" />
    
    </div>
  );
};

export default Hero;
 