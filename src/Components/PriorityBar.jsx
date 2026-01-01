import Button from "./Button";

function PriorityBar() {
  return (
    <div className="flex gap-3">
      <Button name={"All"} />
      <Button name={"High"} />
      <Button name={"Intermediate"} />
      <Button name={"Low"} />
    </div>
  );
}

export default PriorityBar;
