import React from "react";
import Contribution from "./Contribution";

const Conributions = () => {
  return (
    <div className="my-10 flex flex-col w-full h-screen gradientBackground">
      <div className="self-end m-6 ">
        <div className="font-sfb text-6xl blueGradientText">
          {" "}
          Projects & Contributions{" "}
        </div>
        <span className="flex font-sfb text-xl text-left blueGradientText">
          Some code here and there, and design too!
        </span>{" "}
      </div>
      <div className='flex flex-row'>
        <Contribution />
      </div>
    </div>
  );
};

export default Conributions;
