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
import "./BarElements.css";

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
        label: "Available soil nutrients, kg/ha",
        data: concentrationsArray,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Required concentration of nutrients, kg/ha",
        data: consumptionArray,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (data.labels.length !== 0) return <Bar data={data} />;
}

export default BarChart;
