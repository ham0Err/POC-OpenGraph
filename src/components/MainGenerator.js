import React, { useState } from "react";
import Background from "./Background";
import DownloadBtn from "./DownloadBtn";
import Inputs from "./Inputs";

export const BackgroundContext = React.createContext();

const MainGenerator = () => {
  const [text, setText] = useState("Hello World");
  const [bgcolor, setBgcolor] = useState("#1888cd");
  const [textcolor, setTextcolor] = useState("#ffffff");
  const [textsize, setTextsize] = useState("text-6xl");
  const [bannersize, setBannersize] = useState("w-300 h-157.5");
  const [textalign, setTextalign] = useState("justify-center items-center");

  const value = {
    text,
    setText,
    bgcolor,
    setBgcolor,
    textcolor,
    setTextcolor,
    textsize,
    setTextsize,
    bannersize,
    setBannersize,
    textalign,
    setTextalign,
  };

  return (
    <BackgroundContext.Provider value={value}>
        <Background />
        <Inputs />
        <DownloadBtn />
    </BackgroundContext.Provider>
  );
};

export default MainGenerator;
