import { formatCurrency } from "../../utils/helper";

function ProductPrice({ price, compareAtPrice }) {
  return (
    <div className="flex w-28 items-center justify-end gap-0.75">
      {compareAtPrice && (
        <span className="text-[16px] font-normal leading-none tracking-[0.6px] text-[#D8392B] line-through">
          {formatCurrency(compareAtPrice)}
        </span>
      )}

      <span className="text-[16px]  font-normal leading-none tracking-[0.6px] text-[#575757]">
        {formatCurrency(price)}
      </span>
    </div>
  );
}

export default ProductPrice;
