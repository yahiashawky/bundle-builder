import ProductCard from "../product/ProductCard";
import NextStepButton from "./NextStepButton";

function AccordionContent({ products, step }) {
  return (
    <div className="bg-[#edf4ff] p-4">
      <div className="grid grid-cols-5 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <NextStepButton step={step} />
    </div>
  );
}

export default AccordionContent;
