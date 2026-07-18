import { memo, useCallback } from "react";
import useBundleStore from "../../store/bundleStore";
import ProductPrice from "../product/ProductPrice";
import QuantityStepper from "../product/QuantityStepper";

function ReviewItem({ item }) {
  const increment = useBundleStore((state) => state.increment);
  const decrement = useBundleStore((state) => state.decrement);
  const variantId = item.variant?.id ?? "default";
  const showStepper = item.category !== "plans" && item.category !== "shipping";

  const handleIncrement = useCallback(
    () => increment(item.productId, variantId),
    [increment, item.productId, variantId],
  );

  const handleDecrement = useCallback(
    () => decrement(item.productId, variantId),
    [decrement, item.productId, variantId],
  );

  return (
    <div className="flex items-center justify-between py-2">
      {/* Left */}
      <div className="flex items-center gap-3 md:gap-4 min-w-0">
        <img
          src={item.image}
          alt={item.title}
          className="h-10.25 w-10.25 rounded-md border border-[#E4E7EC] bg-white object-contain p-1 shrink-0"
        />

        <div className="space-y-1 min-w-0">
          {item.title === "Cam Unlimited" ? (
            <h4 className="text-[14px] md:text-[16px] font-semibold leading-tight">
              Cam <span className="text-[#4E2FD2]">Unlimited</span>
            </h4>
          ) : (
            <h4 className="text-[14px] md:text-[18px] font-medium text-[#0B0D10] tracking-[0.005em] leading-4">
              {item.title}
            </h4>
          )}

          {item.variant && (
            <p className="text-[12px] md:text-[14px] text-[#667085]">
              {item.variant.label}
            </p>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 md:gap-6 shrink-0">
        {showStepper && (
          <QuantityStepper
            value={item.quantity}
            size="compact"
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        )}

        <ProductPrice
          variant="review"
          price={item.total}
          compareAtPrice={item.totalCompare}
          suffix={item.category === "plans" ? "/mo" : ""}
        />
      </div>
    </div>
  );
}

export default memo(ReviewItem);
