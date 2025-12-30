import { Edit, Minimize, SaveIcon } from "lucide-react";
import useNotesContext from "../Context/NotesContext";
import Priority from "./Priority";
import { useEffect, useRef, useState } from "react";

function ReviewWindow({
  noteID = 1767084567583,
  notesData,
  setNotesData,
  setToggleReviewWindow,
  toggleReviewWindow,
}) {
  const data = notesData.find((noteData) => noteData.id === noteID);

  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("");
  const descriptionRef = useRef(null);
  useEffect(() => {
    if (edit && descriptionRef.current) {
      const textarea = descriptionRef.current;
      textarea.focus();

      const length = textarea.value.length;
      textarea.setSelectionRange(length, length); // 👈 cursor end par
    }
  }, [edit]);
  const updateVal = function () {
    setNotesData((prev) =>
      prev.map((noteData) =>
        noteData.id === noteID ? { ...noteData, description: val } : noteData
      )
    );
  };

  function hide() {
    setEdit(false);
    setToggleReviewWindow(true);
    setVal(data?.description);
  }

  function hideModel(e) {
    if (e.target.closest(".review-model")) return;
    hide();
  }
  return (
    <div
      onClick={hideModel}
      className={`${
        !toggleReviewWindow ? "visible opacity-100" : "invisible opacity-0"
      } flex justify-center items-center fixed top-0 right-0 h-full w-full overflow-hidden bg-black/20 backdrop-blur-sm z-50 transition-all duration-300`}
    >
      <div className="review-model h-4/5 w-5/6 md:w-3/5 3xl:w-3/4 3xl:h-4/5 bg-white shadow-2xl shadow-black/50 rounded-lg p-6 flex gap-5 flex-col ">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Priority val={data?.category} scale={true} />
            <Priority val={data?.priority} scale={true} />
          </div>
          <div className="flex gap-6">
            {edit ? (
              <SaveIcon
                className="cursor-pointer"
                onClick={() => {
                  updateVal();
                  setEdit(false);
                }}
              />
            ) : (
              <Edit
                className="cursor-pointer"
                onClick={() => {
                  setEdit(true);
                  setVal(data?.description);
                }}
              />
            )}
            <Minimize className="cursor-pointer" onClick={hide} />
          </div>
        </div>
        <div className="h-4/5">
          <h2 className="text-3xl 3xl:text-5xl mb-2 font-semibold leading-normal ">
            {data?.title}
          </h2>
          {edit ? (
            <textarea
              className="3xl:text-2xl resize-none w-full h-4/5 outline-none text-gray-700"
              ref={descriptionRef}
              name="description"
              id="description"
              defaultValue={data?.description}
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
          ) : (
            <p className="3xl:text-2xl resize-none w-full h-4/5 outline-none overflow-y-scroll text-gray-700 scrollbar-hidden">
              {data?.description}
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <p className="text-gray-400">{data?.date}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewWindow;
