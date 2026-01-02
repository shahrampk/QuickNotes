import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import useNotesContext from "../Context/NotesContext";

function SearchBar() {
  const { setFilteredArr, notesData } = useNotesContext();
  const [query, setQuery] = useState("");
  useEffect(() => {
    setFilteredArr((prev) =>
      prev.filter((noteData) => noteData.title === query)
    );
  }, [query]);
  return (
    <search className="px-4 py-5 w-1/2 text-lg flex items-center gap-3">
      <Search stroke="#4a5565" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="search"
        className="py-1 outline-none text-gray-600 w-full"
      />
    </search>
  );
}

export default SearchBar;
