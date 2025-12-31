import { useState } from "react";
import useNotesContext from "../Context/NotesContext";

export default function useFindData(id = 1767180140810) {
  const { notesData } = useNotesContext();

  const result = notesData.find((img) => img.id === id);
  return result;
}
