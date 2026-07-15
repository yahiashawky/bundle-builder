import { create } from "zustand";

const useBundleStore = create((set, get) => ({
  activeStep: 1,

  selectedVariant: {},

  quantities: {},
   setActiveStep: (step) =>
    set({
      activeStep: step,
    }),

    setVariant: (productId, variantId) =>
    set((state) => ({
        selectedVariant: {
            ...state.selectedVariant,

            [productId]: variantId,
        },
    })),

    increaseQuantity: (productId, variantId) =>
  set((state) => ({
    quantities: {
      ...state.quantities,

      [productId]: {
        ...state.quantities[productId],

        [variantId]:
          (state.quantities[productId]?.[variantId] || 0) + 1,
      },
    },
  })),

  decreaseQuantity: (productId, variantId) =>
  set((state) => ({
    quantities: {
      ...state.quantities,

      [productId]: {
        ...state.quantities[productId],

        [variantId]: Math.max(
          0,
          (state.quantities[productId]?.[variantId] || 0) - 1
        ),
      },
    },
  })),
}));

export default useBundleStore;