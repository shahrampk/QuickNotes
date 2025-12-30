import { Archive, CirclePlus, LayoutGrid, Trash2Icon } from "lucide-react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="row-span-7 col-start-1 bg-[#845ef7]">
      <ul className="flex flex-col gap-3 pt-7">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              `text-gray-300 ${
                isActive ? "tip bg-[#6741d9] text-white font-semibold" : null
              } flex gap-3 text-lg items-center relative px-4 py-3 z-10 overflow-y-clip hover:text-white`
            }
          >
            <LayoutGrid size={22} />
            All Notes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/daily"
            className={({ isActive }) =>
              `text-gray-300 ${
                isActive ? "tip bg-[#6741d9] text-white font-semibold" : null
              } flex gap-3 items-center text-lg relative px-4 py-3 z-10 overflow-y-clip hover:text-white`
            }
          >
            <CirclePlus size={22} /> Daily
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/personal"
            className={({ isActive }) =>
              `text-gray-300 ${
                isActive ? "tip bg-[#6741d9] text-white font-semibold" : null
              } flex gap-3 items-center text-lg relative px-4 py-3 z-10 overflow-y-clip hover:text-white`
            }
          >
            <Archive size={22} /> Personal
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/business"
            className={({ isActive }) =>
              `text-gray-300 ${
                isActive ? "tip bg-[#6741d9] text-white font-semibold" : null
              } flex gap-3 items-center text-lg relative px-4 py-3 z-10 overflow-y-clip hover:text-white`
            }
          >
            <Trash2Icon size={22} /> Business
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
