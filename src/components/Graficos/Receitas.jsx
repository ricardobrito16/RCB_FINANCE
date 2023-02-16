import React, { useEffect, useState, ReactDOM } from "react";
// import { Chart } from "react-google-charts";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2'
import './graficos.css'
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { useAddCash } from "../../context/AddCashContext";
import { useUserAuth } from "../../context/UserAuthContext";
import ReactApexChart from "apexcharts"


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export function Receitas() {
  const { receitasCollectionRef, month } = useAddCash();
  const { user } = useUserAuth();

  const [receitas, setReceitas] = useState([])
  const [salario, setSalario] = useState([])
  const [extra, setExtra] = useState([])
  const [investimento, setInvestimento] = useState([])

  // PEGANDO VALORES DA CATEGORIA DE SALARIO
  useEffect(() => {
    const getSalario = async () => {
      const q = query(receitasCollectionRef, where("category", "==", "Salário"));
      const querySnapshot = await getDocs(q);
      setSalario(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getSalario()
  }, [])
  const catSalario = salario.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);

  // PEGANDO VALORES DA CATEGORIA DE EXTRA
  useEffect(() => {

    const getExtra = async () => {
      const q = query(receitasCollectionRef, where("category", "==", "Extra"));
      const querySnapshot = await getDocs(q);
      setExtra(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getExtra()
  }, [])
  const catExtra = extra.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);

  // PEGANDO VALORES DA CATEGORIA DE INVESTIMENTO
  useEffect(() => {

    const getInvestimento = async () => {
      const q = query(receitasCollectionRef, where("category", "==", "Investimento"));
      const querySnapshot = await getDocs(q);
      setInvestimento(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getInvestimento()
  }, [])
  const catInvestimento = investimento.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);

  console.log("const", catSalario)
  const data = {
    labels: ['Salário', 'Extra', 'Investimento'],
    datasets: [{
      label: 'Valor',
      data: [
        catSalario,
        catExtra,
        catInvestimento
      ],
      backgroundColor: ['#BC8F8F', '#CD853F', '#D2691E'],
      borderColor: ['#BC8F8F', '#CD853F', '#D2691E'],
    }]
  }
  const options = {
    plugins: {
      legend: false, // Hide legend
    }
  }

  return (
    <div className="graficos">
      <Doughnut
        data={data}
        options={options}
      ></Doughnut>
    </div>
  );
}

