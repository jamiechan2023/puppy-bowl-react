import React from "react";
import "./PlayerCard.css";
import { useNavigate } from "react-router-dom";

const PlayerCardItem = ({ player, isSinglePlayer }) => {
  const navigate = useNavigate();
  const handleDelete = () => {};
  const handleSeeDetail = () => {
    if (!isSinglePlayer) {
      navigate(`/players/${player.id}`);
    } else {
      navigate("/players");
    }
  };
  return (
    <div className="player-container">
      <div className="header-info">
        <p className="player-title">{player.name}</p>
        <p className="player-number">{player.id}</p>
      </div>
      {!isSinglePlayer ? null : (
        <p>Team: {player.team ? player.team.name : "Unassigned"}</p>
      )}
      {!isSinglePlayer ? null : <p>Breed: {player.breed}</p>}
      <img className="player-image" src={player.imageUrl} alt={player.name} />
      <div>
        <button
          onClick={handleSeeDetail}
          className="detail-button"
          data-id={player.id}
        >
          {!isSinglePlayer ? "See Details" : "Go Back"}
        </button>
        <button className="delete-button" data-id={player.id}>
          Remove from roster
        </button>
      </div>
    </div>
  );
};

export default PlayerCardItem;
