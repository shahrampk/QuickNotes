import { PenTool } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div className="logo bg-[#6741d9] text-white flex gap-2 items-center px-4 ">
      <h1 className="text-3xl font-bold">QuickNotes</h1>
      <PenTool size={25} />
    </div>
  );
}

export default Logo;
