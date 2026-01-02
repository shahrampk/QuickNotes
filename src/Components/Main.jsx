import React from "react";
import Note from "./Note";
import Masonry from "react-masonry-css";
import useNotesContext from "../Context/NotesContext";
import { StickyNote } from "lucide-react";

function Home() {
  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    1000: 2,
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
          <StickyNote strokeWidth={1} className="size-20 lg:size-40" />
          <p className="text-base lg:text-xl font-medium">No Notes Available</p>
        </div>
      )}
    </div>
  );
}

export default Home;
