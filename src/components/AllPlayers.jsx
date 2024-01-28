import React from "react";
import PlayerCardItem from "./PlayerCardItem";
import "./PlayerCard.css";
//import NewPlayer from "./NewPlayer";

const AllPlayers = ({ players }) => {
  return (
    <div className="all-players-container">
      {/* <NewPlayer /> */}
      {players.map((player) => {
        return <PlayerCardItem key={player.id} player={player} />;
      })}
    </div>
  );
};

export default AllPlayers;
