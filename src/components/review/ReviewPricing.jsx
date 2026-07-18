import { formatCurrency } from "../../utils/helper";

function ReviewPricing({ totals }) {
  return (
    <div className="mb-5">
      {/*
        Mobile layout  : guarantee badge sits to the left, pricing stack to the right
        Desktop layout : "as low as" tag on left, pricing totals on right (no badge)
      */}

      {/* Mobile row: badge + pricing */}
      <div className="flex items-center gap-4 md:hidden">
        <img
          src="/images/products/guarantee_badge.png"
          alt="100% satisfaction guarantee"
          className="h-[90px] w-[90px] shrink-0"
        />

        <div className="flex flex-col gap-1">
          <div className="self-end rounded-[3px] bg-[#5B4CF0] px-3 py-1">
            <span className="text-[#ffff] text-[13px] font-medium tracking-[-0.05em]">
              as low as $19.19/mo
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[18px] text-[#6F7882] line-through tracking-[0.25px] font-normal">
              {formatCurrency(totals.compareSubtotal)}
            </span>

            <span className="text-[24px] font-medium text-[#4E2FD2] tracking-[-0.0013em]">
              {formatCurrency(totals.subtotal)}
            </span>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet row: "as low as" tag + totals */}
      <div className="hidden md:flex items-center justify-between gap-3">
        <div className="rounded-[3px] bg-[#5B4CF0] px-4 py-1.5">
          <h4 className="text-[#ffff] text-[16px] font-medium tracking-[-0.05em]">
            as low as $19.19/mo
          </h4>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="text-[22px] text-[#6F7882] line-through tracking-[0.25px] font-normal">
            {formatCurrency(totals.compareSubtotal)}
          </span>

          <span className="text-[28px] font-medium text-[#4E2FD2] tracking-[-0.0013em]">
            {formatCurrency(totals.subtotal)}
          </span>
        </div>
      </div>

      <p className="mt-4 text-center text-[14px] text-[#0AA288] tracking-[-0.06px] leading-[100%] font-medium">
        Congrats! You're saving {formatCurrency(totals.savings)} on your
        security bundle!
      </p>
    </div>
  );
}

export default ReviewPricing;
