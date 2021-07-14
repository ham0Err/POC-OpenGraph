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

function App() {

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Bannerfy - Banners that get you clicks!</title>
        <meta name="title" content="Bannerfy - Banners that get you clicks!"/>
        <meta name="description" content="Generate your own banner in 5 easy steps, and watch your clickrate grow!"/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://poc-open-graph.vercel.app"/>
        <meta property="og:title" content="Bannerfy - Banners that get you clicks!"/>
        <meta property="og:description" content="Generate your own banner in 5 easy steps, and watch your clickrate grow!"/>
        <meta property="og:image" content="https://www.pexels.com/photo/turned-on-pendant-lamp-132340/"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://poc-open-graph.vercel.app"/>
        <meta property="twitter:title" content="Bannerfy - Banners that get you clicks"/>
        <meta property="twitter:description" content="Generate your own banner in 5 easy steps, and watch your clickrate grow!"/>
        <meta property="twitter:image" content="https://www.pexels.com/photo/turned-on-pendant-lamp-132340/"/>
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
