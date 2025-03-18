import React from "react";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ id, title, imageUrl, description, price, rating }) => {
    const navigate = useNavigate();

    return (
        <div class="w-full bg-white border border-gray-50 rounded-2xl shadow-md flex flex-col overflow-hidden">
            <a
                class="w-full cursor-pointer"
                onClick={() => navigate(`/product/${id}`)}
            >
                <img
                    class="h-[200px] w-full object-cover rounded-t-xl bg-white"
                    src={imageUrl}
                    alt=""
                />
            </a>
            <div class="h-[180px] p-4 w-full bg-white flex flex-col justify-between">
                <div
                    class="flex flex-col cursor-pointer"
                    onClick={() => navigate(`/product/${id}`)}
                >
                    <a>
                        <h5 class="mb-1 text-sm font-medium tracking-tight text-black line-clamp-2">
                            {title}
                        </h5>
                    </a>
                    <p class="mb-2 text-xs font-normal text-gray-600 line-clamp-2">
                        {description}
                    </p>
                </div>
                <div className="flex flex-col gap-2 ">
                    <p class="text-m font-bold text-[oklch(0.712_0.194_13.428)]">
                        ${price}
                    </p>
                    <div class="flex items-center">
                        <svg
                            class="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p class="ms-2 text-xs font-bold text-gray-600">
                            {rating.rate}
                        </p>
                        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <div
                            onClick={() => navigate("/gimmick")}
                            class="text-xs font-medium text-gray-600 underline hover:no-underline cursor-pointer"
                        >
                            {rating.count} reviews
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
