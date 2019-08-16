import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE,
  NEW_SMURF,
  POST_SMURF_DATA_START,
  POST_SMURF_DATA_SUCCESS,
  POST_SMURF_DATA_FAILURE
} from "../actions/index";

const initialState = {
  smurfs: [],
  isLoading: false,
  isAdding: false,
  error: "",
  newSmurf: {
    name: "",
    age: "",
    height: "",
    id: ""
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ""
      };
    case FETCH_SMURF_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case POST_SMURF_DATA_START:
      return {
        ...state,
        isAdding: true
      };
    case POST_SMURF_DATA_START:
      return {
        ...state,
        isAdding: true,
        error: ""
      };
    case POST_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isAdding: false,
        error: "",
        smurfs: [...state.smurfs, action.payload]
      };
    case POST_SMURF_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case NEW_SMURF:
      return {
        ...state,
        newSmurf: action.payload
      };
    default:
      return state;
  }
};
