import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

function AccordionItem({ step }) {
  return (
    <div className="rounded-2xl border bg-white">
      <AccordionHeader step={step} />

      <AccordionContent products={step.products} />
    </div>
  );
}

export default AccordionItem;
