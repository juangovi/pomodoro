import React, { useState } from "react";
import { Menu } from "./components/Menu";
import Temp from "./components/Temp";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-row divide-x bg-[#937DC2]">
      <div className="basis-1/4 flex-row h-screen overflow-auto">
        <Menu/>
      </div>
      <div className="basis-3/4">
        <Temp />
      </div>
    </div>
  );
};
