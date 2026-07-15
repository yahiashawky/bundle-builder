import { formatCurrency } from "../../utils/helper";
function ProductPrice({ price, compareAtPrice }) {
  return (
    <div className="flex flex-col items-end">
      {compareAtPrice && (
        <span className="text-sm text-gray-400 line-through">
          {formatCurrency(compareAtPrice)}
        </span>
      )}

      <span className="text-xl font-bold text-gray-900">
        {formatCurrency(price)}
      </span>
    </div>
  );
}

export default ProductPrice;