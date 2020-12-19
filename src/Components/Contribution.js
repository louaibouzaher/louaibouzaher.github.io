import React from "react";
import { AiFillGithub, AiFillBehanceCircle } from "react-icons/ai";
import { SiAdobexd } from "react-icons/si";

const Contribution = ({c}) => {
  const {
    title,
    description,
    isGithub,
    isBehance,
    isXd,
    linkGithub,
    linkXd,
    linkBehance,
  } = c
  return (
    <div className="py-10 w-4/5 sm:w-1/3 flex-shrink-0 flex flex-col items-center p-5 m-10 rounded-2xl shadow-xl grayGradientBackground">
      <div className="p-4 bg-gray-900 rounded-xl shadow-xl">
        <div className="text-white font-sfb text-xl">{title}</div>
      </div>
      <p className="my-2 flex-grow w-full text-sm text-white font sfl font-bold text-left tracking-wider ">
       {description}
      </p>
      <div className="cursor-pointer flex flex-row justify-around mx-auto">
          {isGithub && (
        <div className="p-2 mx-1 rounded-full bg-gray-900 flex flex-row justify-around">
            <AiFillGithub
              className="text-white hover:text-green-400"
              size={35}
            />
        </div>
          )}
          {isBehance && (
        <div className="cursor-pointer p-2 mx-1 rounded-full bg-gray-900 flex flex-row justify-around">
            <AiFillBehanceCircle
              className="text-white hover:text-green-400"
              size={35}
            />
        </div>
          )}
          {isXd && (
        <div className="cursor-pointer p-2 mx-1 rounded-full bg-gray-900 flex flex-row items-center">
            <SiAdobexd className="text-white hover:text-green-400" size={30} />
        </div>
          )}
      </div>
    </div>
  );
};
export default Contribution;
