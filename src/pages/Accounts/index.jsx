import React from "react";
import './acconts.css';
import Months from "../../components/Months";
import Sidebar from "../../components/Sidebar";
import AccCards from "../../components/AccCards";
export default function Accounts() {
    return (
        <>
            <div className="dashboard">
                <div className="sidebar-fixed">
                    <Sidebar />
                </div>

                <div className="up-side">
                    <Months />
                    <AccCards/>
                    
                </div>

            </div>


        </>

    )
}
