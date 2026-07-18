import ProductCard from "../product/ProductCard";
import NextStepButton from "./NextStepButton";

function AccordionContent({ products, step, setOpenStep }) {
  return (
    <div className="bg-[#EEF4FF] px-3.75 py-5">
      {/*
        Grid columns:
          mobile  (≤767px)  : 1 col
          tablet  (768–1023): 2 cols
          desktop (≥1280px) : 5 cols
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3.75">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <NextStepButton step={step} setOpenStep={setOpenStep} />
    </div>
  );
}

export default AccordionContent;
