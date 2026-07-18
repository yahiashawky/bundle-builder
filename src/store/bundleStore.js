import { create } from "zustand";

const useBundleStore = create((set, get) => ({
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

  increment: (productId, variantId) => {
    console.log(productId, variantId);

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
    }));
  },

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
  toggleProduct: (productId) =>
    set((state) => {
      const exists = (state.cart[productId]?.variants?.default || 0) > 0;

      return {
        cart: {
          ...state.cart,

          [productId]: {
            variants: {
              default: exists ? 0 : 1,
            },
          },
        },
      };
    }),
  loadBundle: () => {
    const saved = localStorage.getItem("bundle-builder");

    if (!saved) return;

    const data = JSON.parse(saved);

    set((state) => ({
      cart: data.cart ?? state.cart,
      selectedVariants: data.selectedVariants ?? state.selectedVariants,
    }));
  },
  saveBundle: () => {
    const { cart, selectedVariants } = get();

    localStorage.setItem(
      "bundle-builder",
      JSON.stringify({
        cart,
        selectedVariants,
      }),
    );
  },
}));

export default useBundleStore;
