import Img1 from "../img/investment/invest-card-img1.svg";
import Img2 from "../img/investment/invest-card-img2.svg";
import Img3 from "../img/investment/invest-card-img3.svg";

export const InvestmentCardData = [
  {
    header: Img1,
    title: "Forex Trading",
    sub_title1: "10% in",
    sub_title2: "15 Days",
    color: "var(--secondary-color)",
    content: [
      "Maturity 15 days",
      "Minimum Investment $50",
      "Maximum Investment $5,000",
      "Enhanced Security",
      "Wallet Integration",
    ],
    invest: {
      name: "forex",
      minimum: 50,
      maximum: 5000,
      days: 15,
      percentage: 10,
    },
  },
  {
    header: Img2,
    title: "Cryptocurrency Trading",
    sub_title1: "15% in",
    sub_title2: "25 Days",
    color: "var(--primary-color)",
    content: [
      "Maturity 25 days",
      "Minimum Investment $500",
      "Maximum Investment $20,000",
      "Enhanced Security",
      "Wallet Integration",
    ],
    invest: {
      name: "cryptocurrency",
      minimum: 500,
      maximum: 20000,
      days: 25,
      percentage: 15,
    },
  },
  {
    header: Img3,
    title: "Vip Trading",
    sub_title1: "25% in",
    sub_title2: "40 Days",
    color: "var(--tertiary-color)",
    content: [
      "Maturity 40 days",
      "Minimum Investment $5,000",
      "Maximum Investment $50,000",
      "Enhanced Security",
      "Wallet Integration",
    ],
    invest: {
      name: "vip",
      minimum: 5000,
      maximum: 50000,
      days: 40,
      percentage: 25,
    },
  },
];
