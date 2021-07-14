// 1. create individual components for changing properties of background
// a. List out properties to allow (ref sites listed)
// b. create one component, allow user to select desired properties
// c. allow changes made to reflect on the background shown
//
// 2. implement multiple components (text, font, size, color, border etc)
// 3. implement SVGs or design elements, user pref or random generated


import React from "react";
import { Helmet } from "react-helmet";
import MainGenerator from "./components/MainGenerator";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import thumbnail from "./logo.png"


function App() {

  return (
    <>
      <Helmet>
        <title>Bannerfy</title>
        <meta name="twitter:card" content="summary"/>
        <meta name="og:title" property="Bannerfy" data-react-helmet="true"/>
        <meta name="og:description" property="Banners that get you views!" data-react-helmet="true"/>
        <meta name="og:image" property={thumbnail} data-react-helmet="true"/>
      </Helmet>
      <div className="flex flex-col justify-center items-center h-full w-full min-h-screen">
        <Navbar />
        <Title />
        <MainGenerator />
      </div>
    </>  
  );
}

export default App;
