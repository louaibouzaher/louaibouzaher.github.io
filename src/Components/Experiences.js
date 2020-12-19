import React from "react";
import Cse from "../Assets/cse.png";
import Gdg from "../Assets/gdg.png";
import Ted from "../Assets/ted.png";
const Experiences = () => {
  const Experiences = [
    {
      title: "GDG Algiers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto ea accusantium tenetur non sed voluptatibus eveniet, consequatur obcaecati autem veritatis molestiae ut error impedit dolorem adipisci provident magni quasi",
      position: "Design Co-Manager",
      from: "2020",
      to: "2021",
      logo: Gdg,
    },
    {
      title: "Club Scientifique de l'ESI",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto ea accusantium tenetur non sed voluptatibus eveniet, consequatur obcaecati autem veritatis molestiae ut error impedit dolorem adipisci provident magni quasi",
      position: "HR Manager Assistant",
      from: "2020",
      to: "2021",
      logo: Cse,
    },
    {
      title: "TED-Ed Club Biskra",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto ea accusantium tenetur non sed voluptatibus eveniet, consequatur obcaecati autem veritatis molestiae ut error impedit dolorem adipisci provident magni quasi",
      position: "Club Leader",
      from: "2018",
      to: "2019",
      logo: Ted,
    },
  ];
  return (
    <div className="w-full ">
      <div className="flex flex-row flex-wrap sm:flex-nowrap items-baseline justify-center">
        <span className="font-sfb text-4xl sm:text-6xl text-white underlineGreen">
          Experiences
        </span>
        <span className="inline mx-2 font-sans text-xl text-left text-white tracking-wide">
          and Adventures 👾
        </span>
      </div>
      <div className="p-5 sm:p-10 flex flex-col justify-around items-center">
        {Experiences.map((e) => (
          <Experience e={e} />
        ))}
        ghfghfghfghfghfghfghfghfghfg
      </div>
      <br />
    </div>
  );
};

const Experience = ({ e }) => {
  return (
    <div className="p-10 w-full sm:w-1/2 m-2 sm:m-5 grayGradientBackgroundEdited flex flex-col sm:flex-row items-center rounded-2xl shadow-2xl">
      <img
        src={e.logo}
        className="w-1/2 sm:w-1/5 rounded-full shadow-xl self-start"
      />
      <div className="mt-2 sm:mt-0 ml-0 sm:ml-10 flex flex-col items-start">
        <div className="tracking-widest text-white text-xl font-sfb text-left">
          {e.position}{" "}
        </div>
        <div className="tracking-wide text-white text-left">
          {e.from} - {e.to}{" "}
        </div>
        <div className="text-white font-sfb text-xl text-left">{e.title}</div>
        <div className="mt-2 text-white text-sm text-left">{e.description}</div>
      </div>
    </div>
  );
};
export default Experiences;
