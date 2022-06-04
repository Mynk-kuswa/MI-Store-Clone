import React from "react";
import "../styles/HotAccessories.css";
import HotItemCard from "../components/HotItemCard.js";

const HotAccessories = ({ home, cover }) => {
  return (
    <div className="HotAccessories">
      <div>
        <img src={cover} alt="Cover" />
      </div>
      <div>
        {home.map((item, index) => (
          <HotItemCard
            key={item.image}
            image={item.image}
            name={item.name}
            price={item.price}
            index={index}
          />
        ))}
        <div>
          <p></p>
        </div>
        
      </div>
    </div>
  );
};

export default HotAccessories;
