import React from "react";
import {
  DiReact,
  DiHeroku,
  DiMongodb,
  DiMysql,
  DiLinux,
  DiPython,
} from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiNodeDotJs,
  SiJavascript,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFirebase,
} from "react-icons/si";
const Tools = () => {
  return (
    <div className="w-2/3 flex flex-row flex-wrap justify-center items-center">
      <AiFillHtml5 className="mt-2 text-white hover:text-green-400" size={50} />
      <SiCss3 className="mt-2 text-white hover:text-green-400" size={42} />
      <SiJavascript
        className=" mt-2 ml-2 text-white hover:text-green-400"
        size={40}
      />
      <DiReact className="mt-2 text-white hover:text-green-400" size={60} />
      <SiNodeDotJs className="mt-2 text-white hover:text-green-400" size={46} />
      <DiMongodb className="mt-2 text-white hover:text-green-400" size={46} />
      <DiMysql className="mt-2 text-white hover:text-green-400" size={48} />
      <DiHeroku className="mt-2 text-white hover:text-green-400" size={50} />
      <SiFirebase className="mt-2 text-white hover:text-green-400" size={45} />
      <DiLinux className="mt-2 text-white hover:text-green-400" size={45} />
      <DiPython className=" mt-2 text-white hover:text-green-400" size={53} />
      <SiAdobeillustrator
        className="ml-1 mt-2 text-white hover:text-green-400"
        size={43}
      />
      <SiAdobephotoshop
        className="ml-2 mt-2 text-white hover:text-green-400"
        size={43}
      />
      <SiAdobexd
        className=" ml-2 mt-2 text-white hover:text-green-400"
        size={43}
      />
    </div>
  );
};

export default Tools;
