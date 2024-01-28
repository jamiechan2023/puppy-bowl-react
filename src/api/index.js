const cohortName = "2309-FTB-MT-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(APIURL);
    console.log("response --->", response);
    if (!response.ok) {
      throw new Error("Network response /GET players not ok");
    }
    const result = await response.json();
    console.log("result --->", result);
    if (result.error) {
      throw result.error;
    }
    return result.data.players;
  } catch (error) {
    console.error("There was an error /GET players", error);
  }
};
