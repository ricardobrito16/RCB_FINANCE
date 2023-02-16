import React, { useState, useEffect } from "react";
import './dashcards.css'
import { IoMdArrowDropright } from 'react-icons/io';
import { GiBanknote } from 'react-icons/gi';
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';
import { BsCreditCard } from 'react-icons/bs';
import { Despesas } from "../Graficos/Despesas";
import { Receitas } from "../Graficos/Receitas";
import { Balanco } from "../Graficos/Balanco";
import { CartaoCredito } from "../Graficos/CartaoCredito";
import { app, auth, db } from "../../services/firebaseConfig";
import { collection, getDoc, doc, getDocs, } from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import { useProfile } from "../../context/UserProfileContext";
import { useMonth } from "../../context/MonthContext";
import { useAddCash } from "../../context/AddCashContext";




export default function DashCards() {
    const { logOut, user } = useUserAuth();
    const { month } = useMonth();
    const { amount, setAmount,
        receiptDate, setReceiptDate,
        description, setDescription,
        category, setCategory, addCash, receitasCollectionRef, despesasCollectionRef } = useAddCash();

    const [welcome, setWelcome] = useState(["Acesse as configurações para completar seu cadastro"]);
    const usersCollectionRef = collection(db, "users");

    const uid = user.uid;
    

    const currentMonth = month;
    const [receitas, setReceitas] = useState([])
    const [despesas, setDespesas] = useState([])
   
    useEffect(() => {

        const getReceitas = async () => {
            const data = await getDocs(receitasCollectionRef);
            setReceitas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getReceitas()
    }, [receitasCollectionRef])
    useEffect(() => {

        const getDespesas = async () => {
            const data = await getDocs(despesasCollectionRef);
            setDespesas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getDespesas()
    }, [despesasCollectionRef])
    const totalReceitas = receitas.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2)
    const totalDespesas = despesas.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseInt(0)).toFixed(2)
    const soma = parseFloat(totalReceitas) - parseFloat(totalDespesas).toFixed(2);
    const Total = parseFloat(soma).toFixed(2);
    useEffect(() => {

        const getName = async () => {
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const SurnameData = docSnap.data();
                setWelcome(SurnameData.surname)
              
            } else {
                console.log("No such document!");
            }


        }

        getName()
    }, [usersCollectionRef])

    return (
        <div className="dash-cards">
            
                <h2> Bem Vindo, {(welcome)}! </h2>
            


            <div className="card-container">
                <div className="card">
                    <div className="card-text">
                        <p> Saldo atual <IoMdArrowDropright /> </p>
                        <h3>R$ {(Total)}</h3>
                    </div>
                    <div className="card-icon"><GiBanknote /></div>
                </div>
                <div className="card">
                    <div className="card-text">
                        <p> Receitas <IoMdArrowDropright /> </p>
                        <h3>R$ {(totalReceitas)} </h3>
                    </div>
                    <div className="card-icon"><HiArrowSmUp /></div>
                </div>
                <div className="card">
                    <div className="card-text">
                        <p> Despesas <IoMdArrowDropright /> </p>
                        <h3>R$ {(totalDespesas)}</h3>
                    </div>
                    <div className="card-icon"><HiArrowSmDown /></div>
                </div>
                <div className="card">
                    <div className="card-text">
                        <p> Cartão de crédito <IoMdArrowDropright /> </p>
                        <h3>R$ 0,00</h3>
                    </div>
                    <div className="card-icon"><BsCreditCard /></div>
                </div>

            </div>
            <div className="card-container2">
                <div className="card2">
                    <div className="card-text2">
                        <p> Despesas por categoria </p>

                    </div>
                    <Despesas />
                </div>
                <div className="card2">
                    <div className="card-text2">
                        <p> Receitas por categoria </p>

                    </div>
                    <Receitas />
                </div>
            </div>
            <div className="card-container2">
                <div className="card2">
                    <div className="card-text2">
                        <p> Balanço mensal </p>
                    </div>
                    <Balanco />
                </div>
                <div className="card2">
                    <div className="card-text2">
                        <p> Cartão de crédito </p>

                    </div>
                    <CartaoCredito />
                </div>
            </div>

        </div>
    )
}