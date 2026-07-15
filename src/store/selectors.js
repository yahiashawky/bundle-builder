export const getSelectedVariant = (state, productId) =>
  state.selectedVariants[productId];

export const getVariantQuantity = (
  state,
  productId,
  variantId
) =>
  state.cart[productId]?.variants?.[variantId] || 0;