import React from "react";
import { Link } from "react-router-dom";
import { registrationImg } from "../../Assets";
import RegistrationButton from "../../components/button/RegistrationButton";

const Registration = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex">
      <div className="w-full sml:w-2/3 md:w-1/2 flex flex-col justify-center items-start ml-0 px-4 mdl:px-0 mdl:ml-32 font-bodyFont">
        <div className="text-primary w-full mb-8 sml:mb-10 mt-8 sml:mt-4 mdl:mt-0 text-center sml:text-left">
          <h2 className="font-bold text-2xl mdl:text-4xl mb-0 sml:mb-2">
            Get started with easy register
          </h2>
          <p className="font-xl">Free register and you can enjoy it</p>
        </div>
        <div className="flex flex-col gap-10 w-full text-primary">
          <div className="registrationInputDiv">
            <p className="registrationInputText">Email Address</p>
            <input
              className="registrationInput"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="registrationInputDiv">
            <p className="registrationInputText">Full name</p>
            <input
              className="registrationInput"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="registrationInputDiv">
            <p className="registrationInputText">Password</p>
            <input
              className="registrationInput"
              type="password"
              placeholder="Enter a password"
            />
          </div>
        </div>
        <div className="w-full mdl:w-2/3 flex mb-6 flex-col justify-center items-center mt-8 gap-6">
          <RegistrationButton />
          <p className="text-sm text-[#03014C]">
            Already have an account ?
            <Link to="/">
              <span className="text-[#EA6C00] ml-1 font-semibold">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 hidden sml:block">
        <picture>
          <img
            className="w-full h-full md:h-screen object-cover "
            src={registrationImg}
            alt="registrationImg"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default Registration;
