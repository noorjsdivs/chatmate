import React from "react";
import { Link } from "react-router-dom";
import { registrationImg } from "../../Assets";
import RegistrationButton from "../../components/button/RegistrationButton";

const Registration = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex">
      <div className="w-1/2 flex flex-col justify-center items-start ml-32 font-bodyFont">
        <div className="text-primary mb-10">
          <h2 className="font-bold text-4xl mb-2">
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
        <div className="w-2/3 flex flex-col justify-center items-center mt-8 gap-6">
          <RegistrationButton />
          <p className="text-sm text-[#03014C]">
            Already have an account ?
            <Link to="/">
              <span className="text-[#EA6C00] ml-1 font-semibold">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <picture>
          <img
            className="w-full h-screen object-cover"
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
