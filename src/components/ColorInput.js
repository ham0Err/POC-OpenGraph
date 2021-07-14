import React, { useContext } from "react";
import { BackgroundContext } from "./MainGenerator";

const ColorInput = () => {
  const { bgcolor, setBgcolor } = useContext(BackgroundContext);

  return (
    <div className="flex flex-row w-full h-fit py-1 mb-2 pb-4 border-gray-500 border-b-4">
      <div className="text-xl font-bold">
        <p>Background Color</p>
      </div>
      <div className="w-12 ml-auto">
        <input
          type="color"
          name="bkgcolor"
          id="bkgcolor"
          value={`${bgcolor}`}
          className="w-full h-full"
          onChange={(e) => setBgcolor(e.target.value)}
        />
        <label htmlFor="bkgcolor"></label>
      </div>
    </div>
  );
};

export default ColorInput;
