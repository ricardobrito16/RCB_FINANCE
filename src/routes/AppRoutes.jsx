import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "../pages/Accounts";
import CreditCard from "../pages/CreditCards";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Settings from "../pages/Settings";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/creditcard" element={<CreditCard />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    )
}