import { formatCurrency } from "../../utils/helper";

function ProductPrice({
  price,
  compareAtPrice,
  variant = "card",
  suffix = "",
}) {
  const isReview = variant === "review";
  console.log({
    price,
    compareAtPrice,
  });

  const isFree = price === 0;

  return (
    <div
      className={`flex items-center gap-2 ${
        isReview ? "justify-end" : "justify-end"
      }`}
    >
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
