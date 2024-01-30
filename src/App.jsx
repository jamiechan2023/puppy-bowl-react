import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import { fetchAllPlayers } from "./api";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [originalPlayers, setOriginalPlayers] = useState([]);

  useEffect(() => {
    const getAllPlayers = async () => {
      const players = await fetchAllPlayers();
      setPlayers(players);
      setOriginalPlayers(players);
    };
    getAllPlayers();
  }, []);

  console.log("players from App --->", players);
  console.log("originalPlayers from App --->", originalPlayers);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Puppy Bowl</h1>} />
        <Route
          path="/players"
          element={
            <AllPlayers
              players={players}
              setPlayers={setPlayers}
              originalPlayers={originalPlayers}
            />
          }
        />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
};

export default App;
