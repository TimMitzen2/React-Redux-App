import React from "react";
import { getStarWars } from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";
const StarWarsList =()=> {
  const starWars = useSelector(state => state.starWars); // use instead of mapstatetoprops
  const dispatch = useDispatch(); //use instead of connect
  console.log(starWars);
  const fetchStarWars = event => {
    event.preventDefault();
    dispatch(getStarWars(event.target.value));
  };

  return (
    <>
      <h2>Welcome to StarWars World!</h2>
      {starWars.isFetching && <p>Fetching your Ships</p>}
      <div>
        {starWars.map(starWar => (
          <>
          <h4 key={starWar.url}>Name: {starWar.name}</h4>
          <h3>Model: {starWar.model}</h3>
          </>
        ))}
      </div>
      {starWars.error && <p className="error">{starWars.error}</p>}
      <button onClick={fetchStarWars}>Fetch Starwars</button>
    </>
  );
};

export default StarWarsList;
