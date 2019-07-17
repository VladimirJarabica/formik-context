import React, { useContext } from "react";
import formContext from "../FormContext";

const User = props => {
  const { handleChange, handleBlur, values, validateForm } = useContext(
    formContext
  );

  return (
    <div>
      <h1>User page</h1>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        name="email"
      />
      <button
        onClick={() => {
          validateForm();
          props.history.push("/address");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default User;
