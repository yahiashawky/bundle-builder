import ReviewHeader from "./ReviewHeader";
import ReviewSection from "./ReviewSection";
import ReviewPricing from "./ReviewPricing";
import ReviewCheckout from "./ReviewCheckout";
import useBundleStore from "../../store/bundleStore";
import { getReviewData, getBundleTotals } from "../../store/selectors";
import { useMemo } from "react";
import ReviewGuarantee from "./ReviewGuarantee";

function ReviewPanel() {
  const cart = useBundleStore((state) => state.cart);

  const reviewData = useMemo(() => getReviewData({ cart }), [cart]);
  const totals = useMemo(() => getBundleTotals(reviewData), [reviewData]);

  return (
    <section
      className="
        mt-6
        rounded-[10px]
        bg-[#EDF4FF]
        px-4
        py-6
        md:px-6
        md:py-8
        xl:px-8
        xl:py-8
      "
    >
      {/*
        Layout:
          Mobile  (≤767px)  : single column, all content stacked
          Desktop (≥768px)  : two columns — sections left, sidebar right
      */}
      <div className="flex flex-col xl:grid xl:grid-cols-[1fr_520px] xl:gap-10">
        {/* Left column — review sections */}
        <div className="space-y-6">
          <ReviewHeader />

          <ReviewSection title="CAMERAS" items={reviewData.cameras} />

          <ReviewSection title="SENSORS" items={reviewData.sensors} />

          <ReviewSection title="ACCESSORIES" items={reviewData.accessories} />

          {/* "PLAN" on desktop, "HOME MONITORING PLAN" on mobile */}
          <ReviewSection
            title="PLAN"
            mobileTitle="HOME MONITORING PLAN"
            items={reviewData.plans}
          />

          <ReviewSection title="SHIPPING" items={reviewData.shipping} />
        </div>

        {/* Right column — guarantee, pricing, checkout */}
        <div className="mt-8 md:mt-0 space-y-4">
          {/* Guarantee block — hidden on mobile (badge is in ReviewPricing on mobile) */}
          <ReviewGuarantee />

          <ReviewPricing totals={totals} />

          <ReviewCheckout />
        </div>
      </div>
    </section>
  );
}

export default ReviewPanel;
