import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

function AccordionItem({ step }) {
  const isOpen = step.id === 1;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <AccordionHeader step={step} isOpen={isOpen} />

      {isOpen && <AccordionContent step={step} />}
    </div>
  );
}

export default AccordionItem;
