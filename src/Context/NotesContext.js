import { createContext, useContext } from "react";

export const NotesContext = createContext({
  category: "Daily",
  date: "12/30/2025",
  description:
    "This is a QuickNote for my daily tasks. These are some those task that I have to do Daily (Most Important).",
  id: 1767084567583,
  priority: "High",
  title: "QuickNotes",
});
export const NotesContextProvider = NotesContext.Provider;

export default function useNotesContext() {
  return useContext(NotesContext);
}
