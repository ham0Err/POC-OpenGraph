import React from "react";
import BannerSize from "./BannerSize";
import ColorInput from "./ColorInput";
import TextAlign from "./TextAlign";
import TextcolorInput from "./TextcolorInput";
import TextInput from "./TextInput";
import TextSize from "./TextSize";

const Inputs = () => {
  return (
    <div className="flex justify-center w-full my-8 h-auto">
      <div className="w-96 p-8 border-yellow-500 border-4 rounded-xl">
        {" "}
        {/*padding done here to contain child div with full height */}
        <TextInput />
        <BannerSize />
        <ColorInput />
        <TextcolorInput />
        <TextSize />
        <TextAlign />
      </div>
    </div>
  );
};

export default Inputs;
