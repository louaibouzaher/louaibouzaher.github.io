import React, { useState } from "react";
import Contribution from "./Contribution";
const Contributions = () => {
  const [Contributions, setContributions] = useState([
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
  ]);
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
      <div className="flex flex-row overflow-x-scroll">
        {Contributions.map((c,idx) => {
          return (
            <Contribution c={c} key={idx}/>
          )
        })}
      </div>
    </div>
  );
};

export default Contributions;
