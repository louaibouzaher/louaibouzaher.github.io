import React from "react";
import SocialMedia from "./SocialMedia";
import PersonalPicture from "../Assets/louaibouzaherPic.jpg";
const Hero = () => {
  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap justify-around items-center container h-screen">
      <div className="order-2 sm:order-1 flex-2 flex flex-col justify-center items-start p-10 mx-10 mt-0 sm:mt-10">
        <div className="font-sfb text-4xl m-1 text-white text-left ">
          Hey there, <br/> I'm <span className='gradientText'> Louai Bouzaher! </span>
        </div>
        <div className="font-sans text-xl font-bold text-left m-1 text-white tracking-wide">
          Computer Science Student, UI/UX Enthusiast and Web Developer. <br />{" "}
          You can know more about me on this page.
        </div>
        <div className="container my-3">
          <SocialMedia />
        </div>
        <button className="hidden gradientBorder font-sans text-xl border-gray-900  border-solid my-5 mx-3 shadow-2xl rounded-lg font-bold tracking-wide h-12 w-40 align-middle bg-gray-700 bg-opacity-5">Contact Me</button>
      </div>
      <img src={PersonalPicture} alt='louaiPic' className="mt-10 sm:mt-0 h-1/4 sm:h-2/3 order-1 sm:order-2 shadow-2xl  xl:block rounded-full lg:mr-10 image" />
    
    </div>
  );
};

export default Hero;
 