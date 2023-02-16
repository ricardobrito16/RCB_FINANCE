import React, { createContext, useState, useContext } from "react";
import { doc, setDoc, addDoc, collection, getDocs, query, where, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { useUserAuth } from "./UserAuthContext";
import { useMonth } from "./MonthContext";


const AddCashContext = createContext();

export function AddCashContextProvider({ children }) {
    const [amount, setAmount] = useState();
    const [receiptDate, setReceiptDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const { user } = useUserAuth();
    const { month } = useMonth();

    const receitasCollectionRef = collection(db, `users/${user.uid}/receitas/meses/${month}`,);
    const despesasCollectionRef = collection(db, `users/${user.uid}/despesas/meses/${month}`,);


    const addCash = async (e) => {
        e.preventDefault()
        await addDoc(receitasCollectionRef, {
            amount: amount,
            receiptdate: receiptDate,
            description: description,
            category: category,
        });
    }
    const addSpend = async (e) => {
        e.preventDefault()
        await addDoc(despesasCollectionRef, {
            amount: amount,
            receiptdate: receiptDate,
            description: description,
            category: category,
        });
    }
    


    return (
        <AddCashContext.Provider
            value={{
                amount, setAmount,
                receiptDate, setReceiptDate,
                description, setDescription,
                category, setCategory, addCash, receitasCollectionRef, addSpend, despesasCollectionRef
            }}
        >
            {children}
        </AddCashContext.Provider>
    )
}

export function useAddCash() {
    return useContext(AddCashContext);
}