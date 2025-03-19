import React from "react";
import { useNavigate } from "react-router-dom";

const CheckedOutPage = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/");
    }, 3000);
    return (
        <main className="w-full h-[90vh] flex justify-center items-center bg-white px-6">
            <div className="text-center">
                <p className="text-3xl font-semibold text-indigo-600">
                    You just checked out your cart.
                </p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                    Thank you for shopping with us.
                </h1>
                <h1 className="mt-4 text-xl font-semibold tracking-tight text-balance text-gray-900 ">
                    Redirecting you to homepage...
                </h1>
            </div>
        </main>
    );
};

export default CheckedOutPage;
