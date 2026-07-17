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

    return Object.values(item.variants || {}).some((quantity) => quantity > 0);
  });

  return (
    <article
      className={`w-[224.6px] h-[331.1px] rounded-[10px]  ${isSelected ? "border-2 border-[#5B4CF0]" : "border-[#D9D9D9]"} bg-white p-2.75 flex flex-col gap-3.25 transition-all `}
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
          onSelectVariant={(variantId) => selectVariant(product.id, variantId)}
        />
      )}

      {/* Bottom */}
      <div className="mt-auto flex h-7 items-center justify-between">
        <QuantityStepper
          value={quantity}
          onIncrement={() => increment(product.id, selectedVariant)}
          onDecrement={() => decrement(product.id, selectedVariant)}
        />

        <ProductPrice
          price={product.price}
          compareAtPrice={product.compareAtPrice}
        />
      </div>
    </article>
  );
}

export default ProductCard;
