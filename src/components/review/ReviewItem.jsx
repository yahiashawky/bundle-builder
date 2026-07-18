import useBundleStore from "../../store/bundleStore";
import ProductPrice from "../product/ProductPrice";
import QuantityStepper from "../product/QuantityStepper";

function ReviewItem({ item }) {
  const increment = useBundleStore((state) => state.increment);
  const decrement = useBundleStore((state) => state.decrement);
  const variantId = item.variant?.id ?? "default";
  const showStepper = item.category !== "plans" && item.category !== "shipping";

  return (
    <div className="flex items-center justify-between py-4">
      {/* Left */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="h-14 w-14 rounded-md border border-[#E4E7EC] bg-white object-contain p-1"
        />

        <div className="space-y-1">
          <h4 className="text-[16px] font-semibold text-[#101828]">
            {item.title}
          </h4>

          {item.variant && (
            <p className="text-[14px] text-[#667085]">{item.variant.label}</p>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {showStepper && (
          <QuantityStepper
            value={item.quantity}
            size="compact"
            onIncrement={() => increment(item.productId, variantId)}
            onDecrement={() => decrement(item.productId, variantId)}
          />
        )}

        <ProductPrice
          variant="review"
          price={item.total}
          compareAtPrice={item.totalCompare}
        />
      </div>
    </div>
  );
}

export default ReviewItem;
