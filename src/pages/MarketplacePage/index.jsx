import React from "react";
import GridProduct from "./components/GridProduct";
import Jumbotron from "./components/Jumbotron";

const index = () => {
    return (
        <div>
            <Jumbotron />
            <div class="flex flex-col gap-5">
                <h1 class="text-xl font-semibold">Today's Products</h1>
                <GridProduct />
            </div>
        </div>
    );
};

export default index;
