import Accordion from "../accordion/Accordion";
import ReviewPanel from "../review/ReviewPanel";

function BundleBuilder() {
  return (
    <section className="flex flex-col gap-3.25 p-24 w-360 max-h-[1606] ">
      {/* Left Side */}
      <div className="">
        <Accordion />
      </div>

      {/* Right Side */}
      <div className="">
        <ReviewPanel />
      </div>
    </section>
  );
}

export default BundleBuilder;
