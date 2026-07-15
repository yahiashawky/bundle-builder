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
    (state) => state.selectedVariants[product.id] || product.variants?.[0]?.id,
  );

  const quantity = useBundleStore((state) =>
    getVariantQuantity(state, product.id, selectedVariant),
  );

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 transition-all">
      <ProductBadge badge={product.badge} />

      <ProductImage image={product.image} title={product.title} />

      <ProductInfo
        title={product.title}
        description={product.description}
        learnMore={product.learnMore}
      />

      {product.variants?.length > 0 && (
        <div className="mt-5">
          <VariantSelector
            variants={product.variants}
            selectedVariant={selectedVariant}
            onSelectVariant={(variantId) =>
              selectVariant(product.id, variantId)
            }
          />
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
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
