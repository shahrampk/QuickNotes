import React from "react";

import useNotesContext from "../Context/NotesContext";
function Button({ name }) {
  const { setSelectedPriority, selectedPriority } = useNotesContext();
  return (
    <button
      onClick={(e) => setSelectedPriority(e.target.textContent)}
      className={`${
        selectedPriority === name
          ? "bg-[#6741d9] text-white"
          : "hover:bg-[#845ef7] hover:text-white"
      } px-4 py-1.5 text-sm rounded  transition-colors duration-200 cursor-pointer`}
    >
      {name}
    </button>
  );
}

export default Button;
