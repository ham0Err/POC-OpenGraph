//Hashnode: required (1200x630px), actual(752x394.8px), reduction of ~ 1.59 times
//Medium: required(1060x530) or atleast(1200x600px), actual wont consider since there are multiple sizes to choose
//dev.to: required(1000x420), actual(806.4x338.7), reduction of ~ 2.38 times

import React from "react";
import html2canvas from "html2canvas";

const downloadBanner = async () => {
  const banner = document.getElementById("banner");

  window.scrollTo(0, 0);

  const generate = await html2canvas(banner, {
    allowTaint: true,
    scale: 1,
  });
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.download = "banner.png";
  link.href = generate.toDataURL("image/jpeg");
  link.target = "_blank";
  link.click();
  link.remove();
};

const DownloadBtn = () => {
  return (
    <div className="flex justify-center w-full h-16 my-4">
      <div className="w-96 h-full ">
        <button className="group transition ease-in-out duration-200 transform-gpu hover:scale-95 focus:outline-none w-full h-full px-10 py-2 bg-yellow-500 rounded-full ">
          {/* group-hover not available by default, add in tailwind config file */}
          <p
            onClick={() => downloadBanner()}
            className="inline-block transition-all ease-in-out duration-200 transform-gpu group-hover:scale-125 text-black font-bold text-2xl">
            Download Banner!
          </p>
        </button>
      </div>
    </div>
  );
};

export default DownloadBtn;
