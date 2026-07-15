import Accordion from "../accordion/Accordion";
import ReviewPanel from "../review/ReviewPanel";

function BundleBuilder() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-12 gap-8 p-8">
      {/* Left Side */}
      <div className="col-span-8">
        <Accordion />
      </div>

      {/* Right Side */}
      <div className="col-span-4">
        <ReviewPanel />
      </div>
    </section>
  );
}

export default BundleBuilder;
