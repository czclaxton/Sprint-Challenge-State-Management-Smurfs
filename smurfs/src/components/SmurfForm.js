import React, { useState } from "react";

const SmurfForm = ({ newSmurf, postData, smurfs }) => {
  const [addedSmurf, setAddedSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setAddedSmurf({ ...addedSmurf, [e.target.name]: e.target.value });
  };

  const submitChange = e => {
    e.preventDefault();
    postData(addedSmurf);
  };

  return (
    <div>
      <form onSubmit={submitChange}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Height"
          name="height"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SmurfForm;
