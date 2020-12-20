import React from "react";

const Awards = () => {
  return (
    <div className="w-full my-5 sm:my-14">
      <div className="flex flex-row flex-wrap sm:flex-nowrap items-baseline justify-center">
        <span className="font-sfb text-4xl sm:text-6xl blueGradientTextEdited m-1">
          {" "}
          Awards{" "}
        </span>
        <span className="inline">🏆 </span>
      </div>
      <div className="p-10 sm:p-0 flex flex-col justify-around items-center">
        <div className="container flex justify-center font-sans text-xl text-left m-7 text-white tracking-wide">
          🥇 MEPI Tomorrow's Leaders Program Scholar. <br /> <br />
          🏆 First Prize Winning Team of HackIN The Lock Club Scientifique de
          l'ESI Hackathon. <br /> <br />
          🎖️ Second Prize Winning Team of Fast&Hack GDG Algiers Hackathon.{" "}
          <br />{" "}
        </div>
      </div>
    </div>
  );
};

export default Awards;
