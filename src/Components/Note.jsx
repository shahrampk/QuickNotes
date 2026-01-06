import { Delete, Edit, Maximize } from "lucide-react";
import useNotesContext from "../Context/NotesContext";
import Priority from "./Priority";

function Note({ noteDate }) {
  const {
    deleteNote,
    setNotesData,
    setToggleReviewWindow,
    setNoteID,
    setToggleEditForm,
  } = useNotesContext();
  return (
    <div
      id={noteDate.id}
      className="bg-white rounded p-3 md:p-5 flex flex-col gap-3 m-2 mb-4 shadow-xl"
    >
      <div className="flex justify-between ">
        <Priority val={noteDate.category} />
        <div className="flex gap-4">
          <Maximize
            size="18"
            className="cursor-pointer"
            onClick={() => {
              setNoteID(noteDate.id);
              setToggleReviewWindow(false);
            }}
          />
          <Edit
            size="18"
            className="cursor-pointer"
            onClick={() => {
              setToggleEditForm(true);
              setNoteID(noteDate.id);
            }}
          />
          <Delete
            size="18"
            className="cursor-pointer"
            onClick={() => deleteNote(noteDate.id, setNotesData)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-lg truncate">{noteDate.title}</h2>
        <p className="text-sm line-clamp-9">{noteDate.description}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-600">{noteDate.date}</p>
      </div>
    </div>
  );
}

export default Note;
