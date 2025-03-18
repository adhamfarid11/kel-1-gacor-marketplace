import { create } from "zustand";
import { persist } from "zustand/middleware";

// Create the store with persistence
const useCartStore = create(
    persist(
        (set, get) => ({
            products: [],
            addProduct: (product, changeQuantity = 1) =>
                new Promise((resolve, reject) => {
                    try {
                        set((state) => {
                            const existingProduct = state.products.find(
                                (p) => p.id === product.id
                            );

                            if (existingProduct) {
                                const updatedProducts = state.products
                                    .map((p) =>
                                        p.id === product.id
                                            ? {
                                                  ...p,
                                                  quantity: Math.max(
                                                      changeQuantity > 1
                                                          ? changeQuantity
                                                          : p.quantity +
                                                                changeQuantity,
                                                      0
                                                  ),
                                              }
                                            : p
                                    )
                                    .filter((p) => p.quantity > 0);

                                return { products: updatedProducts };
                            } else if (changeQuantity > 0) {
                                console.log("malah sini");
                                return {
                                    products: [
                                        ...state.products,
                                        {
                                            ...product,
                                            quantity: changeQuantity,
                                        },
                                    ],
                                };
                            }

                            return state;
                        });

                        resolve(product);
                    } catch (error) {
                        reject(error);
                    }
                }),

            totalQuantity: () =>
                get().products.reduce(
                    (total, product) => total + product.quantity,
                    0
                ),
            totalPrice: () =>
                get().products.reduce(
                    (total, product) =>
                        total + product.product.price * product.quantity,
                    0
                ),
            removeProduct: (id) =>
                set((state) => ({
                    products: state.products.filter((p) => p.product.id !== id),
                })),
            getQuantityById: (id) => {
                const product = get().products.find((p) => p.product.id === id);
                return product ? product.quantity : 0;
            },
            clearProducts: () => set({ products: [] }),
        }),
        {
            name: "cart-storage", // Key in localStorage
        }
    )
);
export default useCartStore;
