import React, { useState } from "react";
import useCartStore from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { products, removeProduct, addProduct, clearProducts, totalPrice } =
        useCartStore();

    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

            {products.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="space-y-6">
                    {products.map((data) => {
                        const product = data?.product;
                        if (!product) return <></>;
                        return (
                            <div
                                key={product.id}
                                className="flex items-center justify-between border-b border-gray-300 pb-4"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold">
                                            {product.title}
                                        </h2>
                                        <p className="text-gray-500">
                                            ${product.price}
                                        </p>
                                    </div>
                                </div>

                                {/* Quantity Controls */}
                                <div class="flex gap-5">
                                    <div className="flex items-center space-x-3">
                                        <button
                                            onClick={() =>
                                                addProduct(
                                                    {
                                                        product: product,
                                                        quantity:
                                                            data.quantity + 1,
                                                    },
                                                    1
                                                )
                                            }
                                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                        <span className="text-lg">
                                            {data.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                addProduct(
                                                    {
                                                        product: product,
                                                        quantity: data.quantity,
                                                    },
                                                    -1
                                                )
                                            }
                                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() =>
                                            removeProduct(product.id)
                                        }
                                        className="px-1 py-1 border border-red-600 text-red-600 rounded hover:bg-red-50 transition"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 stroke-red-600 hover:stroke-red-700 transition"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    {/* Total Section */}
                    <div className="mt-6 border-t border-gray-300 pt-4 flex justify-between items-center">
                        <h2 className="text-xl font-bold">
                            Total: ${totalPrice()}
                        </h2>
                        <button
                            type="button"
                            onClick={() => navigate("/checkout")}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
