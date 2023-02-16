import React from 'react';
import './App.css';
import Login from "../src/pages/Login"
import Register from './pages/Register';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import CreditCard from './pages/CreditCards';
import { AppRoutes } from './routes/AppRoutes';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectedRoute';
import { MonthContextProvider } from './context/MonthContext';
import Settings from './pages/Settings';
import { UserProfileContextProvider } from './context/UserProfileContext';
import { AddCashContextProvider } from './context/AddCashContext';
import Transactions from './pages/Transactions';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>

              <MonthContextProvider>
                <UserProfileContextProvider>
                  <AddCashContextProvider>
                    <Dashboard />
                  </AddCashContextProvider>
                </UserProfileContextProvider>
              </MonthContextProvider>



            </ProtectedRoute>


          } />
          <Route path="/transactions" element={
            <ProtectedRoute>

              <MonthContextProvider>
                <UserProfileContextProvider>
                  <AddCashContextProvider>
                    <Transactions />
                  </AddCashContextProvider>
                </UserProfileContextProvider>
              </MonthContextProvider>



            </ProtectedRoute>


          } />

          <Route path="/creditcard" element={
            <ProtectedRoute>
              <MonthContextProvider>
                <CreditCard />
              </MonthContextProvider>

            </ProtectedRoute>
          } />
          <Route path="/accounts" element={
            <ProtectedRoute>
              <MonthContextProvider>
                <AddCashContextProvider>
                  <Accounts />
                </AddCashContextProvider>
              </MonthContextProvider>

            </ProtectedRoute>

          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <UserProfileContextProvider>
                <Settings />
              </UserProfileContextProvider>



            </ProtectedRoute>

          } />

        </Routes>

      </UserAuthContextProvider>
    </div>
  );
}

export default App;
