import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFoundPage from "@pages/ErrorPage/NotFoundPage";
import GimmickPage from "@pages/ErrorPage/GimmickPage";
import MarketplacePage from "@pages/MarketplacePage";
import ProductDetailPage from "@pages/ProductDetailPage";
import CartPage from "@pages/CartPage/CartPage";
import CheckoutPage from "@pages/CheckoutPage";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import { useAuthStore } from "@/store/useAuthStore";
import CheckedOutPage from "./pages/CheckedOutPage/CheckedOutPage";

function App() {
    const { isAuthenticated } = useAuthStore();
    const [authStatus, setAuthStatus] = useState(isAuthenticated);

    useEffect(() => {
        setAuthStatus(isAuthenticated);
    }, [isAuthenticated]);

    return (
        <>
            <Navbar key={authStatus} />
            <div className="mt-16 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Routes>
                    <Route
                        path="/"
                        element={
                            isAuthenticated ? (
                                <MarketplacePage />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            !isAuthenticated ? (
                                <LoginPage />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={<ProductDetailPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/gimmick" element={<GimmickPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/checked-out" element={<CheckedOutPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
