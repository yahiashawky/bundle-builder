import ProductCard from "../product/ProductCard";

function AccordionContent({ step }) {
  return (
    <div className="space-y-6 border-t border-gray-100 p-6">
      {step.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <button className="rounded-xl bg-black px-6 py-3 text-white">Next</button>
    </div>
  );
}

export default AccordionContent;
