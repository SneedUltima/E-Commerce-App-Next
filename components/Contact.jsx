import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="wrapper bg-[#223e85] p-[20px] flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-center items-center">
        <span className="text-white">GET IN TOUCH WITH US.</span>
        <div className="mail flex">
          <input
            className="p-[10px] border-none rounded-l-lg"
            type="text"
            placeholder="Enter your Email"
          />
          <button className="rounded-r-lg bg-black text-white p-[10px] font-bold">
            Submit
          </button>
        </div>
        <div className="icons flex text-white text-3xl gap-5">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
    </div>
  );
};

export default Contact;
