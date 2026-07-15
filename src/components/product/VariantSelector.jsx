function VariantSelector({ variants, selectedVariant, onSelectVariant }) {
  return (
    <div className="mt-5 flex gap-3">
      {variants.map((variant) => (
        <button
          key={variant.id}
          type="button"
          onClick={() => onSelectVariant(variant.id)}
          className={`rounded-lg border p-2 transition ${
            selectedVariant === variant.id ? "border-black" : "border-gray-300"
          }`}
        >
          <img
            src={variant.thumbnail}
            alt={variant.label}
            className="h-12 w-12 object-contain"
          />

          <p className="mt-2 text-xs">{variant.label}</p>
        </button>
      ))}
    </div>
  );
}

export default VariantSelector;
