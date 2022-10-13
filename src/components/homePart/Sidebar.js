import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsChatLeftDotsFill, BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { profileImg } from "../../Assets";

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleMessage = () => {
    navigate("/message");
  };
  const handleNotification = () => {
    navigate("/notification");
  };
  const handleSettings = () => {
    navigate("/settings");
  };
  return (
    <div className="w-full h-full py-4 flex flex-col justify-between items-center bg-buttonBg rounded-lg">
      <div className="flex justify-center">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={profileImg}
          alt="profileImg"
        />
      </div>
      <div className="flex flex-col w-full items-center gap-12 -mt-6">
        <div
          onClick={handleHome}
          className={`${
            active === "home" &&
            "relative cursor-pointer opacity-90 z-10 after:z-[-1] flex justify-center items-center w-full after:absolute after:bg-white after:w-[160px] after:h-20 after:-top-3 after:right-0 after:text-center after:content-[''] before:absolute before:w-4 before:h-20 before:right-0 before:-top-3 before:bg-buttonBg before:shadow-lg before:shadow-blue-500/50  before:rounded-l-lg"
          } hover:opacity-100`}
        >
          <AiOutlineHome
            className={`text-5xl ${
              active === "home"
                ? "text-primary"
                : "text-white opacity-80 transition-opacity duration-300 cursor-pointer hover:opacity-100"
            }`}
          />
        </div>
        <div
          onClick={handleMessage}
          className={`${
            active === "message" &&
            "relative z-10 after:z-[-1] flex justify-center items-center w-full after:absolute after:bg-white after:w-[160px] after:h-20 after:-top-4 after:right-0 after:text-center after:content-[''] before:absolute before:w-4 before:h-20 before:right-0 before:-top-4 before:bg-buttonBg before:shadow-lg before:shadow-blue-500/50  before:rounded-l-lg"
          }`}
        >
          <BsChatLeftDotsFill
            className={`text-5xl ${
              active === "message"
                ? "text-primary"
                : "text-white opacity-80 transition-opacity duration-300 cursor-pointer hover:opacity-100"
            }`}
          />
        </div>
        <div
          onClick={handleNotification}
          className={`${
            active === "notification" &&
            "relative z-10 after:z-[-1] flex justify-center items-center w-full after:absolute after:bg-white after:w-[160px] after:h-20 after:-top-4 after:right-0 after:text-center after:content-[''] before:absolute before:w-4 before:h-20 before:right-0 before:-top-4 before:bg-buttonBg before:shadow-lg before:shadow-blue-500/50  before:rounded-l-lg"
          }`}
        >
          <BsBell
            className={`text-5xl ${
              active === "notification"
                ? "text-primary"
                : "text-white opacity-80 transition-opacity duration-300 cursor-pointer hover:opacity-100"
            }`}
          />
        </div>
        <div
          className={`${
            active === "settings" &&
            "relative z-10 after:z-[-1] flex justify-center items-center w-full after:absolute after:bg-white after:w-[160px] after:h-20 after:-top-4 after:right-0 after:text-center after:content-[''] before:absolute before:w-4 before:h-20 before:right-0 before:-top-4 before:bg-buttonBg before:shadow-lg before:shadow-blue-500/50  before:rounded-l-lg"
          }`}
        >
          <FiSettings
            onClick={handleSettings}
            className={`text-5xl ${
              active === "settings"
                ? "text-primary"
                : "text-white opacity-80 transition-opacity duration-300 cursor-pointer hover:opacity-100"
            }`}
          />
        </div>
      </div>
      <div className="text-white text-[46px]">
        <MdLogout />
      </div>
    </div>
  );
};

export default Sidebar;
