import { useCallback } from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

function AccordionItem({ step, isOpen, setOpenStep }) {
  const handleOpen = useCallback(
    () => setOpenStep(step.id),
    [setOpenStep, step.id],
  );

  return (
    <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-white">
      <AccordionHeader step={step} isOpen={isOpen} onClick={handleOpen} />

      {isOpen && (
        <AccordionContent
          products={step.products}
          step={step}
          setOpenStep={setOpenStep}
        />
      )}
    </div>
  );
}

export default AccordionItem;
