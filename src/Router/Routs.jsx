import { Route, Routes } from "react-router";
import { Achieve, Home, New_Note, Trash } from "../Pages";

function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-note" element={<New_Note />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/achieved-notes" element={<Achieve />} />
    </Routes>
  );
}

export default Routs;
