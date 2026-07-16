import ProductCard from "../product/ProductCard";
import NextStepButton from "./NextStepButton";

function AccordionContent({ products, step, setOpenStep }) {
  return (
    <div className="bg-[#EEF4FF] px-3.75 py-5">
      <div className="grid grid-cols-5 gap-3.75">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <NextStepButton step={step} setOpenStep={setOpenStep} />
    </div>
  );
}

export default AccordionContent;
