import React from "react"
import './CredCard.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';

export default function CredCard() {
    return (
        <div className="acc-cards">
            <h2> Cartão de crédito </h2>
            <div className="acc-container">
                <div className="acc-card">
                    <div className="acc-text">
                        <button><AiOutlinePlus /></button>
                        <p> Novo cartão </p>

                    </div>

                </div>
                <div className="acc-card">
                    <div className="acc-text">
                        <h5> Cartão de crédito </h5>
                        <div className="saldo-credito">
                            <h3>Limite Disponível</h3>
                            <h3>R$ 0,00</h3>
                            
                        </div>
                        <div className="saldo-credito">
                            <h3>Valor Gasto</h3>
                            <h3>R$ 0,00</h3>
                        </div>
                        <div className="buttons-acc">
                            <button><BsFillArrowUpCircleFill /><p>Adicionar Receita</p></button>
                            <button><BsFillArrowDownCircleFill />Adicionar Despesa</button>
                        </div>



                    </div>


                </div>
            </div>

        </div>
    )
}

