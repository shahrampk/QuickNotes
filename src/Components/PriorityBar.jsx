import React, { useState } from "react";
import Button from "./Button";
import useNotesContext from "../Context/NotesContext";

function PriorityBar() {
  const { selectedPriority } = useNotesContext();
  return (
    <div className="flex gap-3">
      <Button name={"All"} active={selectedPriority === "All" && true} />
      <Button name={"High"} active={selectedPriority === "High" && true} />
      <Button
        name={"Intermediate"}
        active={selectedPriority === "Intermediate" && true}
      />
      <Button name={"Low"} active={selectedPriority === "Low" && true} />
    </div>
  );
}

export default PriorityBar;
