export const getSelectedVariant = (state, productId) =>
  state.selectedVariants[productId];

export const getVariantQuantity = (
  state,
  productId,
  variantId
) =>
  state.cart[productId]?.variants?.[variantId] || 0;

  export function getSelectedProducts(state, products) {
  return products.filter((product) => {
    const item = state.cart[product.id];

    if (!item) return false;

    return Object.values(item.variants || {}).some(
      (quantity) => quantity > 0,
    );
  }).length;
}

export function hasSelectedProducts(state, products) {
  return products.some((product) => {
    const item = state.cart[product.id];

    if (!item) return false;

    return Object.values(item.variants || {}).some(
      (quantity) => quantity > 0
    );
  });
}