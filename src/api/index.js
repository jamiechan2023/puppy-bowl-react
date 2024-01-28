const cohortName = "2309-FTB-MT-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(APIURL);
    console.log("response fetchAllPlayers --->", response);
    if (!response.ok) {
      throw new Error("Network response /GET players not ok");
    }
    const result = await response.json();
    console.log("result fetchAllPlayers --->", result);
    if (result.error) {
      throw result.error;
    }
    return result.data.players;
  } catch (error) {
    console.error("There was an error /GET players", error);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/${playerId}`);
    console.log("response fetchSinglePlayer --->", response);
    if (!response.ok) {
      throw new Error("Network response /GET single player not ok");
    }
    const result = await response.json();
    console.log("result fetchSinglePlayer --->", result);
    if (result.error) {
      throw result.error;
    }
    return result.data.player;
  } catch (error) {
    console.error(`There was an error /GET single player ${playerId}!`, error);
  }
};
