import React from "react";
import Esi from "../Assets/esi.png";
import Aub from "../Assets/aub.png";
const Education = () => {
  return (
    <div className=" container w-full flex flex-col items-center">
      <div className="mt-20 mb-10 p-10 container w-4/5 bg-white rounded-xl shadow-2xl">
        <div className="flex flex-row items-baseline">
          <span className="font-sfb text-6xl text-left blueGradientText m-1">
            {" "}
            Education{" "}
          </span>
          <span className="flex font-sfb text-xl text-left blueGradientText">
            You know, Academics!
          </span>{" "}
          <span className="flex"> 🎓 </span>
        </div>
        <div className="ml-20 flex flex-col my-10 -around">
          <div className="my-5 flex flex-row">
            <div className="container w-20 rounded-full shadow-xl p-4 border-gray-600 border-solid">
              <img src={Aub} alt="Esi" className="w-full" />
            </div>
            <div className="ml-10 flex flex-col items-start">
              <div className="blueGradientText font-sfb text-xl text-left">
                The American University of Beirut
              </div>
              <div className="tracking-wide">2020 - 2023 </div>
              <div className="tracking-wide">Computer Science </div>
            </div>
          </div>
          <div className="my-5 flex flex-row">
            <div className="container w-20 rounded-full shadow-xl p-4 border-gray-600 border-solid hover:animate-bounce">
              <img src={Esi} alt="Esi" className="w-full" />
            </div>
            <div className="ml-10 flex flex-col items-start">
              <div className="blueGradientText font-sfb text-xl text-left">
                The Higher National School of Computer Science
              </div>
              <div className="tracking-wide">2019 - 2020 </div>
              <div className="tracking-wide">Computer Science Engineering</div>
            </div>
          </div>
          <div className="my-5 flex flex-row">
            <div className="container w-20 flex justify-center items-center rounded-full shadow-xl p-4 border-gray-600 border-solid">
              404!
            </div>
            <div className="ml-10 flex flex-col items-start">
              <div className="blueGradientText font-sfb text-xl text-left">
                Baccalaureate - High School Diploma
              </div>
              <div className="tracking-wide">2016 - 2019 </div>
              <div className="tracking-wide">Mathematics</div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-sfb text-xl self-end gradientText">
        and the school of Life!
      </div>
    </div>
  );
};

export default Education;
