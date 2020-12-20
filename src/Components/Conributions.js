import React from "react";
import Contribution from "./Contribution";
import { BsArrowRightShort } from "react-icons/bs";

const Contributions = () => {
  const Contributions = [
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
      title: "Devfest-2020 Website",
      description: "Devfest 2020 Event Website designed with Adobe XD",
      isGithub: false,
      linkGithub: null,
      isBehance: false,
      linkBehance: null,
      isXd: true,
      linkXd:
        "https://xd.adobe.com/view/685be0d7-f89f-4b25-b55c-a4fb805edc14-3d08/",
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
      title: "Devfest-2020 Website",
      description: "Devfest 2020 Event Website designed with Adobe XD",
      isGithub: false,
      linkGithub: null,
      isBehance: false,
      linkBehance: null,
      isXd: true,
      linkXd:
        "https://xd.adobe.com/view/685be0d7-f89f-4b25-b55c-a4fb805edc14-3d08/",
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
      title: "Devfest-2020 Website",
      description: "Devfest 2020 Event Website designed with Adobe XD",
      isGithub: false,
      linkGithub: null,
      isBehance: false,
      linkBehance: null,
      isXd: true,
      linkXd:
        "https://xd.adobe.com/view/685be0d7-f89f-4b25-b55c-a4fb805edc14-3d08/",
    },
  ];

  return (
    <div
      id="projects"
      className="my-10 flex flex-col w-full h-screen gradientBackground"
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
      <div className="scroll my-2 sm:my-10 px-5 w-full sm:w-5/6 flex flex-row overflow-x-scroll self-center">
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
