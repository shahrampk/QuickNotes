import { BriefcaseBusiness, Calendar, LayoutGrid, User } from "lucide-react";
import useNotesContext from "../Context/NotesContext";

function CategoriesBar() {
  const { setSelectedCategory, selectedCategory } = useNotesContext();
  return (
    <div className="flex flex-col gap-4 bg-[#845ef7] row-span-8 pt-5">
      <button
        onClick={(e) => setSelectedCategory("All")}
        className={`${
          selectedCategory === "All"
            ? "bg-[#6741d9] text-white tip"
            : "hover:bg-[#845ef7] hover:text-white"
        } cursor-pointer text-gray-300 flex gap-3 text-lg items-center relative px-4 py-3 z-10 overflow-y-clip hover:text-white`}
      >
        <LayoutGrid /> <span className="hidden md:block">All</span>
      </button>
      <button
        onClick={(e) => setSelectedCategory("Daily")}
        className={`${
          selectedCategory === "Daily"
            ? "bg-[#6741d9] text-white tip"
            : "hover:bg-[#845ef7] hover:text-white"
        } cursor-pointer text-gray-300 flex gap-3 text-lg items-center relative px-4 py-3 z-10 overflow-y-clip hover:text-white`}
      >
        <Calendar /> <span className="hidden md:block">Daily</span>
      </button>
      <button
        onClick={(e) => setSelectedCategory("Personal")}
        className={`${
          selectedCategory === "Personal"
            ? "bg-[#6741d9] text-white tip"
            : "hover:bg-[#845ef7] hover:text-white"
        } cursor-pointer text-gray-300 flex gap-3 text-lg items-center relative px-4 py-3 z-10 overflow-y-clip hover:text-white`}
      >
        <User /> <span className="hidden md:block">Personal</span>
      </button>
      <button
        onClick={(e) => setSelectedCategory("Business")}
        className={`${
          selectedCategory === "Business"
            ? "bg-[#6741d9] text-white tip"
            : "hover:bg-[#845ef7] hover:text-white"
        } cursor-pointer text-gray-300 flex gap-3 text-lg items-center relative px-4 py-3 z-10 overflow-y-clip hover:text-white`}
      >
        <BriefcaseBusiness /> <span className="hidden md:block">Business</span>
      </button>
    </div>
  );
}

export default CategoriesBar;
