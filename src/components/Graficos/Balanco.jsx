import React from "react";
import { Chart } from "react-google-charts";

export const balanco = [
  ["Balanço", "Valor", { role: "style" }],
  ["Receita", 13000, "green"], // RGB value
  ["Despesas", 12000, "red"], // English color name
  ["Balanço", 10000, "blue"], // English color name
];

export function Balanco() {
  return (
    <Chart chartType="ColumnChart" width="100%" height="250px" data={balanco} />
  );
}
