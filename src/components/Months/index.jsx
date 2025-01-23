import React from "react";
import { useMonth } from "../../context/MonthContext";
import "./months.css";

export default function Months() {
  const { setMonth } = useMonth("");

  return (
    <div className="months-navbar">
      <ul>
        <li onClick={() => setMonth("Janeiro")}>
          <p href="#">Janeiro</p>
        </li>
        <li onClick={() => setMonth("Fevereiro")}>
          <p href="#">Fevereiro</p>
        </li>
        <li onClick={() => setMonth("Março")}>
          <p href="#">Março</p>
        </li>
        <li onClick={() => setMonth("Abril")}>
          <p href="#">Abril</p>
        </li>
        <li onClick={() => setMonth("Maio")}>
          <p href="#">Maio</p>
        </li>
        <li onClick={() => setMonth("Junho")}>
          <p href="#">Junho</p>
        </li>
        <li onClick={() => setMonth("Julho")}>
          <p href="#">Julho</p>
        </li>
        <li onClick={() => setMonth("Agosto")}>
          <p href="#">Agosto</p>
        </li>
        <li onClick={() => setMonth("Setembro")}>
          <p href="#">Setembro</p>
        </li>
        <li onClick={() => setMonth("Outubro")}>
          <p href="#">Outubro</p>
        </li>
        <li onClick={() => setMonth("Novembro")}>
          <p href="#">Novembro</p>
        </li>
        <li onClick={() => setMonth("Dezembro")}>
          <p href="#">Dezembro</p>
        </li>
      </ul>
    </div>
  );
}
