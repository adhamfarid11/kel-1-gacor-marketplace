import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/ErrorPage/NotFoundPage";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
