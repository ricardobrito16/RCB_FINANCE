import { deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Months from "../../components/Months";
import Sidebar from "../../components/Sidebar";
import { useAddCash } from "../../context/AddCashContext";
import { useMonth } from "../../context/MonthContext";
import { useUserAuth } from "../../context/UserAuthContext";
import { db } from "../../services/firebaseConfig";
import "./transactions.css";

export default function Transactions() {
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);
  const {
    receitasCollectionRef,
    despesasCollectionRef,
  } = useAddCash();

  const { month } = useMonth();
  const { user } = useUserAuth();

  const deleteReceitas = async (id) => {
    const operacaoDoc = doc(
      db,
      `users/${user.uid}/receitas/meses/${month}`,
      id
    );
    await deleteDoc(operacaoDoc);
  };
  const deleteDespesas = async (id) => {
    const operacaoDoc = doc(
      db,
      `users/${user.uid}/despesas/meses/${month}`,
      id
    );
    await deleteDoc(operacaoDoc);
  };

  useEffect(() => {
    const getReceitas = async () => {
      const data = await getDocs(receitasCollectionRef);
      setReceitas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getReceitas();
  }, [receitasCollectionRef]);
  useEffect(() => {
    const getDespesas = async () => {
      const data = await getDocs(despesasCollectionRef);
      setDespesas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDespesas();
  }, [despesasCollectionRef]);
  console.log(despesas);
  return (
    <>
      <div className="dashboard">
        <div className="sidebar-fixed">
          <Sidebar />
        </div>

        <div className="up-side">
          <Months />
          <h2>Minhas Transações</h2>
          <div>RECEITAS</div>
          <table>
            <tr>
              <th>Valor</th>
              <th>Data</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th></th>
            </tr>
            {receitas.map((receitas) => {
              return (
                <tr>
                  <td className="color-despesas">{receitas.amount}</td>
                  <td className="color-despesas">{receitas.receiptdate}</td>
                  <td className="color-despesas">{receitas.description}</td>
                  <td className="color-despesas">{receitas.category}</td>
                  <td className="color-despesas">
                    <p
                      onClick={() => {
                        deleteReceitas(receitas.id);
                      }}
                    >
                      Excluir
                    </p>
                  </td>
                </tr>
              );
            })}
          </table>
          <table>
            <tr>
              <th>Valor</th>
              <th>Data</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th></th>
            </tr>
            <div>DESPESAS</div>
            {despesas.map((despesas) => {
              return (
                <tr>
                  <td className="color-despesas">{despesas.amount}</td>
                  <td className="color-despesas">{despesas.receiptdate}</td>
                  <td className="color-despesas">{despesas.description}</td>
                  <td className="color-despesas">{despesas.category}</td>
                  <td className="color-despesas">
                    <p
                      onClick={() => {
                        deleteDespesas(despesas.id);
                      }}
                    >
                      Excluir
                    </p>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className="table-container"></div>
      </div>
    </>
  );
}
