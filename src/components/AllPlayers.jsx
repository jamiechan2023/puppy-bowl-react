import React from "react";
import PlayerCardItem from "./PlayerCardItem";
import "./PlayerCard.css";
import NewPlayer from "./NewPlayer";
import SearchBar from "./SearchBar";

const AllPlayers = ({ players, setPlayers, originalPlayers }) => {
  return (
    <div className="all-players-container">
      <NewPlayer setPlayers={setPlayers} />
      <SearchBar
        players={players}
        setPlayers={setPlayers}
        originalPlayers={originalPlayers}
      />
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
