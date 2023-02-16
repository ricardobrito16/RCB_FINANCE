
import { Chart } from "react-google-charts";
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
export function Despesas() {

  const { despesasCollectionRef, month } = useAddCash();
  const { user } = useUserAuth();
  const [casa, setCasa] = useState([])
  const [educacao, setEducacao] = useState([])
  const [lazer, setLazer] = useState([])
  const [restaurante, setRestaurante] = useState([])
  const [saude, setSaude] = useState([])
  const [servicos, setServicos] = useState([])
  const [supermercado, setSupermercado] = useState([])
  const [transporte, setTransporte] = useState([])
  const [vestuario, setVestuario] = useState([])
  const [viagem, setViagem] = useState([])
  const [outros, setOutros] = useState([])

  // PEGANDO VALORES DA CATEGORIA DE CASA
  useEffect(() => {
    const getCasa = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Casa"));
      const querySnapshot = await getDocs(q);
      setCasa(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getCasa()
  }, [])
  const catCasa = casa.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);

  // PEGANDO VALORES DA CATEGORIA DE EDUCAÇÃO
  useEffect(() => {

    const getEducacao = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Educação"));
      const querySnapshot = await getDocs(q);
      setEducacao(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getEducacao()
  }, [])
  const catEducacao = educacao.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);

  // PEGANDO VALORES DA CATEGORIA DE LAZER
  useEffect(() => {

    const getLazer = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Lazer"));
      const querySnapshot = await getDocs(q);
      setLazer(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getLazer()
  }, [])
  const catLazer = lazer.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);
  // PEGANDO VALORES DA CATEGORIA DE RESTAURANTE
  useEffect(() => {

    const getRestaurante = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Restaurante"));
      const querySnapshot = await getDocs(q);
      setRestaurante(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getRestaurante()
  }, [])
  const catRestaurante = restaurante.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);
  // PEGANDO VALORES DA CATEGORIA DE SAÚDE
  useEffect(() => {

    const getSaude = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Saúde"));
      const querySnapshot = await getDocs(q);
      setSaude(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getSaude()
  }, [])
  const catSaude = saude.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);
  // PEGANDO VALORES DA CATEGORIA DE SERVIÇOS
  useEffect(() => {

    const getServicos = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Serviços"));
      const querySnapshot = await getDocs(q);
      setServicos(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getServicos()
  }, [])
  const catServicos = servicos.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);
  // PEGANDO VALORES DA CATEGORIA DE SUPERMERCADO
  useEffect(() => {

    const getSupermercado = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Supermercado"));
      const querySnapshot = await getDocs(q);
      setSupermercado(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getSupermercado()
  }, [])
  const catSupermercado = supermercado.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);
  // PEGANDO VALORES DA CATEGORIA DE TRANSPORTE
  useEffect(() => {

    const getTransporte = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Transporte"));
      const querySnapshot = await getDocs(q);
      setTransporte(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getTransporte()
  }, [])
  const catTransporte = transporte.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);
  // PEGANDO VALORES DA CATEGORIA DE VESTUÁRIO
  useEffect(() => {

    const getVestuario = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Vestuário"));
      const querySnapshot = await getDocs(q);
      setVestuario(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getVestuario()
  }, [])
  const catVestuario = vestuario.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);
  // PEGANDO VALORES DA CATEGORIA DE VIAGEM
  useEffect(() => {

    const getViagem = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Viagem"));
      const querySnapshot = await getDocs(q);
      setViagem(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getViagem()
  }, [])
  const catViagem = viagem.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);
  // PEGANDO VALORES DA CATEGORIA DE OUTROS
  useEffect(() => {

    const getOutros = async () => {
      const q = query(despesasCollectionRef, where("category", "==", "Outros"));
      const querySnapshot = await getDocs(q);
      setOutros(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getOutros()
  }, [])
  const catOutros = outros.reduce((a, b) => parseFloat(a) + parseFloat(b.amount), parseFloat(0)).toFixed(2);




  const data = {
    labels: ['Casa', 
    'Educação', 
    'Lazer', 
    'Restaurante',
    'Saúde',
    'Serviços',
    'Supermercado',
    'Transporte',
    'Vestuário',
    'Viagem',
    'Outros'],
    datasets: [{
      label: 'Valor',
      data: [
        catCasa, 
        catEducacao, 
        catLazer, 
        catRestaurante, 
        catSaude, 
        catServicos, 
        catSupermercado, 
        catTransporte, 
        catVestuario, 
        catViagem, 
        catOutros
      ],
      backgroundColor: [
      '#BDB76B', '#CD853F',
      '#BDB76B', '#D2691E', 
      '#B8860B', '#F4A460', 
      '#8B4513', '#FFDEAD',
      '#A0522D', '#DEB887',
      '#BC8F8F'],
      borderColor: [
        '#BDB76B', '#CD853F',
        '#BDB76B', '#D2691E', 
        '#B8860B', '#F4A460', 
        '#8B4513', '#FFDEAD',
        '#A0522D', '#DEB887',
        '#BC8F8F'],
    }]
  }
  const options = {
plugins: {
  legend: false, // Hide legend
}
  }

  return (
    <div className="graficos">
      <Pie
        data={data}
        options={options}
        
        
      ></Pie>
    </div>
  );
}
