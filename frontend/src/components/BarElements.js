import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart(props) {
  const concentrationValues = props["serverData"]["concentrations"];
  const consumptionValues = props["serverData"]["consumptions"];
  let elementsArray = [];
  let concentrationsArray = [];
  let consumptionArray = [];
  if (concentrationValues) {
    for (let [key, value] of Object.entries(concentrationValues[0])) {
      elementsArray.push(key);
      concentrationsArray.push(value);
    }
  }
  if (consumptionValues) {
    for (let [, value] of Object.entries(consumptionValues[0])) {
      consumptionArray.push(value);
    }
  }

  const data = {
    labels: elementsArray,
    datasets: [
      {
        label: "Доступные элементы в почве, кг/га",
        data: concentrationsArray,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Необходимая концентрация элементов питания, кг/га",
        data: consumptionArray,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  if (data.labels.length !== 0) return <Bar data={data} />;
}

export default BarChart;
