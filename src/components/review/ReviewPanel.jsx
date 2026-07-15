import EmptyReview from "./EmptyReview";
import OrderSummary from "./OrderSummary";
import ReviewGroup from "./ReviewGroup";
import ReviewItem from "./ReviewItem";

function ReviewPanel() {
  return (
    <aside
      className="
      sticky
      top-8
      rounded-2xl
      border
      p-6
      shadow-sm
      bg-[#edf4ff]
    "
    >
      <h2 className="mb-6 text-2xl font-semibold">Your Security System</h2>

      {/* مؤقتًا */}
      <ReviewGroup title="Cameras">
        <ReviewItem image="" title="" variant="" price="" />
      </ReviewGroup>

      <div className="my-6" />

      <OrderSummary />
    </aside>
  );
}

export default ReviewPanel;
