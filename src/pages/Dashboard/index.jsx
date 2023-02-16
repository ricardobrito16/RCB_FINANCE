import React from "react";
import DashCards from "../../components/DashCards";
import NewModal from "../../components/Modal";
import Months from "../../components/Months";
import Sidebar from "../../components/Sidebar";
import './dashboard.css'
export default function Dashboard() {
    return (
        <>
            <div className="dashboard">
                <div className="sidebar-fixed">
                    <Sidebar />
                </div>

                <div className="dash-up-side">
                   <div className="change-months">
                   <Months />
                    </div> 
                    

                    <DashCards />
                </div>

            </div>


        </>

    )
}