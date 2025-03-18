import React, { useEffect, useState } from "react";
import useCartStore from "../../../store/useCartStore";
import SuccessAlert from "../../../components/SuccessAlert";

const ProductDetail = ({ product }) => {
    const [successMessage, setSuccessMessage] = useState(""); // State for success message
    const { addProduct, getQuantityById } = useCartStore();
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        setQuantity(getQuantityById(product?.id));
    }, [product]);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const addToCart = async () => {
        try {
            await addProduct({ product, quantity }, quantity);
            setSuccessMessage("Product added successfully!"); // Update state
            setTimeout(() => setSuccessMessage(""), 3000); // Hide after 3s
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Failed to add product. Please try again.");
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col gap-5">
            <BreadCrumb title={product.title} />

            {/* Show Success Alert */}
            {successMessage && <SuccessAlert title={successMessage} />}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                    src={product.image}
                    alt="Product"
                    className="w-full h-96 object-cover rounded-lg"
                />

                {/* Product Info */}
                <div className="space-y-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {product.title}
                    </h1>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-xl font-semibold text-blue-600">
                        ${product.price}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={decreaseQuantity}
                            className="px-4 py-2 text-lg bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            -
                        </button>
                        <span className="text-lg font-medium">{quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="px-4 py-2 text-lg bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={addToCart}
                        className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

// Breadcrumb Component with Correct JSX Syntax
const BreadCrumb = ({ title }) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <a
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                    >
                        <svg
                            className="w-3 h-3 me-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                    </a>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg
                            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                            {title}
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    );
};
