import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
