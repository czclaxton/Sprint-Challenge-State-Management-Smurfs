import axios from "axios";

export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const FETCH_SMURF_DATA_FAILURE = "FETCH_SMURF_DATA_FAILURE";
export const NEW_SMURF = "NEW_SMURF";
export const POST_SMURF_DATA_START = "POST_SMURF_DATA_START";
export const POST_SMURF_DATA_SUCCESS = "POST_SMURF_DATA_SUCCESS";
export const POST_SMURF_DATA_FAILURE = "POST_SMURF_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        // console.log(res);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
};

export const newSmurf = newSmurf => {
  return { type: NEW_SMURF, payload: newSmurf };
};

export const postData = smurfs => {
  console.log(smurfs);
  return dispatch => {
    dispatch({ type: POST_SMURF_DATA_START });
    axios
      .post("http://localhost:3333/smurfs", smurfs)
      .then(res => {
        console.log("post: ", res);
        dispatch({ type: POST_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POST_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
};
