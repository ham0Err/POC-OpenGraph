import React, { useContext } from "react";
import { BackgroundContext } from "./MainGenerator";

const TextSize = () => {
  const { setTextsize } = useContext(BackgroundContext);

  const handleChange = (size) => {
    switch (size) {
      case "Extra Small": {
        setTextsize("text-4xl");
        break;
      }
      case "Small": {
        setTextsize("text-5xl");
        break;
      }
      case "Medium": {
        setTextsize("text-6xl");
        break;
      }
      case "Large": {
        setTextsize("text-7xl");
        break;
      }
      case "Extra Large": {
        setTextsize("text-8xl");
        break;
      }
      default: {
        setTextsize("text-6xl");
      }
    }
  };

  return (
    <div className="flex flex-row w-full h-fit py-1 mb-3 pb-4 border-gray-500 border-b-4">
      <div className="text-xl font-bold">
        <p>Text Size</p>
      </div>
      <div className="ml-auto">
        <select
          name="textsize"
          id="textsize"
          defaultValue="Medium"
          className="w-28"
          onChange={(e) => handleChange(e.target.value)}>
          <option value="Extra Small" id="Extra Small">
            Extra Small
          </option>
          <option value="Small" id="Small">
            Small
          </option>
          <option value="Medium" id="Medium">
            Medium
          </option>
          <option value="Large" id="Large">
            Large
          </option>
          <option value="Extra Large" id="Extra Large">
            Extra Large
          </option>
        </select>
      </div>
    </div>
  );
};

export default TextSize;
