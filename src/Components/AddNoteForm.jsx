import React, { useState } from "react";

function AddNoteForm({ toggleNoteForm, setToggleNoteForm, setNotesData }) {
  const defaultValue = {
    id: Date.now(),
    title: "QuickNotes",
    category: "",
    priority: "",
    description:
      "This is a QuickNote for my daily tasks. These are some those task that I have to do Daily (Most Important).",
    date: new Date().toLocaleDateString(),
  };
  const [noteData, setNoteData] = useState(defaultValue);
  const hideForm = function () {
    setToggleNoteForm(false);
    setNoteData(defaultValue);
  };
  const submitForm = function (e) {
    e.preventDefault();
    setNotesData((prev) => [...prev, noteData]);
    hideForm();
  };
  return (
    <section
      onClick={(e) => {
        if (!e.target.closest(".form")) hideForm();
      }}
      className={`${
        toggleNoteForm ? "visible opacity-100" : "invisible opacity-0"
      } bg-black/20 flex backdrop-blur-sm fixed top-0 right-0 h-full transition-all duration-300 w-full z-50 justify-center items-center`}
    >
      <div
        className={`form bg-white p-5  rounded-lg flex flex-col items-center gap-4 w-130 shadow-2xl shadow-black/70  transition-all duration-300 ${
          toggleNoteForm ? "scale-100 rotate-0" : "scale-0 rotate-180"
        } `}
      >
        <h2 className="text-2xl font-semibold">Add New Note</h2>
        <form onSubmit={submitForm} className="grid grid-cols-2 gap-5 w-full">
          <div className="col-span-full">
            <input
              value={noteData.title}
              type="text"
              placeholder="Title"
              className="bg-gray-200 w-full px-3 py-3 outline-none rounded"
              required
              onChange={(e) => {
                setNoteData((prev) => {
                  return { ...prev, title: e.target.value };
                });
              }}
            />
          </div>
          <div>
            <select
              onChange={(e) =>
                setNoteData((prev) => {
                  return { ...prev, category: e.target.value };
                })
              }
              value={noteData.category}
              name="category"
              id="category"
              className="bg-gray-200 p-3 w-full outline-none rounded"
              required
            >
              <option value="" disabled>
                Usage
              </option>
              <option value="Daily">Daily</option>
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div>
            <select
              required
              onChange={(e) =>
                setNoteData((prev) => {
                  return { ...prev, priority: e.target.value };
                })
              }
              name="priority"
              value={noteData.priority}
              id="priority"
              className="bg-gray-200 p-3 w-full outline-none rounded"
            >
              <option value="" disabled>
                Priority
              </option>
              <option value="High">High</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="col-span-2">
            <textarea
              onChange={(e) =>
                setNoteData((prev) => {
                  return { ...prev, description: e.target.value };
                })
              }
              name="description"
              value={noteData.description}
              id="description"
              placeholder="Note Description"
              cols="30"
              rows="9"
              className="resize-none scrollbar-hidden outline-none w-full bg-gray-200 p-3 rounded"
              required
            ></textarea>
          </div>
          <button className="bg-[#845ef7] text-white font-semibold px-6 py-2 col-span-full justify-self-center rounded cursor-pointer hover:bg-[#6741d9] transition-colors duration-200">
            Add Note
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddNoteForm;
