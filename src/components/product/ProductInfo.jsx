function ProductInfo({ title, description, learnMore }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[16px] font-semibold leading-none tracking-[0.6px] text-[#101828]">
        {title}
      </h3>

      <p className="text-[14px] leading-[130%] tracking-[0.6px] text-[#667085]">
        {description}
      </p>

      <a
        href={learnMore}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-[14px] font-medium tracking-[0.6px] text-[#4F46E5] hover:underline"
      >
        Learn More
      </a>
    </div>
  );
}

export default ProductInfo;
