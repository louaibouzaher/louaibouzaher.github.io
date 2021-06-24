import React from "react";
import Contribution from "./Contribution";
import { BsArrowRightShort } from "react-icons/bs";

const Contributions = () => {
  const Contributions = [
    {
      title: "Hack The Bot Website",
      description:
        "Design & Realization of Hack The Bot Hackathon Website, Built with Django Framework",
      isGithub: true,
      linkGithub: "https://htb.gdgalgiers.com/",
      isBehance: false,
      linkBehance: null,
      isXd: false,
      linkXd: null,
    },
    {
      title: "Devfest-2020 Website",
      description: "Devfest 2020 Event Website designed with Adobe XD",
      isGithub: true,
      linkGithub: "https://devfest20.gdgalgiers.com/",
      isBehance: false,
      linkBehance: null,
      isXd: false,
      linkXd:null,
    },
    {
      title: "SAID NGO Website",
      description: "NEXT Js Website for SAID NGO.",
      isGithub: true,
      linkGithub: "https://said-crc.vercel.app/",
      isBehance: false,
      linkBehance: null,
      isXd: false,
      linkXd:null,
    },
    {
      title: "CSE-Inventory-API",
      description:
        "REST API Built with Express Js and MongoDb for CSE Inventory Mobile App.",
      isGithub: true,
      linkGithub: "https://github.com/louaibouzaher/CSE-Inventory-API",
      isBehance: false,
      linkBehance: null,
      isXd: false,
      linkXd: null,
    },
    {
      title: "ETIC Website",
      description:
        "REST API Built with Express Js and MySQL for ETIC Club Website.",
      isGithub: true,
      linkGithub: "https://github.com/ETIC-Club/ETIC-website-backend",
      isBehance: false,
      linkBehance: null,
      isXd: false,
      linkXd: null,
    },
    {
      title: "CSE Random Picker",
      description:
        "React App made for Club Scientifique de l'ESI in order to pick random winners.",
      isGithub: true,
      linkGithub: "https://cse-random-picker.herokuapp.com/",
      isBehance: false,
      linkBehance: null,
      isXd: false,
      linkXd: null,
    },
    {
      title: "CSE-Inventory App",
      description:
        "CSE Inventory Mobile App Built with React Native made to manage the club's Inventory",
      isGithub: true,
      linkGithub: "https://github.com/akramnoui/CSEInventory",
      isBehance: false,
      linkBehance: null,
      isXd: false,
      linkXd: null,
    },
    {
      title: "Jiwar App",
      description:
        "Flutter Mobile App made during Fast&Hack Hackathon. It's made to promote volunteering opportunities",
      isGithub: false,
      linkGithub: null,
      isBehance: true,
      linkBehance: "https://www.behance.net/gallery/102647503/Jiwar",
      isXd: false,
      linkXd: null,
    },
    {
      title: "Shellmates Website",
      description:
        "Landing page for the Shellmates new website made with Adobe XD.",
      isGithub: false,
      linkGithub: null,
      isBehance: false,
      linkBehance: null,
      isXd: true,
      linkXd:
        "https://xd.adobe.com/view/24fb2366-9c80-4871-432d-f473954ff89d-52ca/",
    },
    {
      title: "COR Visual Identity",
      description:
        "Visual Identity for Clinique Ophtalmologique Radja made with Adobe Illustrator",
      isGithub: false,
      linkGithub: null,
      isBehance: true,
      linkBehance: "https://www.behance.net/gallery/102646291/Clinique-RADJA",
      isXd: false,
      linkXd: null,
    },
  ];

  return (
    <div
      id="projects"
      className="my-10 flex flex-col w-full gradientBackground"
    >
      <div className="self-end m-6 ">
        <div className="font-sfb text-left sm:text-current text-4xl sm:text-6xl blueGradientText">
          {" "}
          Projects & Contributions{" "}
        </div>
        <div className="mt-5 flex flex-row">
          <span className="flex font-sfb text-xs sm:text-xl text-left blueGradientText">
            Some code here and there
          </span>{" "}
          <span>💻</span>
          <span className="flex font-sfb text-xs sm:text-xl blueGradientText">
            , and design too!
          </span>{" "}
          <span> 🎨</span>
        </div>
      </div>
      <div className="scroll my-2 py-4 sm:my-10 w-full flex flex-row sm:flex-wrap sm:self-center sm:justify-center sm:overflow-x-hidden overflow-x-scroll items-stretch">
        {Contributions.map((c, idx) => {
          return <Contribution c={c} key={idx} />;
        })}
      </div>
      <BsArrowRightShort
        size={60}
        className="self-end bottom-10 right-3 text-gray-900 relative sm:hidden bounceLeft"
      />
    </div>
  );
};

export default Contributions;
