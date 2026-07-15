function ProductInfo({ title, description, learnMore }) {
  return (
    <div className="mt-4 space-y-2">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      <p className="text-sm leading-6 text-gray-500">{description}</p>

      <a
        href={learnMore}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-[#00AEEF] hover:underline"
      >
        Learn More
      </a>
    </div>
  );
}

export default ProductInfo;
