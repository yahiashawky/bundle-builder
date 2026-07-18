import { formatCurrency } from "../../utils/helper";

function ProductPrice({ price, compareAtPrice, variant = "card" }) {
  const isReview = variant === "review";
  console.log({
    price,
    compareAtPrice,
  });

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
              : "text-[16px] text-[#98A2B3]"
          }`}
        >
          {formatCurrency(compareAtPrice)}
        </span>
      )}

      <span
        className={`${
          isReview ? "text-[16px] text-[#6941C6]" : "text-[16px] text-[#5B4CF0]"
        }`}
      >
        {formatCurrency(price)}
      </span>
    </div>
  );
}

export default ProductPrice;
