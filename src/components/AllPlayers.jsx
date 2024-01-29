import React from "react";
import PlayerCardItem from "./PlayerCardItem";
import "./PlayerCard.css";
import NewPlayer from "./NewPlayer";
// import SearchPlayer from "./SearchPlayer";

const AllPlayers = ({ players, setPlayers }) => {
  return (
    <div className="all-players-container">
      <NewPlayer setPlayers={setPlayers} />
      {/* <SearchPlayer players={players} /> */}
      {players.map((player) => {
        return (
          <PlayerCardItem
            key={player.id}
            player={player}
            setPlayers={setPlayers}
          />
        );
      })}
    </div>
  );
};

export default AllPlayers;
