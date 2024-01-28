import React from "react";
import PlayerCardItem from "./PlayerCardItem";
import "./PlayerCard.css";

const AllPlayers = ({ players }) => {
  return (
    <div className="all-players-container">
      {players.map((player) => {
        return <PlayerCardItem key={player.id} player={player} />;
      })}
    </div>
  );
};

export default AllPlayers;
