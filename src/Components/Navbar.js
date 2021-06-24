import React from "react";

const Navbar = () => {
  return (
    <div
      className="w-full flex flex-row justify-between items-baseline"
      style={{ marginTop: -40 }}
    >
      <div className="mx-10 text-4xl mt-20 mb-6 sm:mt-0 sm:mb-0 flex-grow sm:flex-grow-0">
        {" "}
        👓{" "} <br/>
        {/* <span className='text-white text-sm sm:text-base'>Website in progress </span> */}
      </div>
      <div className="hidden sm:flex flex-row px-6">
        <a href="#resume" className="px-3 text-white hover:text-green-400">
          Resume
        </a>
        <a href="#education" className="px-3 text-white hover:text-green-400">
          Education
        </a>
        <a href="#projects" className="px-3 text-white hover:text-green-400">
          Projects
        </a>
        <a href="#community" className="px-3 text-white hover:text-green-400">
          Community
        </a>
      </div>
    </div>
  );
};

export default Navbar;
