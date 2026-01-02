import React from "react";
import Note from "./Note";
import Masonry from "react-masonry-css";
import useNotesContext from "../Context/NotesContext";
import { StickyNote } from "lucide-react";

function Home() {
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    920: 2,
    700: 1,
  };
  const { filteredArr } = useNotesContext();
  return (
    <div className="h-full overflow-y-scroll scrollbar-hidden px-3">
      {filteredArr.length > 0 ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto h-fit"
        >
          {filteredArr.map((note, i) => (
            <Note key={i} noteDate={note} />
          ))}
        </Masonry>
      ) : (
        <div className="flex flex-col items-center justify-center h-full opacity-50">
          <StickyNote strokeWidth={1} size={150} />
          <p className="text-2xl font-medium">No Notes Available</p>
        </div>
      )}
    </div>
  );
}

export default Home;
