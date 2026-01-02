import { EllipsisVertical } from "lucide-react";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

function PriorityBarMobile() {
  const [toggle, setToggle] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    if (!toggle) return;

    const handleClickOutside = (e) => {
      if (barRef.current && !barRef.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggle]);

  return (
    <div className="relative md:hidden">
      <div
        className="toggle-btn cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // important
          setToggle((prev) => !prev);
        }}
      >
        <EllipsisVertical />
      </div>

      <div
        ref={barRef}
        className={`priority-bar flex flex-col gap-1 md:gap-3 absolute z-50 transition-opacity duration-200 rounded bg-white p-2 shadow-xl translate-x-5 ${
          toggle ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Button name="All" />
        <Button name="High" />
        <Button name="Intermediate" />
        <Button name="Low" />
      </div>
    </div>
  );
}

export default PriorityBarMobile;
