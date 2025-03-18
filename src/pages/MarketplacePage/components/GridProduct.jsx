import React from "react";
import useFetchProduct from "@hooks/useFetchProduct";
import CardProduct from "./CardProduct";

const GridProduct = () => {
    const { products, loading, error } = useFetchProduct();

    return (
        <div class="grid grid-cols-5 gap-4">
            {products.map((product) => (
                <CardProduct
                    key={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    description={product.description}
                    rating={product.rating}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default GridProduct;
