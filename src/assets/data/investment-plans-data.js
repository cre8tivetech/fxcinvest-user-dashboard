import Img1 from "../img/investment/invest-card-img1.svg";
import Img2 from "../img/investment/invest-card-img2.svg";
import Img3 from "../img/investment/invest-card-img3.svg";

export const InvestmentCardData = [
  {
    header: Img1,
    title: "Forex Trading",
    sub_title1: "10% in",
    sub_title2: "10 Days",
    color: "var(--secondary-color)",
    content: [
      "Maturity 10 days",
      "Minimum Investment $50",
      "Maximum Investment $1500",
      "Enhanced Security",
      "Wallet Integration",
    ],
    invest: {
      name: "forex",
      minimum: 50,
      maximum: 1500,
      days: 10,
      percentage: 10,
    },
  },
  {
    header: Img2,
    title: "Cryptocurrency Trading",
    sub_title1: "50% in",
    sub_title2: "15 Days",
    color: "var(--primary-color)",
    content: [
      "Maturity 15 days",
      "Minimum Investment $1500",
      "Maximum Investment $5000",
      "Enhanced Security",
      "Wallet Integration",
    ],
    invest: {
      name: "cryptocurrency",
      minimum: 1500,
      maximum: 5000,
      days: 15,
      percentage: 50,
    },
  },
  {
    header: Img3,
    title: "Vip Trading",
    sub_title1: "100% in",
    sub_title2: "30 Days",
    color: "var(--tertiary-color)",
    content: [
      "Maturity 30 days",
      "Minimum Investment $3000",
      "Maximum Investment Unlimited",
      "Enhanced Security",
      "Wallet Integration",
    ],
    invest: {
      name: "vip",
      minimum: 3000,
      maximum: "Unlimited",
      days: 30,
      percentage: 100,
    },
  },
];
