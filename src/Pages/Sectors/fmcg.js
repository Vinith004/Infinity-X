import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FMCG() {
  const [data, setData] = useState({
    labels: [
      "HUL",
      "ITC",
      "Nestle",
      "Dabur",
      "Britannia",
      "Colgate",
      "Marico",
      "Others",
    ],
    datasets: [
      {
        label: "Market Share",
        data: [15, 7, 6, 4, 4, 3, 3, 48],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(201, 203, 207)",
          "rgb(201, 203, 207)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(201, 203, 207)",
          "rgb(201, 203, 207)",
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

  return (
    <div className="home">
      <h3>FMCG</h3>
      <p className="description">
        The FMCG sector is one of India’s largest and most defensive industries, covering 
        daily-use products across food, beverages, personal care, household care, and tobacco.
      </p>
      <ul className="description">
        <li>Contribution: ~50% of consumer spending; 3rd largest sector of Indian economy.</li>
        <li>Market Size (FY24): US$ 180 billion (₹15 lakh crore).</li>
        <li>
          Growth Drivers: Rising middle class, rural consumption, premiumisation, e-commerce, modern retail, health-conscious products.
        </li>
        <li>
          Distribution: 12+ million retail outlets in India (kirana stores dominate, e-commerce rising via Flipkart, Amazon, Blinkit, BigBasket).
        </li>
       
      </ul>
      <div className="chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
