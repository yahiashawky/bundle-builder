import { ChevronDown, ChevronUp } from "lucide-react";

function AccordionHeader({ step, isOpen }) {
  return (
    <div className="flex items-center justify-between p-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Step {step.id} of 4
        </p>

        <h2 className="mt-2 text-2xl font-semibold">{step.title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">0 selected</span>

        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
    </div>
  );
}

export default AccordionHeader;
