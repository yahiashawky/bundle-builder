import { useState } from "react";
import steps from "../../data/steps";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [openStep, setOpenStep] = useState(1);

  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <AccordionItem
          key={step.id}
          step={step}
          isOpen={openStep === step.id}
          setOpenStep={setOpenStep}
        />
      ))}
    </div>
  );
}

export default Accordion;
