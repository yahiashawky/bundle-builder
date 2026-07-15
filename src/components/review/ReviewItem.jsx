function ReviewItem({ image, title, variant, price }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={image}
        alt={title}
        className="h-16 w-16 rounded-lg border object-cover"
      />

      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>

        <p className="text-sm text-gray-500">{variant}</p>
      </div>

      <span className="font-semibold">${price}</span>
    </div>
  );
}
export default ReviewItem;