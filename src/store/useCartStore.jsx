import { create } from "zustand";
import { persist } from "zustand/middleware";

// Create the store with persistence
const useCartStore = create(
    persist(
        (set, get) => ({
            products: [],
            addProduct: (product) =>
                new Promise((resolve, reject) => {
                    try {
                        set((state) => ({
                            products: [...state.products, product],
                        }));
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
            removeProduct: (id) =>
                set((state) => ({
                    products: state.products.filter((p) => p.id !== id),
                })),
            clearProducts: () => set({ products: [] }),
        }),
        {
            name: "cart-storage", // Key in localStorage
        }
    )
);
export default useCartStore;
