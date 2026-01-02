import { Edit, Minimize, SaveIcon } from "lucide-react";
import Priority from "./Priority";
import { useEffect, useRef, useState } from "react";

function ReviewWindow({
  noteID,
  notesData = [],
  setNotesData,
  setToggleReviewWindow,
  toggleReviewWindow,
}) {
  // 🔒 HOOKS ALWAYS FIRST
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("");

  const descriptionRef = useRef(null);

  // 🔒 SAFE FIND
  const data = notesData.find((n) => n.id === noteID);

  // 🔒 sync value safely
  useEffect(() => {
    if (!data) return;
    setVal(data.description ?? "");
    setEdit(false);
  }, [data?.id]);

  // 🔒 cursor
  useEffect(() => {
    if (!edit || !descriptionRef.current) return;
    const textarea = descriptionRef.current;
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }, [edit]);

  const updateVal = () => {
    if (!data) return;
    setNotesData((prev) =>
      prev.map((note) =>
        note.id === data.id ? { ...note, description: val } : note
      )
    );
    setEdit(false);
  };

  const closeModal = () => {
    setEdit(false);
    setVal(data?.description ?? "");
    setToggleReviewWindow(true);
  };

  const handleBackdrop = (e) => {
    if (e.target.closest(".review-model")) return;
    closeModal();
  };

  // 🔒 CONDITIONAL JSX (NOT conditional hooks)
  if (!data) return null;

  return (
    <div
      onClick={handleBackdrop}
      className={`${
        !toggleReviewWindow ? "visible opacity-100" : "invisible opacity-0"
      } fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50 transition-all duration-300`}
    >
      <div
        className={` ${
          !toggleReviewWindow ? "scale-100" : "scale-0"
        } review-model h-4/5 w-5/6 md:w-3/5 bg-white rounded-lg shadow-2xl p-6 flex flex-col gap-5 transition-all duration-200`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Priority val={data.category ?? ""} scale />
            <Priority val={data.priority ?? ""} scale />
          </div>

          <div className="flex gap-6">
            {edit ? (
              <SaveIcon className="cursor-pointer" onClick={updateVal} />
            ) : (
              <Edit className="cursor-pointer" onClick={() => setEdit(true)} />
            )}
            <Minimize className="cursor-pointer" onClick={closeModal} />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl mb-2 font-semibold">{data.title ?? ""}</h2>

          {edit ? (
            <textarea
              ref={descriptionRef}
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="w-full h-full resize-none outline-none text-gray-700"
            />
          ) : (
            <p className="w-full h-full overflow-y-auto text-gray-700">
              {data.description ?? ""}
            </p>
          )}
        </div>

        <div className="text-right text-gray-400">{data.date ?? ""}</div>
      </div>
    </div>
  );
}

export default ReviewWindow;
