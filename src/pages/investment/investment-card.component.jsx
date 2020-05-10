import React from "react";
import "./investment.styles.scss";
import { InvestmentCardData } from "../../assets/data/investment-plans-data";

const InvestmentCard = () => {
  return (
    <div className="investment__cards">
      {InvestmentCardData.map((item, i) => (
        <div key={i} className="investment__cards--box">
          <div
            className="investment__cards--box__header"
            style={{
              backgroundImage: `url(${item.header})`,
            }}
          >
            <h1>{item.title}</h1>
            <div style={{ color: item.color }}>
              <p>{item.sub_title1}</p>
              <p>{item.sub_title2}</p>
            </div>
          </div>
          <div className="investment__cards--box__content">
            {item.content.map((list) => (
              <div className="investment__cards--box__content--list">
                <i className="fa fa-check"></i>
                <p>{list}</p>
              </div>
            ))}
          </div>
          <div className="investment__cards--box__btn">
            <p style={{ backgroundColor: item.color }}>Select</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default InvestmentCard;
