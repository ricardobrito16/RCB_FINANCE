
import React from "react";
import "./sidebar.css"
import { FiHome, FiSettings } from 'react-icons/fi';
import { BiTransfer } from 'react-icons/bi';
import { CgTranscript } from 'react-icons/cg';
import { BsBank2, BsThreeDots } from 'react-icons/bs';
import { GoGraph } from 'react-icons/go';
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";


export default function Sidebar() {
    const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
        <div className="sidebar-container">
            <div className="section-one">
                <h3>Finance 2.0</h3>
                <p>por Ricardo Brito</p>
                <button onClick={handleLogout} >Sair</button>
            </div>
            <div className="section-two">
                <ul>
                    <li><Link to="/dashboard" ><p><FiHome className="icon" />Painel</p></Link></li>
                    <li><Link to="/transactions" ><p><BiTransfer className="icon" />Transações</p></Link></li>
                    <li><Link to="/creditcard" ><p><CgTranscript className="icon" />Cartões de Credito</p></Link></li>
                    <li><Link to="/accounts" ><p><BsBank2 className="icon" />Contas</p></Link></li>
                    <li><p><GoGraph className="icon" />Relatórios</p></li>
                    <li><p><BsThreeDots className="icon" />Mais Opções</p></li>
                    <li><Link to="/settings" ><p><FiSettings className="icon" />Configurações</p></Link></li>
                </ul>
            </div>
        </div>
    )
}