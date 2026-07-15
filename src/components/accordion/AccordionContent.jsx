import ProductCard from "../product/ProductCard";

function AccordionContent({ products }) {
  return (
    <div className="grid grid-cols-5 gap-4 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AccordionContent;
