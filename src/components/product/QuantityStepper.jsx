import { Minus, Plus } from "lucide-react";

function QuantityStepper({ value = 0, onIncrement, onDecrement, min = 0 }) {
  return (
    <div className="flex h-7 w-20 items-center justify-between rounded-sm border border-[#D0D5DD] px-2">
      <button
        type="button"
        onClick={onDecrement}
        disabled={value <= min}
        className="flex h-4 w-4 items-center justify-center text-[#344054] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Minus size={10} strokeWidth={2.2} />
      </button>

      <span className="text-[16px] leading-5 text-[#101828]">{value}</span>

      <button
        type="button"
        onClick={onIncrement}
        className="flex h-4 w-4 items-center justify-center text-[#344054]"
      >
        <Plus size={10} strokeWidth={2.2} />
      </button>
    </div>
  );
}

export default QuantityStepper;
