import { Minus, Plus } from "lucide-react";

function QuantityStepper({ value = 0, onIncrement, onDecrement, min = 0 }) {
  return (
    <div className="flex items-center rounded-full border border-gray-300">
      <button
        type="button"
        onClick={onDecrement}
        disabled={value <= min}
        className="flex h-10 w-10 items-center justify-center disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Minus size={18} />
      </button>

      <span className="min-w-8 text-center text-sm font-semibold">{value}</span>

      <button
        type="button"
        onClick={onIncrement}
        className="flex h-10 w-10 items-center justify-center"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}

export default QuantityStepper;
