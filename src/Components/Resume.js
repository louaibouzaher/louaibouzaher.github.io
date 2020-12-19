import React from "react";
import Tools from "./Tools";

const Resume = () => {
  return (
    <div className="container flex flex-row flex-wrap justify-center">
      <div className="font-sfb m-1 text-2xl text-white">
        <span className="gradientText text-6xl"> What I Do? </span>
        Check this.
      </div>
      <div className="z-10 w-2/3 m-7 flex-none -ml-full rounded-3xl transform shadow-2xl bg-white -rotate-1 sm:-rotate-4">
        <div className="leading-8 font-sans text-xl font-bold text-left m-7 text-gray-900 tracking-wide">
          I am currently a Computer Science Student at the American University
          of Beirut. I love exploring new technologies and fields. My main focus
          for now is on Web Development and UI/Branding Design. I have worked as
          a{" "}
          <div className="inline border-gray-900 border-solid p-2 rounded-md">
            <span className="gradientText text-2xl">freelancer</span>
          </div>{" "}
          , you can find some of my works down below. I have also volunteered
          and contributed to community projects.
        </div>
      </div>
      <div className="hidden lg:block absolute z-0 mt-20 w-2/3 m-7 flex-none -ml-full rounded-3xl transform shadow-2xl bg-green-400 -rotate-1 sm:-rotate-3">
        <div className="font-sans text-xl font-bold text-left m-7 text-green-500 tracking-wide">
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <Tools />
      <div className="container flex justify-center font-sans text-xl text-left m-7 text-white tracking-wide">
        ⚡ Develop Web Apps Using HTML, CSS and JavaScript or MERN Stack.
        <br />
        ⚡ Design Visual Identities and User Interface. <br />
        ⚡ Deploy Websites/ RESTful APIs on Heroku. <br />
        ⚡ Code, Code & Code 👨‍💻
        <br />
      </div>
    </div>
  );
};

export default Resume;
