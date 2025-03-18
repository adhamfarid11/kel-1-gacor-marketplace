import { Route, Routes } from "react-router-dom";
import MarketplacePage from "@pages/MarketplacePage";
import NotFoundPage from "@pages/ErrorPage/NotFoundPage";
import "./App.css";
import Navbar from "./components/Navbar";
import GimmickPage from "./pages/ErrorPage/GimmickPage";

function App() {
    return (
        <>
            <Navbar />
            <div class="mt-16 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Routes>
                    <Route path="/" element={<MarketplacePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/gimmick" element={<GimmickPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
