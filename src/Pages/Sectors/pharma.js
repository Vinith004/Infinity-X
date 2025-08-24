import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Pharma() {
  const [data, setData] = useState({
    labels: [
      "Sun Pharma",
      "Cipla",
      "Dr. Reddy’s",
      "Aurobindo",
      "Lupin",
      "Zydus",
      "Torrent",
      "Others",
    ],
    datasets: [
      {
        label: "Market Share",
        data: [9, 6, 5, 4, 4, 4, 3, 65],
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
      <h3>Pharmaceutical</h3>
      <p className="description">
        The Indian Pharmaceutical Industry is one of the largest globally. it includes business models 
        such as Generic Drugs, Formulations, Active Pharmaceutical Ingredients, Specialty & Novel Drugs
        Vaccines & Biotech, Healthcare and Contract Research & Manufacturing. 
      </p>
      <ul className="description">
        <li>Global Rank: 3rd in volume, 13th in value.</li>
        <li>Market Size: ~₹4.9 lakh crore (FY24)</li>
        <li>
          Exports: ~US$ 25–27 billion annually (largest supplier of generic
          medicines worldwide).
        </li>
        <li>
          Contribution: Supplies ~20% of global generics and ~60% of global
          vaccine demand.
        </li>
      </ul>
      <div className="chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
