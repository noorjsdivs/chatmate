import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registrationImg } from "../../Assets";
import RegistrationButton from "../../components/button/RegistrationButton";
import { RiEyeCloseFill } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [erremail, setErremail] = useState("");
  const [fullname, setFullname] = useState("");
  const [errfullname, setErrfullname] = useState("");
  const [password, setPassword] = useState("");
  const [errpassword, setErrpassword] = useState("");
  const [show, setShow] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErremail("");
  };
  const handleFullname = (e) => {
    setFullname(e.target.value);
    setErrfullname("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrpassword("");
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!email) {
      setErremail("Email is required!");
    } else {
      if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setErremail("Valid email is required!");
      }
    }
    if (!fullname) {
      setErrfullname("Full name is required!");
    } else {
      if (fullname.length <= 2) {
        setErrfullname("Full name must contain more than 2 words!");
      }
    }
    if (!password) {
      setErrpassword("Password is required!");
    } else {
      if (!/^(?=.*[a-z])/.test(password)) {
        setErrpassword("Password must contain a lowercase letter!");
      } else if (!/^(?=.*[A-Z])/.test(password)) {
        setErrpassword("Password must contain a UPPERCASE letter!");
      } else if (!/^(?=.*[0-9])/.test(password)) {
        setErrpassword("Password must contain at least 1 number");
      } else if (!/^(?=.{6,})/.test(password)) {
        setErrpassword("Password must be six characters or longer!!!");
      }
    }
    // if ((email, fullname, password)) {
    //   setEmail("");
    //   setFullname("");
    //   setPassword("");
    // }
  };
  const handlePasswordShow = () => {
    setShow(!show);
  };
  return (
    <div className="max-w-screen-lg mx-auto flex">
      <div className="w-full sml:w-2/3 md:w-1/2 flex flex-col justify-center items-start ml-0 px-4 mdl:px-0 mdl:ml-32 font-bodyFont">
        <div className="text-primary w-full mb-8 sml:mb-10 mt-8 sml:mt-4 mdl:mt-0 text-center sml:text-left">
          <h2 className="font-bold text-2xl mdl:text-4xl mb-0 sml:mb-2">
            Get started with easy register
          </h2>
          <p className="font-xl">Free register and you can enjoy it</p>
        </div>
        <div className="flex flex-col gap-10 w-full text-primary">
          <div>
            <div className="registrationInputDiv">
              <p className="registrationInputText">Email Address</p>
              <input
                className="registrationInput"
                type="email"
                placeholder="Enter your email"
                onChange={handleEmail}
                value={email}
              />
            </div>
            <p className="registrationErrorMsg">{erremail}</p>
          </div>
          <div>
            <div className="registrationInputDiv">
              <p className="registrationInputText">Full name</p>
              <input
                className="registrationInput"
                type="text"
                placeholder="Enter your full name"
                onChange={handleFullname}
                value={fullname}
              />
            </div>
            <p className="registrationErrorMsg">{errfullname}</p>
          </div>
          <div>
            <div className="registrationInputDiv">
              <p className="registrationInputText">Password</p>
              <input
                className="registrationInput"
                type={show ? "text" : "password"}
                placeholder="Enter a password"
                onChange={handlePassword}
                value={password}
              />
              <div className="absolute top-5 cursor-pointer text-black hover:text-primary right-4">
                {show ? (
                  <BsEyeFill onClick={handlePasswordShow} size={20} />
                ) : (
                  <RiEyeCloseFill onClick={handlePasswordShow} size={20} />
                )}
              </div>
            </div>
            <p className="registrationErrorMsg">{errpassword}</p>
          </div>
        </div>
        <div className="w-full mdl:w-2/3 flex mb-6 flex-col justify-center items-center mt-8 gap-6">
          <div className="w-full" onClick={handleRegistration}>
            <RegistrationButton />
          </div>
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
