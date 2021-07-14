import React, { useContext } from "react";
import { BackgroundContext } from "./MainGenerator";

const TextcolorInput = () => {
  const {textcolor, setTextcolor } = useContext(BackgroundContext);

  return (
    <div className="flex flex-row w-full h-fit py-1 mb-3 pb-4 border-gray-500 border-b-4">
      <div className="text-xl font-bold">
        <p>Text Color</p>
      </div>
      <div className="w-12 ml-auto">
        <input
          type="color"
          name="textcolor"
          id="textcolor"
          value={`${textcolor}`}
          className="w-full h-full"
          onChange={(e) => setTextcolor(e.target.value)}
        />
        <label htmlFor="textcolor"></label>
      </div>
    </div>
  );
};

export default TextcolorInput;
