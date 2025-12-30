import React from "react";

function Priority({ val, scale = false }) {
  return (
    <h3
      className={`${
        val === "High" || val === "Daily"
          ? "bg-green-400"
          : val === "Intermediate" || val === "Personal"
          ? "bg-yellow-400"
          : "bg-red-400"
      }  ${
        scale ? "text-sm" : "text-xs"
      } tracking-wider px-4 py-1 rounded-full`}
    >
      {val}
    </h3>
  );
}

export default Priority;
