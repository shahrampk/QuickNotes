import { PenTool } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div className="logo bg-primary-light text-white flex gap-2 justify-center px-2 lg:px-4 py-6">
      <h1 className="text-lg xl:text-3xl font-bold hidden md:block">
        QuickNotes
      </h1>
      <PenTool className="size-8 md:size-6" />
    </div>
  );
}

export default Logo;
