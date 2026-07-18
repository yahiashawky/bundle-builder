import { formatCurrency } from "../../utils/helper";

function ProductPrice({
  price,
  compareAtPrice,
  variant = "card",
  suffix = "",
}) {
  const isFree = price === 0;

  const isReview = variant === "review";

  return (
    <div className="flex items-center gap-2 justify-end">
      {compareAtPrice && (
        <span
          className={`line-through ${
            isReview
              ? "text-[16px] text-[#98A2B3]"
              : "text-[16px] text-[#D8392B]"
          }`}
        >
          {formatCurrency(compareAtPrice)} {suffix}
        </span>
      )}

      <span
        className={`${
          isReview ? "text-[16px] text-[#4E2FD2]" : "text-[16px] text-[#575757]"
        }`}
      >
        {isFree ? "FREE" : formatCurrency(price)} {suffix}
      </span>
    </div>
  );
}

export default ProductPrice;
