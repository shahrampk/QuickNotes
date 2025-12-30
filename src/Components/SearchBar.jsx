import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <search className="px-4 py-5 w-1/2 text-lg flex items-center gap-3">
      <Search stroke="#4a5565" />
      <input
        type="text"
        placeholder="search"
        className="py-1 outline-none text-gray-600 w-full"
      />
    </search>
  );
}

export default SearchBar;
