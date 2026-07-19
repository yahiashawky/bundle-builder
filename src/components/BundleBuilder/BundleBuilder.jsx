import Accordion from "../accordion/Accordion";
import ReviewPanel from "../review/ReviewPanel";

function BundleBuilder() {
  return (
    <section className="px-4 pt-6 pb-10 md:px-8 md:pt-10 xl:px-26.25 xl:pt-12.25 xl:pb-15.5">
      <h1 className="md:hidden text-[32px] font-bold text-[#101828] text-center mb-6">
        Let's get started!
      </h1>

      {/* Tablet only */}
      <div className="lg:flex lg:items-start lg:gap-[13px] xl:block">
        <div className="flex-1 min-w-0">
          <Accordion />
        </div>

        <div className="lg:w-[320px] xl:w-auto lg:shrink-0">
          <ReviewPanel />
        </div>
      </div>
    </section>
  );
}

export default BundleBuilder;
