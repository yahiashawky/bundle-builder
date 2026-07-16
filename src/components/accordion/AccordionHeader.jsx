import { ChevronDown, ChevronUp } from "lucide-react";
import useBundleStore from "../../store/bundleStore";
import { getSelectedProducts } from "../../store/selectors";

function AccordionHeader({ step, isOpen, onClick }) {
  const selectedCount = useBundleStore((state) =>
    getSelectedProducts(state, step.products),
  );
  return (
    <div className="bg-white">
      {/* Step */}
      <div className="px-6.25 pt-4 pb-3">
        <p className="text-[11px] uppercase tracking-[2px] text-[#667085]">
          STEP {step.id} OF 4
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E4E7EC]" />

      {/* Header */}
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between px-6.25 py-4.5 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full">
            <img
              src={step.icon}
              alt={step.title}
              className="h-6 w-6 object-contain"
            />
          </div>

          <h2 className="text-[28px] font-bold text-[#101828]">{step.title}</h2>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[14px] text-[#4E2FD2]">
            {selectedCount} selected
          </span>

          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>
    </div>
  );
}

export default AccordionHeader;
