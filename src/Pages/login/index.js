import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginImg } from "../../Assets";
import { RiEyeCloseFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BsEyeFill } from "react-icons/bs";
import LoginButton from "../../components/button/LoginButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [erremail, setErremail] = useState("");
  const [password, setPassword] = useState("");
  const [errpassword, setErrpassword] = useState("");
  const [show, setShow] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErremail("");
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
  };
  const handlePasswordShow = () => {
    setShow(!show);
  };
  const handleGoogleLogin = () => {
    alert("Google login will update soon!");
  };
  return (
    <div className="max-w-screen-lg mx-auto flex">
      <div className="w-full sml:w-2/3 md:w-1/2 flex flex-col justify-center items-start ml-0 px-4 mdl:px-0 mdl:ml-32 font-bodyFont">
        <div className="text-primary w-full mb-8 sml:mb-10 mt-8 sml:mt-4 mdl:mt-0 text-center sml:text-left">
          <h2 className="font-bold text-2xl mdl:text-4xl mb-0 sml:mb-2">
            Login to your account!
          </h2>
          <div
            onClick={handleGoogleLogin}
            className="flex text-base cursor-pointer rounded-md mt-6 justify-center items-center gap-4 border border-[#03014C] p-4 w-56"
          >
            <FcGoogle size={30} />
            <p className="font-bold">Login with Google</p>
          </div>
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
            <LoginButton />
          </div>
          <p className="text-sm text-[#03014C]">
            Already have an account ?
            <Link to="/registration">
              <span className="text-[#EA6C00] ml-1 font-bold hover:text-primary hover:underline transition duration-300">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 hidden sml:block">
        <picture>
          <img
            className="w-full h-full md:h-screen object-cover "
            src={loginImg}
            alt="loginImg"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default Login;
