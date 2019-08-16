import React from "react";

const SmurfCard = props => {
  return (
    <div className="smurfCard">
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Height: {props.height}</h3>
    </div>
  );
};

export default SmurfCard;
