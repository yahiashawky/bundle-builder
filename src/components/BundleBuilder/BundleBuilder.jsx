import Accordion from "../accordion/Accordion";
import ReviewPanel from "../review/ReviewPanel";

function BundleBuilder() {
  return (
    <section className="px-4 pt-6 pb-10 md:px-8 md:pt-10 xl:px-26.25 xl:pt-12.25 xl:pb-15.5">
      {/*
        "Let's get started!" heading:
        Shown only on mobile (≤767px) as a large intro title above the steps.
        Hidden on tablet and desktop.
      */}
      <h1 className="md:hidden text-[32px] font-bold text-[#101828] text-center mb-6">
        Let's get started!
      </h1>

      <Accordion />

      <ReviewPanel />
    </section>
  );
}

export default BundleBuilder;
