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

export function getSelectedItems(state, products) {
  return products.flatMap((product) => {
    const item = state.cart[product.id];

    if (!item) return [];

    return Object.entries(item.variants || {})
      .filter(([, quantity]) => quantity > 0)
      .map(([variantId, quantity]) => {
        const variant = product.variants?.find(
          (v) => v.id === variantId,
        );

        return {
          id: `${product.id}-${variantId}`,

          productId: product.id,

          title: product.title,

          image: product.image,

          variant,

          quantity,

          price: product.price,

          compareAtPrice: product.compareAtPrice,

          total: quantity * product.price,

          totalCompare: quantity * product.compareAtPrice,
        };
      });
  });
}

export function getReviewData(state, productsData) {
  return {
    cameras: getSelectedItems(state, productsData.cameras),

    sensors: getSelectedItems(state, productsData.sensors),

    accessories: getSelectedItems(state, productsData.accessories),

    plans: getSelectedItems(state, productsData.plans),
  };
}

export function getBundleTotals(reviewData) {
  const allItems = [
    ...reviewData.cameras,
    ...reviewData.sensors,
    ...reviewData.accessories,
    ...reviewData.plans,
  ];

  return allItems.reduce(
    (totals, item) => ({
      subtotal: totals.subtotal + item.total,
      compareSubtotal: totals.compareSubtotal + item.totalCompare,
      savings: totals.savings + (item.totalCompare - item.total),
      itemsCount: totals.itemsCount + item.quantity,
    }),
    {
      subtotal: 0,
      compareSubtotal: 0,
      savings: 0,
      itemsCount: 0,
    }
  );
}