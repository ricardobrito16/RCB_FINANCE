import React from "react";
import CredCard from "../../components/CredCard";
import Months from "../../components/Months";
import Sidebar from "../../components/Sidebar";
import "./CreditCard.css";
export default function CreditCard() {
  return (
    <>
      <div className="dashboard">
        <div className="sidebar-fixed">
          <Sidebar />
        </div>

        <div className="up-side">
          <Months />
          <CredCard />
        </div>
      </div>
    </>
  );
}
