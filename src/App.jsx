import { useEffect, useState } from "react";
import { NotesContextProvider } from "./Context/NotesContext";
import {
  AddNoteBtn,
  AddNoteForm,
  Logo,
  PriorityBar,
  SearchBar,
  ReviewWindow,
} from "./Components";
import EditForm from "./Components/EditForm";
import CategoriesBar from "./Components/CategoriesBar";
import Main from "./Components/Main";

function App() {
  const [notesData, setNotesData] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [toggleNoteForm, setToggleNoteForm] = useState(false);
  const [toggleReviewWindow, setToggleReviewWindow] = useState(true);
  const [noteID, setNoteID] = useState(0);
  const [toggleEditForm, setToggleEditForm] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    const filteredNotes =
      selectedPriority === "All"
        ? notesData
        : notesData.filter((note) => note.priority === selectedPriority);
    setFilteredArr([...filteredNotes]);
  }, [notesData, selectedPriority]);
  useEffect(() => {
    const filteredNotes =
      selectedCategory === "All"
        ? notesData
        : notesData.filter((note) => note.category === selectedCategory);
    setFilteredArr([...filteredNotes]);
  }, [notesData, selectedCategory]);

  // Delete Notes
  const deleteNote = function (id, setArr) {
    setArr((prev) => {
      return [...prev.filter((data) => data.id !== id)];
    });
  };

  // Context values
  const val = {
    setFilteredArr,
    selectedPriority,
    setSelectedCategory,
    selectedCategory,
    setSelectedPriority,
    filteredArr,
    noteID,
    setNoteID,
    setNotesData,
    notesData,
    deleteNote,
    toggleReviewWindow,
    setToggleReviewWindow,
    setToggleEditForm,
  };
  return (
    <NotesContextProvider value={val}>
      <div className="grid grid-cols-5 grid-rows-8 h-screen font-roboto">
        <Logo />
        <CategoriesBar />
        <div className="col-span-4 row-start-1 col-start-2 flex justify-between items-center px-5">
          <SearchBar />
        </div>
        <main className="bg-gray-100 col-span-4 row-span-7 py-5 px-4 md:px-10 flex flex-col gap-2">
          <div className="flex justify-between px-5">
            <PriorityBar />
            <AddNoteBtn setToggleNoteForm={setToggleNoteForm} />
          </div>
          <Main />
        </main>
        <AddNoteForm
          toggleNoteForm={toggleNoteForm}
          setToggleNoteForm={setToggleNoteForm}
          setNotesData={setNotesData}
        />
        <ReviewWindow
          noteID={noteID}
          notesData={notesData}
          setNotesData={setNotesData}
          setToggleReviewWindow={setToggleReviewWindow}
          toggleReviewWindow={toggleReviewWindow}
        />
      </div>
      <EditForm
        toggleEditForm={toggleEditForm}
        setToggleEditForm={setToggleEditForm}
        noteId={noteID}
        setNotesData={setNotesData}
      />
    </NotesContextProvider>
  );
}

export default App;
