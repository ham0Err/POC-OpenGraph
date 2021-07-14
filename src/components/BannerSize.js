import React, { useContext } from "react";
import { BackgroundContext } from "./MainGenerator";

const Bannersize = () => {
  const { setBannersize } = useContext(BackgroundContext);
  const handleChange = (size) => {
    switch (size) {
      case "Hashnode":
        setBannersize("w-300 h-157.5");
        break;
      case "Medium":
        setBannersize("w-265 h-132.5");
        break;
      case "Dev.to":
        setBannersize("w-250 h-105");
        break;

      default:
        setBannersize("w-300 h-157.5");
        break;
    }
  };
  return (
    <div className="flex flex-row w-full h-fit py-1 mb-3 pb-4 border-gray-500 border-b-4">
      <div className="text-xl font-bold">
        <p>Banner for</p>
      </div>
      <div className="ml-auto">
        <select
          name="blogplatforms"
          className="w-28"
          defaultValue={"Hashnode"}
          onChange={(e) => handleChange(e.target.value)}>
          <option value="Hashnode">Hashnode</option>
          <option value="Medium">Medium</option>
          <option value="Dev.to">Dev.to</option>
        </select>
      </div>
    </div>
  );
};

export default Bannersize;
