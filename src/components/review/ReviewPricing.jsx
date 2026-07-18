import { formatCurrency } from "../../utils/helper";

function ReviewPricing({ totals }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between gap-3">
        <div className="rounded-[3px] bg-[#5B4CF0] px-4 py-1.5">
          <h4 className="text-[#ffff] text-[16px] font-normal tracking-[-5%]">as low as $19.19/mo</h4>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[22px] text-[#6F7882] line-through tracking-[0.25px] font-normal">
            {formatCurrency(totals.compareSubtotal)}
          </span>

          <span className="text-[28px] font-normal text-[#4E2FD2] tracking-[-0.13%]">
            {formatCurrency(totals.subtotal)}
          </span>
        </div>
      </div>

      <p className="mt-2 text-center text-[18px] text-[#00B388]">
        Congrats! You're saving {formatCurrency(totals.savings)} on your security bundle!
      </p>
    </div>
  );
}

export default ReviewPricing;
