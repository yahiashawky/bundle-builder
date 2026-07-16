import Accordion from "../accordion/Accordion";
import ReviewPanel from "../review/ReviewPanel";

function BundleBuilder() {
  return (
    <section className="px-26.25 pt-12.25 pb-15.5">
      <Accordion />

      <ReviewPanel />
    </section>
  );
}

export default BundleBuilder;
