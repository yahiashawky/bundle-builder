import data from "../../data/products.json";
import ProductCard from "../Product/ProductCard";

function BuilderSection() {
  return (
    <section className="space-y-6">
      {data.cameras.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default BuilderSection;
