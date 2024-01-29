import React, { useState } from "react";
import { addNewPlayer } from "../api";

const NewPlayer = ({ setPlayers }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !breed || !imageUrl) {
      alert("Please fill out the form");
    } else {
      const newPlayer = await addNewPlayer(name, breed, imageUrl);
      console.log("new player ---> ", newPlayer);
      setPlayers((prevPlayer) => [newPlayer, ...prevPlayer]);
    }
    setName("");
    setBreed("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new player</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        value={breed}
        onChange={(event) => setBreed(event.target.value)}
        required
      />
      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        required
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default NewPlayer;
