import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlayerCardItem from "./PlayerCardItem";
import { fetchSinglePlayer } from "../api";

const SinglePlayer = () => {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();
  console.log("id from useParams:", { id });
  useEffect(() => {
    const getSinglePlayer = async () => {
      const player = await fetchSinglePlayer(id);
      setPlayer(player);
    };
    getSinglePlayer();
    console.log("player from SinglePlayer -->", player);
  }, [id]);

  return (
    <div>
      {player && <PlayerCardItem player={player} isSinglePlayer={id} />}
    </div>
  );
};

export default SinglePlayer;
