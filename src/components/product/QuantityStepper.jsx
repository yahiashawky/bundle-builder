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
      className={`flex items-center justify-between rounded border ${
        compact ? "h-8 w-[88px] px-2" : "h-10 w-[100px] px-3"
      }`}
    >
      <button
        type="button"
        onClick={onDecrement}
        disabled={value <= min}
        className="flex h-4 w-4 items-center justify-center text-[#344054] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Minus size={compact ? 12 : 15} />
      </button>

      <span className="text-[16px] leading-5 text-[#101828]">{value}</span>

      <button
        type="button"
        onClick={onIncrement}
        className="flex h-4 w-4 items-center justify-center text-[#344054]"
      >
        <Plus size={compact ? 12 : 15} />
      </button>
    </div>
  );
}

export default QuantityStepper;
