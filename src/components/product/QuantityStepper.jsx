import { Minus, Plus } from "lucide-react";

function QuantityStepper({
  value = 0,
  onIncrement,
  onDecrement,
  min = 0,
  size = "default",
}) {
  const compact = size === "compact";
  return (
    <div
      className={`flex items-center justify-between rounded gap-2.5 ${
        compact ? "h-8 w-[80px] px-2" : "h-[28px] w-[80px] px-3"
      }`}
    >
      <button
        type="button"
        onClick={onDecrement}
        disabled={value <= min}
        className="flex h-5 w-5 items-center justify-center text-[#344054] disabled:cursor-not-allowed disabled:opacity-40 rounded border-2 border-[#E6EBF0] p-0.5"
      >
        <Minus size={compact ? 12 : 12} />
      </button>

      <span className="text-[16px] leading-5 text-[#101828]">{value}</span>

      <button
        type="button"
        onClick={onIncrement}
        className="flex h-5 w-5 items-center justify-center text-[#344054] disabled:cursor-not-allowed disabled:opacity-40 rounded border-2 border-[#E6EBF0] p-0.5 bg-[#F0F4F7]"
      >
        <Plus size={compact ? 12 : 12} />
      </button>
    </div>
  );
}

export default QuantityStepper;
