import React from "react";
import starImg from "../images/star.png";
import ellipseImg from "../images/ellipse.png";

const Card = (props) => {
  const {
    coverImg,
    altDesc,
    location,
    stats: { reviewCount, rating },
    title,
    price,
    openSpots
  } = props;

  const status =
    location === "Online" ? "online" : openSpots === 0 ? "sold out" : "";

  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src={require(`../images/${coverImg}`)}
          className="card-image"
          alt={altDesc}
        />
        {status ? <span className="status uppercase">{status}</span> : ""}
      </div>
      <div className="card-info">
        <div className="card-info-stats">
          <img src={starImg} alt="rating" className="card-rating-img" />
          <span className="card-rating-value">{rating}</span>
          <span className="card-rating-count">({reviewCount})</span>
          <img src={ellipseImg} alt="card-ellipse" />
          <span className="card-country">{location}</span>
        </div>
        <div className="card-info-title">{title}</div>
        <div className="card-info-price">
          <span className="price">From ${price}</span> / person
        </div>
      </div>
    </div>
  );
};

export default Card;
