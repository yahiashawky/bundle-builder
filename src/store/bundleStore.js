import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBundleStore = create(
  persist(
    (set) => ({
      activeStep: 1,

      selectedVariants: {},

      cart: {},

      setActiveStep: (step) =>
        set({
          activeStep: step,
        }),

      selectVariant: (productId, variantId) =>
        set((state) => ({
          selectedVariants: {
            ...state.selectedVariants,
            [productId]: variantId,
          },
        })),

      increment: (productId, variantId) =>
        set((state) => ({
          cart: {
            ...state.cart,

            [productId]: {
              variants: {
                ...state.cart[productId]?.variants,

                [variantId]:
                  (state.cart[productId]?.variants?.[variantId] || 0) + 1,
              },
            },
          },
        })),

      decrement: (productId, variantId) =>
        set((state) => ({
          cart: {
            ...state.cart,

            [productId]: {
              variants: {
                ...state.cart[productId]?.variants,

                [variantId]: Math.max(
                  0,
                  (state.cart[productId]?.variants?.[variantId] || 0) - 1
                ),
              },
            },
          },
        })),
    }),
    {
      name: "bundle-builder",
    }
  )
);

export default useBundleStore;