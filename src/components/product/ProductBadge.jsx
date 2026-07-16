function ProductBadge({ badge }) {
  if (!badge) return null;

  return (
    <span className="w-fit inline-flex h-3.75 items-center rounded-[10px] bg-[#4E2FD2] px-1.5 text-[12px] font-normal text-[#ffff]">
      {badge}
    </span>
  );
}

export default ProductBadge;
