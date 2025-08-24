import { useParams } from "react-router-dom";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SectorDetails() {
  const { id } = useParams();
  const sectorId = parseInt(id);

  const sectorsDetails = [
    {
      id: 1,
      name: "IT (Information Technology)",
      description: `The Information Technology (IT) sector in India is one of the largest
        contributors to the economy. It includes IT services, consulting,
        software products, engineering R&D, and business process management`,
      keyData: [
        "Contribution to GDP: ~7.5%",
        "Employment: 5 million people",
        "Exports: India’s IT exports are ~60%+ of the sector’s revenue",
        "Key Markets: USA (~50–60% revenue), Europe (~20–25%), APAC & others",
      ],
      marketShare: [
        { label: "TCS", value: 30 },
        { label: "Infosys", value: 20 },
        { label: "HCL Tech", value: 12 },
        { label: "Wipro", value: 10 },
        { label: "Tech Mahindra", value: 7 },
        { label: "LTIMindTree", value: 5 },
        { label: "Others", value: 16 },
      ],
    },
    {
      id: 2,
      name: "Pharma",
      description: `The Indian Pharmaceutical Industry is one of the largest globally. it includes business models 
        such as Generic Drugs, Formulations, Active Pharmaceutical Ingredients, Specialty & Novel Drugs
        Vaccines & Biotech, Healthcare and Contract Research & Manufacturing. `,
      keyData: [
        "Global Rank: 3rd in volume, 13th in value.",
        "Market Size: ~₹4.9 lakh crore (FY24)",
        "Exports: ~US$ 25–27 billion annually (largest supplier of generic medicines worldwide).",
        "Contribution: Supplies ~20% of global generics and ~60% of global vaccine demand.",
      ],
      marketShare: [
        { label: "Sun Pharma", value: 9 },
        { label: "Cipla", value: 6 },
        { label: "Dr. Reddy’s", value: 5 },
        { label: "Aurobindo", value: 4 },
        { label: "Lupin", value: 4 },
        { label: "Zydus", value: 4 },
        { label: "Torrent", value: 3 },
        { label: "Others", value: 65 },
      ],
    },
    {
      id: 3,
      name: "Bank",
      description: `The banking sector is the backbone of India’s financial system, driving credit, 
        savings, and economic growth.`,
      keyData: [
        "Retail Banking – Deposits, loans, credit cards, personal finance (HDFC, ICICI).",
        "Corporate & Wholesale Banking – Loans to businesses, infra, trade finance (SBI, Axis, ICICI)",
        "Investment Banking & Treasury – Advisory, capital markets, trading (Kotak, Axis, ICICI).",
        "Digital & Fintech Banking – UPI, mobile banking, neobanking partnerships..",
        "Rural & Agricultural Banking – Priority sector lending, microfinance (SBI, PSU banks).",
      ],
      marketShare: [
        { label: "SBI", value: 25 },
        { label: "HDFC Bank", value: 10 },
        { label: "ICICI Bank", value: 8 },
        { label: "Axis Bank", value: 6 },
        { label: "Kotak Bank", value: 5 },
        { label: "PNB", value: 5 },
        { label: "BoB", value: 5 },
        { label: "Others", value: 36 },
      ],
    },
    {
      id: 4,
      name: "Insurence",
      description: `The Indian insurance sector is a fast-growing part of the financial 
      ecosystem, covering life insurance, health insurance, and general insurance.`,
      keyData: [
        "Market Size (FY24): ~US$ 150 billion (₹12+ lakh crore GWP – Gross Written Premium).",
        "Global Rank: 10th largest insurance market by premium.",
        "Drivers: Rising middle class, health awareness post-Covid, government schemes (PMJAY, crop insurance), digital distribution.",
        "Life Insurance → ~3.2% of GDP (close to global avg).",
        "Non-Life Insurance → ~1% of GDP (much lower than global avg 4%).",
      ],
      marketShare: [
        { label: "LIC", value: 62 },
        { label: "SBI Life", value: 9 },
        { label: "HDFC Life", value: 9 },
        { label: "ICICI Prodential Life", value: 7 },
        { label: "Max Life", value: 5 },
        { label: "Others", value: 8 },
      ],
    },
    {
      id: 5,
      name: "FMCG",
      description: `The FMCG sector is one of India’s largest and most defensive industries, covering 
        daily-use products across food, beverages, personal care, household care, and tobacco.`,
      keyData: [
        "Contribution: ~50% of consumer spending; 3rd largest sector of Indian economy.",
        "Market Size (FY24): US$ 180 billion (₹15 lakh crore).",
        "Growth Drivers: Rising middle class, rural consumption, premiumisation, e-commerce, modern retail, health-conscious products.",
        "Distribution: 12+ million retail outlets in India (kirana stores dominate, e-commerce rising via Flipkart, Amazon, Blinkit, BigBasket).",
        "Market Share: 24% of Indian GDP (close to global avg).",
      ],
      marketShare: [
        { label: "HUL", value: 15 },
        { label: "ITC", value: 7 },
        { label: "Nestle", value: 6 },
        { label: "Dabur", value: 4 },
        { label: "Britannia", value: 4 },
        { label: "Colgate", value: 3 },
        { label: "Marico", value: 3 },
        { label: "Others", value: 48 },
      ],
    },
    {
      id: 6,
      name: "Auto",
      description: `The Indian automobile sector is one of the largest globally, 
      covering passenger vehicles (cars, SUVs), commercial vehicles (trucks, buses), 
      two-wheelers, three-wheelers, and EVs.`,
      keyData: [
        "Market Size (FY24): US$ 150 billion (₹12.5 lakh crore).",
        "Global Rank: 9th largest automobile market by volume.",
        "Contribution: ~7% of India’s GDP, ~40% of manufacturing GDP.",
        "Exports: India is a major hub for two-wheelers & small cars (Maruti, Bajaj, TVS, Hyundai).",
        "Future Drivers: EV adoption, government incentives (FAME II, PLI), rising middle-class income, rural mobility demand.",
      ],
      marketShare: [
        { label: "Maruti Suzuki", value: 42 },
        { label: "Hyundai", value: 15 },
        { label: "Tata Motors", value: 14 },
        { label: "Mahindra", value: 9 },
        { label: "Kia", value: 7 },
        { label: "Others", value: 13 },
      ],
    },
    {
      id: 7,
      name: "Finance",
      description: `NBFCs are financial institutions that provide credit, loans, and 
      investments but do not have a banking license (cannot accept demand deposits).
       They play a huge role in retail credit, consumer lending, vehicle loans, gold loans,
        and microfinance.`,
      keyData: [
        "NBFC Sector Size (FY24): ~₹42 lakh crore in AUM.",
        "Growth: ~15% CAGR, faster than banks in many retail segments.",
        "Advantage: Niche focus, faster approvals, less regulated than banks.",
      ],
      marketShare: [
        { label: "Bajaj Finance", value: 12 },
        { label: "Shriram Finance", value: 8 },
        { label: "Cholamandalam", value: 6 },
        { label: "Muthoot Finance", value: 6 },
        { label: "Manappuram", value: 3 },
        { label: "L&T Finance", value: 3 },
        { label: "Others", value: 62 },
      ],
    },
    {
      id: 8,
      name: "Metal",
      description: `The metals sector forms the backbone of India’s infrastructure,
       manufacturing, and exports. It covers steel, aluminum, copper, zinc, and mining companies.`,
      keyData: [
        "Market Size (FY24): ₹13–14 lakh crore (listed metal companies).",
        "Exports Contribution: ~2.5% of India’s total exports.",
        "Drivers: Infrastructure spending, construction, automobiles, defense, renewable energy, EV boom.",
      ],
      marketShare: [
        { label: "Tata Steel", value: 18 },
        { label: "JSW Steel", value: 16 },
        { label: "SAIL", value: 15 },
        { label: "Hindalco", value: 10 },
        { label: "Vedanta", value: 9 },
        { label: "NMDC", value: 5 },
        { label: "Jindal Steel & Power", value: 5 },
        { label: "Others", value: 22 },
      ],
    },
    {
      id: 9,
      name: "Cement",
      description: `The cement industry is the backbone of infrastructure, housing, and 
      construction in India.India is the second-largest producer of cement globally after China.`,
      keyData: [
          "Market Size (FY24): ~₹1.6–1.8 lakh crore",
          "Production: ~410–420 million tonnes annually",
          "Demand Drivers: Housing (65%), Infrastructure (20%), Commercial/Industrial (15%)",
          "Nature: Commodity, regional pricing, high logistics cost → strong regional dominance"
      ],
      marketShare: [
        { label: "UltraTech Cement", value: 30 },
        { label: "Adani Group (Ambuja + ACC)", value: 16 },
        { label: "Shree Cement", value: 6 },
        { label: "Dalmia Bharat", value: 6 },
        { label: "Other", value: 42 },
    ]
    }
   
  ];

  const sector = sectorsDetails.find((s) => s.id === sectorId);

  const [data, setData] = useState({
    labels: sector.marketShare.map((sector) => sector.label),
    datasets: [
      {
        label: "Market Share",
        data: sector.marketShare.map((sector) => sector.value),
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
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Market Share",
      },
    },
  };
  return (
    <div className="sectorDetails">
      <h3 className="name">{sectorsDetails[id - 1].name}</h3>
      <p className="description">{sectorsDetails[id - 1].description}</p>
      <ul className="description">
        {sectorsDetails[id - 1].keyData.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
      <div className="chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
