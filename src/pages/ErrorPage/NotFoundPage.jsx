import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <main className="w-full h-[90vh] flex justify-center items-center bg-white px-6">
            <div className="text-center">
                <p className="text-5xl font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                    Page not found
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Sorry, we couldn&apos;t find the page you&apos;re looking
                    for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        onClick={() => navigate(-1)}
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go back to previous page
                    </a>
                </div>
            </div>
        </main>
    );
};

export default NotFoundPage;
