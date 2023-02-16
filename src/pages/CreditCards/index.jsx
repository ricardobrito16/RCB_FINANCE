import React from "react";
import './CreditCard.css';
import Months from "../../components/Months";
import Sidebar from "../../components/Sidebar";
import AccCards from "../../components/AccCards";
import CredCard from "../../components/CredCard";
export default function CreditCard() {
    return (
        <>
            <div className="dashboard">
                <div className="sidebar-fixed">
                    <Sidebar />
                </div>

                <div className="up-side">
                    <Months />
                    <CredCard/>
                    
                </div>

            </div>


        </>

    )
}
