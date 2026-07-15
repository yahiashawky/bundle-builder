function OrderSummary() {
  return (
    <div className="space-y-4 border-t pt-6">
      <div className="flex justify-between">
        <span>Shipping</span>

        <span>FREE</span>
      </div>

      <div className="flex justify-between font-semibold">
        <span>Total</span>

        <span>$25.98</span>
      </div>

      <button
        className="
        w-full
        rounded-xl
        bg-black
        py-3
        font-medium
        text-white
        transition
        hover:opacity-90
      "
      >
        Checkout
      </button>

      <button
        className="
        w-full
        text-sm
        text-gray-600
        underline
      "
      >
        Save my system for later
      </button>
    </div>
  );
}

export default OrderSummary;
