import ProductBadge from "./ProductBadge";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import QuantityStepper from "./QuantityStepper";
import VariantSelector from "./VariantSelector";

function ProductCard({ product }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6">
      <ProductBadge badge={product.badge} />

      <ProductImage image={product.image} title={product.title} />

      <ProductInfo
        title={product.title}
        description={product.description}
        learnMore={product.learnMore}
      />

      {product.variants?.length > 0 && (
        <VariantSelector variants={product.variants} />
      )}

      <div className="mt-6 flex items-center justify-between">
        <QuantityStepper />

        <ProductPrice
          price={product.price}
          compareAtPrice={product.compareAtPrice}
        />
      </div>
    </article>
  );
}

export default ProductCard;
