import React, { useContext } from 'react'
import { BackgroundContext } from "./MainGenerator";

const Background = () => {
  const { text, bgcolor, textcolor, textsize, bannersize, textalign } = useContext(BackgroundContext);

  return (
    <div className="flex justify-center my-8 ">
      <div
        id="banner"
        className={`${bannersize} p-8 `}
        style={{ backgroundColor: bgcolor }}>
        <div
          className={`flex ${textalign} text-center w-full h-full text-4xl font-bold break-words overflow-y-hidden`}>
          <p className={`${textsize}`} style={{ color: textcolor }}>
          {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Background
