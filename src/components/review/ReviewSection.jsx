import ReviewItem from "./ReviewItem";

function ReviewSection({ title, items = [] }) {
  return (
    <section className="border-t border-[#D0D5DD] pt-3">
      <p className="mb-4 text-[11px] uppercase tracking-[1.5px] text-[#98A2B3]">
        {title}
      </p>

      <div className="space-y-4">
        {items.map((item) => (
          <ReviewItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;
