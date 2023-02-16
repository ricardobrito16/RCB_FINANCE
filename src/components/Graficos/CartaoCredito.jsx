import React from "react";
import { Chart } from "react-google-charts";

export const cartaoCredito = [
  ["Cartão", "Por Categorias"],
  ["Eletrônicos", 280],
  ["Lazer", 300],
  ["Restaurante", 80],
  ["Saúde", 150],
  ["Serviços", 280],
  ["Supermercado", 423],
  ["Transporte", 230],
  ["Vestuário", 214],
  ["Viagem", 580],
  ["Outros", 128],
];

export const options = {
  title: "Cartão de Crédito",
};

export function CartaoCredito() {
  return (
    <Chart
      chartType="PieChart"
      data={cartaoCredito}
      options={options}
      width={"100%"}
      height={"250px"}
    />
  );
}
