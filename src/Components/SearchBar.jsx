import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import useNotesContext from "../Context/NotesContext";

function SearchBar() {
  const { setFilteredArr, notesData } = useNotesContext();
  const [query, setQuery] = useState("");
  const filteredArr = useMemo(() => {
    if (!query.trim()) return notesData;
    return notesData.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, notesData]);
  useEffect(() => {
    setFilteredArr([...filteredArr]);
  }, [filteredArr]);
  return (
    <search className="px-2 lg:px-4 py-5 lg:py-6 text-lg flex items-center gap-3">
      <Search stroke="#4a5565" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="search"
        className="outline-none text-gray-600 w-full"
      />
    </search>
  );
}

export default SearchBar;
