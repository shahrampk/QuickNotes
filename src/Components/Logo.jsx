import { PenTool } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div className="logo bg-[#6741d9] text-white flex gap-2 items-center px-2 lg:px-4 ">
      <h1 className="text-base sm:text-lg xl:text-3xl font-bold">QuickNotes</h1>
      <PenTool height={25} className="hidden md:block" />
    </div>
  );
}

export default Logo;
