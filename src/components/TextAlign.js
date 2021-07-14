import React, { useContext } from "react";
import { BackgroundContext } from "./MainGenerator";

const TextAlign = () => {

  const {setTextalign} = useContext(BackgroundContext)

  const handleClick = (alignment, target) =>{
    setTextalign(alignment)
    document.querySelector(".current-align").classList.remove("current-align");
    target.classList.add("current-align");
  }



  return (
    <div className="flex flex-row w-full h-36 mb-6 border-gray-500 border-b-4">
      <div className="flex items-center text-xl font-bold">
        <p>Text Align</p>
      </div>
      <div className="w-36 h-28 ml-auto grid grid-cols-3 text-2xl bg-gray-400 rounded-md">
        <div
          onClick={(e) => handleClick("justify-start items-start", e.target)}
          className="flex justify-center content-center cursor-pointer rounded-md">
          ┏
        </div>
        <div
          onClick={(e) => handleClick("justify-center items-start", e.target)}
          className="flex justify-center content-center cursor-pointer rounded-md">
          ┳
        </div>
        <div
          onClick={(e) => handleClick("justify-end items-start", e.target)}
          className="flex justify-center content-center cursor-pointer rounded-md">
          ┓
        </div>
        <div
          onClick={(e) => handleClick("justify-start items-center", e.target)}
          className="flex justify-center content-center cursor-pointer rounded-md">
          ┣
        </div>
        <div
          onClick={(e) => handleClick("justify-center items-center", e.target)}
          className="flex justify-center content-center cursor-pointer current-align rounded-md">
          ╋
        </div>
        <div
          onClick={(e) => handleClick("justify-end items-center", e.target)}
          className="flex justify-center content-center cursor-pointer rounded-md">
          ┫
        </div>
        <div
          onClick={(e) => handleClick("justify-start items-end", e.target)}
          className="flex justify-center content-center cursor-pointer rounded-md">
          ┗
        </div>
        <div
          onClick={(e) => handleClick("justify-center items-end", e.target)}
          className="flex justify-center content-center cursor-pointer rounded-md">
          ┻
        </div>
        <div
          onClick={(e) => handleClick("justify-end items-end", e.target)}
          className="flex justify-center content-center cursor-pointer rounded-md">
          ┛
        </div>
      </div>
    </div>
  );
};

export default TextAlign;
