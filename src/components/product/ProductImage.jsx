function ProductImage({ image, title }) {
  return (
    <div className="flex h-29.25 items-center justify-center overflow-hidden rounded-[5px]">
      <img
        src={image}
        alt={title}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

export default ProductImage;
