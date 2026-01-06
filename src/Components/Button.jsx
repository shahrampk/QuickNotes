import React from "react";

import useNotesContext from "../Context/NotesContext";
function Button({ name }) {
  const { setSelectedPriority, selectedPriority } = useNotesContext();
  return (
    <button
      onClick={(e) => setSelectedPriority(e.target.textContent)}
      className={`${
        selectedPriority === name
          ? "bg-primary-light text-white"
          : "hover:bg-primary hover:text-white"
      } px-4 py-1.5 text-sm rounded  transition-colors duration-200 cursor-pointer`}
    >
      {name}
    </button>
  );
}

export default Button;
