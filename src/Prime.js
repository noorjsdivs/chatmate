import React from "react";
import { Link } from "react-router-dom";

const Prime = () => {
  return (
    <div className="flex mt-16 flex-col justify-center text-center">
      <h1 className="text-3xl font-bold underline">ChatMate Homepage</h1>
      <Link to="/registration">
        <h4 className="py-2 px-4 text-white bg-cyan-400 w-52 flex justify-center mx-auto mt-4 cursor-pointer">
          Go to Registration
        </h4>
      </Link>
    </div>
  );
};

export default Prime;
