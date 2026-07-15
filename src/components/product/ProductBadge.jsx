function ProductBadge({ badge }) {
  if (!badge) return null;

  return (
    <span
      className="
        inline-flex
        h-4.75
        items-center
        rounded-[10px]
        bg-[#D9F2E3]
        px-1.5
        text-[11px]
        font-medium
        text-[#00875A]
      "
    >
      {badge}
    </span>
  );
}

export default ProductBadge;
