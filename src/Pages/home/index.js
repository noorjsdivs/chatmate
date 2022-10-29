import React from "react";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { profileImg } from "../../Assets";
import Sidebar from "../../components/homePart/Sidebar";

const Home = () => {
  return (
    <div className="w-full mx-auto flex gap-6 px-6 py-4 h-screen font-bodyFont">
      <div className="w-[186px] h-full">
        <Sidebar active="home" />
      </div>
      <div className="w-[427px] h-screen px-4 relative flex flex-col gap-4">
        <div className="w-full h-[10%]">
          <BsSearch className="text-buttonBg text-xl absolute top-4 left-7" />
          <input
            className="w-full p-3 text-lg rounded-2xl border shadow-2xl border-b-4 border-gray-200 px-16"
            type="text"
            placeholder="Search"
          />
          <BsThreeDotsVertical className="text-buttonBg text-2xl absolute top-4 right-6" />
        </div>
        <div className="w-full h-[45%] rounded-xl border flex flex-col gap-4 shadow-2xl border-b-4 border-gray-200 py-1 px-4">
          <div className="w-full flex justify-between px-2">
            <h1 className="text-2xl font-bold">Groups Request</h1>
            <BsThreeDotsVertical className="text-buttonBg text-2xl" />
          </div>
          <div className="flex flex-row justify-between items-center py-1 border-b-[1px] border-gray-400">
            <div>
              <img
                className="w-[70px] h-[70px] rounded-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Friends Reunion</h2>
              <p className="text-base">Hi Guys, Wassup!</p>
            </div>
            <div>
              <button className="w-20 h-8 text-center text-lg font-semibold rounded-md hover:bg-indigo-700 duration-300 cursor-pointer transition-hover bg-buttonBg text-white">
                Accept
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-2 border-b-[1px] border-gray-400">
            <div>
              <img
                className="w-[70px] h-[70px] rounded-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Friends Reunion</h2>
              <p className="text-base">Hi Guys, Wassup!</p>
            </div>
            <div>
              <button className="w-20 h-8 text-center text-lg font-semibold rounded-md hover:bg-indigo-700 duration-300 cursor-pointer transition-hover bg-buttonBg text-white">
                Accept
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-2 ">
            <div>
              <img
                className="w-[70px] h-[70px] rounded-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Friends Reunion</h2>
              <p className="text-base">Hi Guys, Wassup!</p>
            </div>
            <div>
              <button className="w-20 h-8 text-center text-lg font-semibold rounded-md hover:bg-indigo-700 duration-300 cursor-pointer transition-hover bg-buttonBg text-white">
                Accept
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[45%] rounded-xl border flex flex-col gap-4 shadow-2xl border-b-4 border-gray-200 py-2 px-4 overflow-scroll">
          <div className="w-full flex justify-between px-2">
            <h1 className="text-2xl font-bold">Friends Request</h1>
            <BsThreeDotsVertical className="text-buttonBg text-2xl" />
          </div>
          <div className="flex flex-row justify-between items-center py-2 border-b-[1px] border-gray-400">
            <div>
              <img
                className="w-[70px] h-[70px] rounded-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Friends Reunion</h2>
              <p className="text-base">Hi Guys, Wassup!</p>
            </div>
            <div>
              <button className="w-20 h-8 text-center text-lg font-semibold rounded-md hover:bg-indigo-700 duration-300 cursor-pointer transition-hover bg-buttonBg text-white">
                Accept
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-2 border-b-[1px] border-gray-400">
            <div>
              <img
                className="w-[70px] h-[70px] rounded-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Friends Reunion</h2>
              <p className="text-base">Hi Guys, Wassup!</p>
            </div>
            <div>
              <button className="w-20 h-8 text-center text-lg font-semibold rounded-md hover:bg-indigo-700 duration-300 cursor-pointer transition-hover bg-buttonBg text-white">
                Accept
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-2 ">
            <div>
              <img
                className="w-[70px] h-[70px] rounded-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Friends Reunion</h2>
              <p className="text-base">Hi Guys, Wassup!</p>
            </div>
            <div>
              <button className="w-20 h-8 text-center text-lg font-semibold rounded-md hover:bg-indigo-700 duration-300 cursor-pointer transition-hover bg-buttonBg text-white">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[344px]"></div>
      <div className="max-w-[344px]"></div>
    </div>
  );
};

export default Home;
