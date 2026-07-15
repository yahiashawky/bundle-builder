import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

function AccordionItem({ step, isOpen, setOpenStep }) {
  return (
    <div className="rounded-xl border">
      <AccordionHeader
        step={step}
        isOpen={isOpen}
        onClick={() => setOpenStep(step.id)}
      />

      {isOpen && <AccordionContent products={step.products} step={step} />}
    </div>
  );
}

export default AccordionItem;
