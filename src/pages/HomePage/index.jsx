import React from "react";

import useFetchProduct from "@hooks/useFetchProduct";

const index = () => {
    const { products, loading, error } = useFetchProduct();
    return <h1>homepage</h1>;
};

export default index;
