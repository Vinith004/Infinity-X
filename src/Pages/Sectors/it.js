
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function IT() {
  const [data, setData] = useState({
    labels: [
      "TCS",
      "Infosys",
      "HCL Tech",
      "Wipro",
      "Tech Mahindra",
      "LTIMindTree",
      "Others",
    ],
    datasets: [
      {
        label: "Market Share",
        data: [30, 20, 12, 10, 7, 5, 16],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
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
      <h3>IT (Information Technology)</h3>
      <p className="description">
        The Information Technology (IT) sector in India is one of the largest
        contributors to the economy. It includes IT services, consulting,
        software products, engineering R&D, and business process management
      </p>
      <ul className="description">
        <li>Contribution to GDP: ~7.5%</li>
        <li>Employment: 5 million people</li>
        <li>Exports: India’s IT exports are ~60%+ of the sector’s revenue</li>
        <li>
          Key Markets: USA (~50–60% revenue), Europe (~20–25%), APAC & others
        </li>
      </ul>
      <div className="chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
