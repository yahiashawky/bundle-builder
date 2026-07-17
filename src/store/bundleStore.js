import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBundleStore = create(
  persist(
    (set) => ({
      activeStep: 1,

      selectedVariants: {
        "wyze-sense-motion-sensor": "default",
        "wyze-sense-hub": "default",
        "wyze-microsd-card-256": "default",
        "cam-unlimited": "default",
        "fast-shipping": "default",
      },

      cart: {
        "wyze-sense-motion-sensor": {
          variants: {
            default: 2,
          },
        },

        "wyze-sense-hub": {
          variants: {
            default: 1,
          },
        },

        "wyze-microsd-card-256": {
          variants: {
            default: 2,
          },
        },

        "cam-unlimited": {
          variants: {
            default: 1,
          },
        },

        "fast-shipping": {
          variants: {
            default: 1,
          },
        },
      },

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
                  (state.cart[productId]?.variants?.[variantId] || 0) - 1,
                ),
              },
            },
          },
        })),
    }),
    {
      name: "bundle-builder",
    },
  ),
);

export default useBundleStore;
