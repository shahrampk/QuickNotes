import { PlusCircle } from "lucide-react";
import React from "react";

function AddNoteBtn({ setToggleNoteForm }) {
  return (
    <div className="flex items-center gap-3 text-primary-light">
      <button
        onClick={() => setToggleNoteForm((prev) => !prev)}
        className="cursor-pointer"
      >
        <PlusCircle />
      </button>
      <span className="hidden md:block">Add new Note</span>
    </div>
  );
}

export default AddNoteBtn;
