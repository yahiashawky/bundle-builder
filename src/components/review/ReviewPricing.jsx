import { formatCurrency } from "../../utils/helper";

function ReviewPricing({ totals }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-start">
        <div className="h-[120px] w-[120px] rounded-full bg-[#5B4CF0]" />

        <div className="text-right">
          <p className="text-[18px] text-[#98A2B3] line-through">
            {formatCurrency(totals.compareSubtotal)}
          </p>

          <h2 className="text-[42px] font-bold text-[#5B4CF0]">
            {formatCurrency(totals.subtotal)}
          </h2>
        </div>
      </div>

      <p className="mt-5 text-center text-[#00B388]">
        Congrats! You're saving {formatCurrency(totals.savings)}
      </p>
    </div>
  );
}

export default ReviewPricing;
