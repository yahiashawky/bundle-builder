import { memo, useCallback } from "react";
import useBundleStore from "../../store/bundleStore";
import { getVariantQuantity } from "../../store/selectors";

import ProductBadge from "./ProductBadge";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import QuantityStepper from "./QuantityStepper";
import VariantSelector from "./VariantSelector";

function ProductCard({ product }) {
  const increment = useBundleStore((state) => state.increment);
  const decrement = useBundleStore((state) => state.decrement);
  const selectVariant = useBundleStore((state) => state.selectVariant);
  const toggleProduct = useBundleStore((state) => state.toggleProduct);

  const selectedVariant = useBundleStore(
    (state) =>
      state.selectedVariants[product.id] ??
      product.variants?.[0]?.id ??
      "default",
  );

  const quantity = useBundleStore((state) =>
    getVariantQuantity(state, product.id, selectedVariant),
  );

  const isSelected = useBundleStore((state) => {
    const item = state.cart[product.id];
    if (!item) return false;
    return Object.values(item.variants || {}).some((qty) => qty > 0);
  });

  const showStepper = product.category !== "plans";

  const handleToggle = useCallback(
    () => toggleProduct(product.id),
    [toggleProduct, product.id],
  );

  const handleIncrement = useCallback(
    () => increment(product.id, selectedVariant),
    [increment, product.id, selectedVariant],
  );

  const handleDecrement = useCallback(
    () => decrement(product.id, selectedVariant),
    [decrement, product.id, selectedVariant],
  );

  const handleSelectVariant = useCallback(
    (variantId) => selectVariant(product.id, variantId),
    [selectVariant, product.id],
  );

  return (
    <article
      className={`${!showStepper ? "cursor-pointer" : ""} w-full min-h-[260px] rounded-[10px] border ${isSelected ? "border-2 border-[#5B4CF0]" : "border-[#D9D9D9]"} bg-white p-2.75 flex flex-col gap-3.25 transition-all`}
      onClick={!showStepper ? handleToggle : undefined}
    >
      {/* Badge */}
      <ProductBadge badge={product.badge} />

      {/* Image */}
      <ProductImage image={product.image} title={product.title} />

      {/* Title + Description + Learn More */}
      <ProductInfo
        title={product.title}
        description={product.description}
        learnMore={product.learnMore}
      />

      {/* Variants */}
      {product.variants?.length > 0 && (
        <VariantSelector
          variants={product.variants}
          selectedVariant={selectedVariant}
          onSelectVariant={handleSelectVariant}
        />
      )}

      {/* Bottom */}
      <div className="mt-auto flex h-7 items-center justify-between">
        {showStepper && (
          <QuantityStepper
            value={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        )}

        <ProductPrice
          price={product.price}
          compareAtPrice={product.compareAtPrice}
          suffix={product.category === "plans" ? "/mo" : ""}
        />
      </div>
    </article>
  );
}

export default memo(ProductCard);
