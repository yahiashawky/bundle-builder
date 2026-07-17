import ReviewHeader from "./ReviewHeader";
import ReviewSection from "./ReviewSection";
import ReviewPricing from "./ReviewPricing";
import ReviewCheckout from "./ReviewCheckout";
import useBundleStore from "../../store/bundleStore";
import { getReviewData, getBundleTotals } from "../../store/selectors";
import { useMemo } from "react";

function ReviewPanel() {
  const cart = useBundleStore((state) => state.cart);

  const reviewData = useMemo(() => getReviewData({ cart }), [cart]);
  console.log(reviewData)

  const totals = useMemo(() => getBundleTotals(reviewData), [reviewData]);
  return (
    <section
      className="
        mt-6
        rounded-[10px]
        bg-[#EDF4FF]
        px-8
        py-8
      "
    >
      <div className="grid grid-cols-[1fr_520px] gap-10">
        {/* Left */}
        <div className="space-y-6">
          <ReviewHeader />

          <ReviewSection title="CAMERAS" items={reviewData.cameras} />

          <ReviewSection title="SENSORS" items={reviewData.sensors} />

          <ReviewSection title="ACCESSORIES" items={reviewData.accessories} />

          <ReviewSection title="PLAN" items={reviewData.plans} />
          <ReviewSection title="SHIPPING" items={reviewData.shipping} />
        </div>

        {/* Right */}

        <div className="flex flex-col">
          <ReviewPricing totals={totals} />

          <ReviewCheckout />
        </div>
      </div>
    </section>
  );
}

export default ReviewPanel;
