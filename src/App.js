// 1. create individual components for changing properties of background
// a. List out properties to allow (ref sites listed)
// b. create one component, allow user to select desired properties
// c. allow changes made to reflect on the background shown
//
// 2. implement multiple components (text, font, size, color, border etc)
// 3. implement SVGs or design elements, user pref or random generated


import React from "react";
import MainGenerator from "./components/MainGenerator";
import Navbar from "./components/Navbar";
import Title from "./components/Title";


function App() {

  return (
      <div className="flex flex-col justify-center items-center h-full w-full min-h-screen">
        <Navbar />
        <Title />
        <MainGenerator />
      </div>
  );
}

export default App;
