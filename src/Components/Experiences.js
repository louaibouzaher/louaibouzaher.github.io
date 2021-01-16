import React from "react";
import Cse from "../Assets/cse.png";
import Gdg from "../Assets/gdg.png";
import Ted from "../Assets/ted.png";
import Mla from "../Assets/mla.png";
const Experiences = () => {
  const Experiences = [
    {
      title: "Microsoft Learn",
      description:
        "The Microsoft Learn Student Ambassadors program is a global group of on-campus ambassadors who are eager to help students and their communities, lead in their local tech circles, and develop technical and career skills for the future. As a Student Ambassador, you might find yourself organizing a campus or community hackathon, mentoring other students, or volunteering with an elementary school STEM class.",
      position: "Student Ambassador",
      from: "2021",
      to: "Now",
      logo: Mla,
    },
    {
      title: "GDG Algiers",
      description:
        "GDG Algiers is a local community in Algiers and is part of the big global community of developers GDG (960 communities worldwide). We host a variety of technical workshops and hackathons for developers to empower our country's ecosystem in a cool way!",
      position: "Design Co-Manager",
      from: "2020",
      to: "2021",
      logo: Gdg,
    },
    {
      title: "Club Scientifique de l'ESI",
      description:
        "Le CSE est un club créé par des étudiants de l'ESI qu’a réuni l’objectif de donner une nouvelle perspective à leurs études.",
      position: "HR Manager Assistant",
      from: "2020",
      to: "2021",
      logo: Cse,
    },
    {
      title: "TED-Ed Club Biskra",
      description:
        "The TED-Ed Club aims to gather all enthusiast high school students, promote discussion between them, urge them to debate and explore ideas. A place where these students can develop themselves and work more on their mindset, civic engagement and social maturity.",
      position: "Club Leader",
      from: "2018",
      to: "2019",
      logo: Ted,
    },
  ];
  return (
    <div id="community" className="w-full ">
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
