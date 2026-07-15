import steps from "../../data/steps";
import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <AccordionItem key={step.id} step={step} />
      ))}
    </div>
  );
}

export default Accordion;
