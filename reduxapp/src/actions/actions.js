import axios from "axios";

export const FETCH_STARWARS_START = "FETCH_STARWARS_START";
export const FETCH_STARWARS_SUCCESS = "FETCH_STARWARS_SUCCESS";
export const FETCH_STARWARS_FAILED = "FETCH_STARWARS_FAILED";

export const getStarWars = () => dispatch => {
  dispatch({ type: FETCH_STARWARS_START });
  axios
    .get("https://swapi.co/api/starships/")
    .then(response =>
      dispatch({ type: FETCH_STARWARS_SUCCESS, payload: response.data.results })
    )
    .catch(error =>
      dispatch({ type: FETCH_STARWARS_FAILED, payload: error.response })
    );
};
