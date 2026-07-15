function ProductImage({ image, title }) {
  return (
    <div className="flex justify-center py-6">
      <img src={image} alt={title} className="h-44 w-auto object-contain" />
    </div>
  );
}

export default ProductImage;
