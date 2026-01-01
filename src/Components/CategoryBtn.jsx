import React from "react";

function CategoryBtn({ icon, val }) {
  console.log(icon);
  return (
    <button
      className={`text-gray-300 flex gap-3 text-lg items-center relative px-4 py-3 z-10 overflow-y-clip hover:text-white`}
    >
      <icon /> {val}
    </button>
  );
}

export default CategoryBtn;
