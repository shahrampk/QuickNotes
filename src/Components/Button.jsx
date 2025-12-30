import React from "react";

function Button({ name, active }) {
  return (
    <button
      className={`${
        active ? "bg-[#6741d9] text-white" : ""
      } px-4 py-1.5 text-sm rounded hover:bg-[#845ef7] transition-colors duration-200 cursor-pointer hover:text-white`}
    >
      {name}
    </button>
  );
}

export default Button;
