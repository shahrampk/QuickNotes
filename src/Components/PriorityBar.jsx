import Button from "./Button";

function PriorityBar() {
  return (
    <div className="gap-3 hidden md:flex">
      <Button name={"All"} />
      <Button name={"High"} />
      <Button name={"Intermediate"} />
      <Button name={"Low"} />
    </div>
  );
}

export default PriorityBar;
