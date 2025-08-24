import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Bank() {
  const [data, setData] = useState({
    labels: [
      "SBI",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Bank",
      "PNB",
      "BoB",
      "Others",
    ],
    datasets: [
      {
        label: "Market Share",
        data: [25, 10, 8, 6, 5, 5, 5, 36],
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
      <h3>Bank</h3>
      <p className="description">
        The banking sector is the backbone of India’s financial system, driving credit, 
        savings, and economic growth. 
      </p>
      <ul className="description">
        <li>Retail Banking – Deposits, loans, credit cards, personal finance (HDFC, ICICI).</li>
        <li>Corporate & Wholesale Banking – Loans to businesses, infra, trade finance (SBI, Axis, ICICI)</li>
        <li>
          Investment Banking & Treasury – Advisory, capital markets, trading (Kotak, Axis, ICICI).
        </li>
        <li>
          Digital & Fintech Banking – UPI, mobile banking, neobanking partnerships..
        </li>
        <li>Rural & Agricultural Banking – Priority sector lending, microfinance (SBI, PSU banks).</li>
      </ul>
      <div className="chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
