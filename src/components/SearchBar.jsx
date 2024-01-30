import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PlayerCardItem from "./PlayerCardItem";

const SearchBar = ({ players, setPlayers, originalPlayers }) => {
  console.log("originalPlayers pass in SearchBar --->", originalPlayers);
  const [searchName, setSearchName] = useState("");
  const handleChange = (value) => {
    // setPlayers(originalPlayers);
    console.log("Players in SearchBar --->", players);
    setSearchName(value);
    console.log("handleChange pass in value --->", value.toLowerCase());
    // setPlayers((prevPlayer) => {
    //   return prevPlayer.filter((pupPlayer) => {
    //     pupPlayer.name.toLowerCase() === value.toLowerCase();
    //     console.log(
    //       "pupPlayer.name.toLowerCase() vs value.toLowerCase--->",
    //       pupPlayer.name.toLowerCase() === value.toLowerCase()
    //     );
    //     console.log(
    //       "pupPlayer.name.toLowerCase()--->",
    //       pupPlayer.name.toLowerCase()
    //     );
    //     console.log("value.name.toLowerCase()--->", value.name.toLowerCase());
    //     console.log("Players in SearchBar after filter --->", players);
    //   });
    // });
  };

  return (
    <div>
      <h2>Search Bar</h2>
      <FaSearch />
      <input
        placeholder="Type name to search..."
        value={searchName}
        onChange={(e) => handleChange(e.target.value)}
      />
      {/* {players.map((player) => {
        return (
          <PlayerCardItem
            key={player.id}
            player={player}
            setPlayers={setPlayers}
          />
        );
      })} */}
    </div>
  );
};

export default SearchBar;
//   const [searchPlayer, setSearchPlayer] = useState([]);
//   const [searchName, setSearchName] = useState("");
//   const handleSearch = async () => {
//     setSearchPlayer(
//       players.filter((pupPlayer) => pupPlayer.name == searchName)
//     );
//   };

//   return (
//     <form>
//       <h2>Search</h2>
//       <label htmlFor="searchName">Name</label>
//       <input
//         type="text"
//         value={searchName}
//         onChange={(event) => setSearchName(event.target.value)}
//       ></input>
//       <button onClick={handleSearch}>Search</button>
//     </form>
//   );
// };

// export default SearchPlayer;
