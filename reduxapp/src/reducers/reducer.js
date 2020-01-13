import {
  FETCH_STARWARS_FAILED,
  FETCH_STARWARS_START,
  FETCH_STARWARS_SUCCESS
} from "../actions/actions";

const initialState = {
  starWars: [],
  error: "",
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARWARS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_STARWARS_SUCCESS:
      return {
        ...state,
        starWars: action.payload,
        isFetching: true,
        error: ""
      };
    case FETCH_STARWARS_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
