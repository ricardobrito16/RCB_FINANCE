import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import "./App.css";
import { AddCashContextProvider } from "./context/AddCashContext";
import { MonthContextProvider } from "./context/MonthContext";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { UserProfileContextProvider } from "./context/UserProfileContext";
import Accounts from "./pages/Accounts";
import CreditCard from "./pages/CreditCards";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MonthContextProvider>
                  <UserProfileContextProvider>
                    <AddCashContextProvider>
                      <Dashboard />
                    </AddCashContextProvider>
                  </UserProfileContextProvider>
                </MonthContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <MonthContextProvider>
                  <UserProfileContextProvider>
                    <AddCashContextProvider>
                      <Transactions />
                    </AddCashContextProvider>
                  </UserProfileContextProvider>
                </MonthContextProvider>
              </ProtectedRoute>
            }
          />

          <Route
            path="/creditcard"
            element={
              <ProtectedRoute>
                <MonthContextProvider>
                  <CreditCard />
                </MonthContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/accounts"
            element={
              <ProtectedRoute>
                <MonthContextProvider>
                  <AddCashContextProvider>
                    <Accounts />
                  </AddCashContextProvider>
                </MonthContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <UserProfileContextProvider>
                  <Settings />
                </UserProfileContextProvider>
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
