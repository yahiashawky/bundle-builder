function ProductBadge({ badge }) {
  if (!badge) return null;

  return (
    <span className="inline-flex rounded-full bg-[#D9F2E3] px-3 py-1 text-xs font-semibold text-[#00875A]">
      {badge}
    </span>
  );
}

export default ProductBadge;
