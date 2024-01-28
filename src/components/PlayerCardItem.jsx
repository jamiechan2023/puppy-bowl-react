import React from "react";
import "./PlayerCard.css";

const PlayerCardItem = ({ player }) => {
  return (
    <div className="player-container">
      <div className="header-info">
        <p className="player-title">{player.name}</p>
        <p className="player-number">{player.id}</p>
      </div>
      <img className="player-image" src={player.imageUrl} alt={player.name} />
      <div>
        <button className="detail-button" data-id={player.id}>
          See Details
        </button>
        <button className="delete-button" data-id={player.id}>
          Remove from roster
        </button>
      </div>
    </div>
  );
};

export default PlayerCardItem;
