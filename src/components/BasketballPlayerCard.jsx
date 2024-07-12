import React from "react";
import "./BasketballPlayerCard.css";

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <img src={image} alt={`${name}`} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <p>
          Points per Game:{" "}
          <span className="stats-color"> {stats.pointsPerGame}</span>
        </p>
        <p>
          Assists per Game:
          <span className="stats-color"> {stats.assistsPerGame}</span>
        </p>
        <p>
          Rebounds per Game:
          <span className="stats-color"> {stats.reboundsPerGame}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
