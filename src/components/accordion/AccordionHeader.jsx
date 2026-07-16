import { ChevronDown, ChevronUp } from "lucide-react";

function AccordionHeader({ step, isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between border-b border-[#E4E7EC] bg-white px-[25px] py-[22px] text-left"
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full">
          <img
            src={step.icon}
            alt={step.title}
            className="h-6 w-6 object-contain"
          />
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[2px] text-[#667085]">
            STEP {step.id} OF 4
          </p>

          <h2 className="mt-1 text-[28px] font-bold text-[#101828]">
            {step.title}
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-[14px] text-[#667085]">0 selected</span>

        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
    </button>
  );
}

export default AccordionHeader;
