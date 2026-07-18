import { ChevronDown, ChevronUp } from "lucide-react";
import useBundleStore from "../../store/bundleStore";
import { getSelectedProducts } from "../../store/selectors";

function AccordionHeader({ step, isOpen, onClick }) {
  const selectedCount = useBundleStore((state) =>
    getSelectedProducts(state, step.products),
  );

  return (
    <div className="bg-white">
      {/* Step label */}
      <div className="px-4 md:px-6.25 pt-4 pb-3">
        <p className="text-[11px] uppercase tracking-[2px] text-[#667085]">
          STEP {step.id} OF 4
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E4E7EC]" />

      {/* Header button */}
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between px-4 md:px-6.25 py-3.5 md:py-4.5 text-left"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full shrink-0">
            <img
              src={step.icon}
              alt={step.title}
              className="h-5 w-5 md:h-6 md:w-6 object-contain"
            />
          </div>

          <h2 className="text-[20px] md:text-[24px] xl:text-[28px] font-bold text-[#101828]">
            {step.title}
          </h2>
        </div>

        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <span className="text-[13px] md:text-[14px] text-[#4E2FD2]">
            {selectedCount} selected
          </span>

          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>
    </div>
  );
}

export default AccordionHeader;
