import Button from "./Button";

function PriorityBar() {
  return (
    <div>
      <div className="flex gap-3">
        <Button name={"All"} />
        <Button name={"High"} />
        <Button name={"Intermediate"} />
        <Button name={"Low"} />
      </div>
    </div>
  );
}

export default PriorityBar;
