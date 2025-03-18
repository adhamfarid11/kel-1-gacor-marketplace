import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import useFetchProductId from "../../hooks/useFetchProductId";

const index = () => {
    const { id } = useParams();

    const { products, loading, error } = useFetchProductId(id);
    // TODO handle loading
    return (
        <>
            <ProductDetail product={products} />
        </>
    );
};

export default index;
