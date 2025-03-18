import React, { useEffect, useState } from "react";

const SuccessAlert = ({ title }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    if (!visible) return null; // Hide component when `visible` is false

    return (
        <div
            className="fixed top-20 right-5 p-4 text-sm text-green-800 rounded-lg bg-green-100 shadow-lg transition-opacity duration-300 ease-in-out"
            role="alert"
        >
            <span className="font-semibold">Success alert!</span> {title}
        </div>
    );
};

export default SuccessAlert;
