import React, { useContext } from "react";
import formContext from "../FormContext";

const Address = props => {
  const { handleChange, handleBlur, values, handleSubmit } = useContext(
    formContext
  );

  return (
    <div>
      <h1>Address page</h1>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.city}
        name="city"
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Address;
