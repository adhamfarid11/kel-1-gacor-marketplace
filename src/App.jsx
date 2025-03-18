import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/ErrorPage/NotFoundPage";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div class="mt-16 p-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
