import React from "react";
import Note from "../Components/Note";
import Masonry from "react-masonry-css";
import useNotesContext from "../Context/NotesContext";

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
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto h-fit"
      >
        {filteredArr.map((note, i) => (
          <Note key={i} noteDate={note} />
        ))}
      </Masonry>
    </div>
  );
}

export default Home;
