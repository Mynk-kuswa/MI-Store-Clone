import React from "react";
import Offer from "./Offer.js";
import "../styles/Offers.css"

const Offers = ({ offer }) => {
  return (
    <div className="offerSection">
      {offer.map((items, index) => (
        <Offer
          key={items.image}
          index={index}
          src={items.image}
          link={items.url}
        />
      ))}
    </div>
  );
};

export default Offers;
