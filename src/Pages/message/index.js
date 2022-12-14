import React from "react";
import Sidebar from "../../components/homePart/Sidebar";

const Message = () => {
  return (
    <div className="w-full px-6 py-4 bg-red-100 h-screen">
      <div className="max-w-[186px] h-full">
        <Sidebar active="message" />
      </div>
      <div className="max-w-[427px]"></div>
      <div className="max-w-[344px]"></div>
      <div className="max-w-[344px]"></div>
    </div>
  );
};

export default Message;
