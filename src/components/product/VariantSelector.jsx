function VariantSelector({ variants, selectedVariant, onSelectVariant }) {
  return (
    <div className="flex h-[26px] gap-[6px]">
      {variants.map((variant) => {
        const active = selectedVariant === variant.id;

        return (
          <button
            key={variant.id}
            type="button"
            onClick={() => onSelectVariant(variant.id)}
            className={`
              flex
              h-6.5
              w-16.25
              items-center
              justify-center
              gap-1
              rounded-xs
              border
              px-0.75
              py-px
              transition-colors
              ${
                active
                  ? "border-[#5B4CF0] bg-[#F5F3FF]"
                  : "border-[#CCCCCC] bg-white"
              }
            `}
          >
            <img
              src={variant.thumbnail}
              alt={variant.label}
              className="h-4 w-4 object-contain"
            />

            <span className="text-[11px] text-[#344054]">{variant.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default VariantSelector;
