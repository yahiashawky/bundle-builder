import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

function AccordionItem({ step, isOpen, setOpenStep }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-white">
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
