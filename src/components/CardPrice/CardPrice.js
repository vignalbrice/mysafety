import React from "react";
import "./CardPrice.scss";
const CardPrice = (props) => {
  return <div className="card-price">{props.children}</div>;
};

export default CardPrice;
