import ReviewItem from "./ReviewItem";

/**
 * ReviewSection renders a titled group of review items.
 *
 * `mobileTitle` — optional override for the section label shown on mobile.
 * On desktop the standard `title` is always used.
 */
function ReviewSection({ title, mobileTitle, items = [] }) {
  return (
    <section className="border-t border-[#D0D5DD] pt-3">
      <p className="mb-4 text-[11px] uppercase tracking-[1.5px] text-[#98A2B3]">
        {/* Show mobileTitle on mobile, title on larger screens */}
        {mobileTitle ? (
          <>
            <span className="md:hidden">{mobileTitle}</span>
            <span className="hidden md:inline">{title}</span>
          </>
        ) : (
          title
        )}
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
