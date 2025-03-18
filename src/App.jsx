import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/ErrorPage/NotFoundPage";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import { useAuthStore } from "@/store/useAuthStore";

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
                                <HomePage />
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
                    <Route path="/" element={<MarketplacePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/gimmick" element={<GimmickPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
