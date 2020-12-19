import React from "react";
import { AiFillGithub, AiFillBehanceCircle } from "react-icons/ai";
import { SiAdobexd } from "react-icons/si";

const Contribution = () => {
  const isGithub = true;
  const isBehance = true;
  const isXd = true;

  return (
    <div className="w-80 h-80 flex flex-col items-center p-5 m-10 rounded-2xl shadow-2xl grayGradientBackground">
      <div className="w-4/5 flex-grow-0 p-4 bg-gray-900 rounded-xl shadow-xl">
        <div className="text-white font-sfb text-xl">Name Of Project</div>
      </div>
      <p className="my-2 text-sm text-white font sfl font-bold text-left tracking-wider ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis
        consectetur. Magnam tempora voluptas totam blanditiis. Saepe repellendus
        enim porro possimus, aliquam illo in iure eius, omnis ipsa repudiandae
        molestiae.
      </p>
      <div className="flex flex-row justify-around mx-auto">
        <div className="p-2 mx-1 rounded-full bg-gray-900 flex flex-row justify-around">
          {isGithub && (
            <AiFillGithub
              className="text-white hover:text-green-400"
              size={35}
            />
          )}
        </div>
        <div className="p-2 mx-1 rounded-full bg-gray-900 flex flex-row justify-around">
          {isXd && (
            <AiFillBehanceCircle
              className="text-white hover:text-green-400"
              size={35}
            />
          )}
        </div>
        <div className="p-2 mx-1 rounded-full bg-gray-900 flex flex-row items-center">
          {isBehance && (
            <SiAdobexd className="text-white hover:text-green-400" size={30} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Contribution;
