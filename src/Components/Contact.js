import React, { useState } from "react";
import SocialMedia from "./SocialMedia";
import database from "../Services/firebase";

const Contact = () => {
  const [Contact, setContact] = useState({
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setContact((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  };
  const handleSend = () => {
    if (Contact.email != "" && Contact.message != "") {
      const messagesRef = database.ref("contactmessages");
      const newMessage = messagesRef.push();
      newMessage.set({
        email: Contact.email,
        message: Contact.message,
        time: JSON.stringify(new Date()),
      });
      alert("Message sent🚀 Thank you!");
    } else {
      alert("Please provide an email and a message before sending!");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        id="contact"
        className="relative p-10 sm:w-3/4 m-2 sm:m-5 grayGradientBackgroundEdited flex flex-col sm:flex-row items-center rounded-2xl shadow-2xl"
      >
        <div className="absolute sm:hidden text-5xl sm:text-9xl top-5 sm:top-8 right-4 sm:right-10 transform rotate-6 sm:rotate-0">
          ✉️
        </div>
        <div className="hidden sm:absolute sm:block text-5xl sm:text-9xl top-5 sm:top-8 right-4 sm:right-10 transform sm:rotate-6">
          📧
        </div>
        <div className="w-full mt-2 sm:mt-0 ml-0 sm:ml-10 flex flex-col justify-start items-start">
          <div className="text-white text-4xl font-sfb text-left">
            Contact Me
          </div>
          <div className="tracking-wide text-left">
            <span className="text-white">I'm cool with Instagram DMs too</span>
            🙄
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:border-white bg-gray-900 w-5/6 sm:w-1/3 mt-4 rounded-md h-10 p-2 text-white"
            onChange={(e) => handleChange(e)}
          />
          <textarea
            type="text"
            cols="40"
            rows="5"
            name="message"
            placeholder="Message"
            className="focus:border-white bg-gray-900 w-full sm:w-2/3 my-2 rounded-md p-2 text-white"
            onChange={(e) => handleChange(e)}
          />
          <button
            className="focus:outline-none my-1 sm:my-2 gradientBorder font-sans border-gray-900  border-solid shadow-2xl rounded-lg font-bold tracking-wide h-10 w-40 align-middle bg-gray-700 bg-opacity-5"
            onClick={handleSend}
          >
            Send{" "}
          </button>
        </div>
      </div>
      <div className="text-4xl gradientText font-sfb mx-3 sm:mx-0">
        Or just reach out on Social Media/Email
      </div>
      <div className="container flex justify-center font-sans text-xl text-center m-7 text-white tracking-wide">
        📧 <br />
        mlb03@mail.aub.edu <br />
        jm_bouzaher@esi.dz <br />
      </div>
      <div className="flex">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Contact;
