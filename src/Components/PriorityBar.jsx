import React from "react";
import Button from "./Button";

function PriorityBar() {
  return (
    <div className="flex gap-3">
      <Button name={"High"} active={true} />
      <Button name={"Intermediate"} />
      <Button name={"Low"} />
    </div>
  );
}

export default PriorityBar;
