import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Insurence() {
  const [data, setData] = useState({
    labels: [
      "LIC",
      "SBI Life",
      "HDFC Life",
      "ICICI Prodential Life",
      "Max Life",
      "Others",
    ],
    datasets: [
      {
        label: "Market Share",
        data: [62, 9, 9, 7, 5, 8],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const [data1, setData1] = useState({
    labels: [
      "New India Assurance",
      "Icici Lombard",
      "United India",
      "Bajaj Allianz",
      "Star Health",
      "Others",
    ],
    datasets: [
      {
        label: "Market Share",
        data: [14, 9, 8, 7, 6, 56],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const options1 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="home">
      <h3>Insurance</h3>
      <p className="description">
        The Indian insurance sector is a fast-growing part of the financial ecosystem, covering life insurance, health insurance, and general insurance.
      </p>
      <ul className="description">
        <li>Market Size (FY24): ~US$ 150 billion (₹12+ lakh crore GWP – Gross Written Premium).</li>
        <li>Global Rank: 10th largest insurance market by premium.</li>
        <li>
          Drivers: Rising middle class, health awareness post-Covid, government schemes (PMJAY, crop insurance), digital distribution.
        </li>
        <li>
            Penetration
            <ul className="description">
                <li>Life Insurance → ~3.2% of GDP (close to global avg).</li>
                <li>Non-Life Insurance → ~1% of GDP (much lower than global avg 4%).</li>
            </ul>
        </li>
      </ul>
      <div className="chart">
        <Pie data={data} options={options} />
         <Pie data={data1} options={options1} />
      </div>
    </div>
  );
}
