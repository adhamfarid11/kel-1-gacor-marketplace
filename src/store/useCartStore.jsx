import { create } from "zustand";
import { persist } from "zustand/middleware";

// Create the store with persistence
const useCartStore = create(
    persist(
        (set) => ({
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
            removeProduct: (id) =>
                set((state) => ({
                    products: state.products.filter((p) => p.id !== id),
                })),
            clearProducts: () => set({ products: [] }),
        }),
        {
            name: "product-storage", // Key in localStorage
        }
    )
);
export default useCartStore;
