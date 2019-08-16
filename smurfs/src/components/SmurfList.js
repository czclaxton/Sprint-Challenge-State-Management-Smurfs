import React from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import Loader from "react-loader-spinner";
import SmurfForm from "./SmurfForm";
import { postData } from "../actions/index";

const SmurfList = props => {
  console.log("list: ", props);
  return (
    <div>
      <h1>List of Smurfs</h1>
      <SmurfForm
        postData={props.postData}
        smurfs={props.smurfs}
        newSmurf={props.newSmurf}
      />
      <hr />
      <button onClick={props.getData}>Show Smurfs</button>

      {/* {console.log("props", props)} */}
      {props.isLoading === true ? (
        <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
      ) : (
        props.smurfs.map(smurf => (
          <SmurfCard
            key={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => {
  //   console.log(state.smurfs);
  return {
    isLoading: state.isLoading,
    isAdded: state.isAdded,
    smurfs: state.smurfs,
    newSmurf: state.newSmurf
  };
};

export default connect(
  mapStateToProps,
  { getData, postData }
)(SmurfList);
