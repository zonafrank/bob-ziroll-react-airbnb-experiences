import React from "react";
import Card from "./Card";
import katieZeferes from "../images/katie-zaferes.png";
import weddinPhotography from "../images/wedding-photography.png";
import mountainBike from "../images/mountain-bike.png";

const CardSection = ({ cards }) => {
  return (
    <section id="card-section">
      {cards.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </section>
  );
};

export default CardSection;
