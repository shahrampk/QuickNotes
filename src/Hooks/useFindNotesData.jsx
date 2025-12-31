import { useState } from "react";
import useNotesContext from "../Context/NotesContext";

export default function useFindData(id) {
  const { notesData } = useNotesContext();
  const result = notesData.find((noteDate) => noteDate.id === id);
  return result;
}
