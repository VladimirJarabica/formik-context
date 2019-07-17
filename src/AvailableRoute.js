import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import formContext from "./FormContext";

const AvailableRoute = ({ component: Component, step, redirect, ...rest }) => {
  const { lastAvailableStep } = useContext(formContext);
  if (lastAvailableStep < step) {
    return <Redirect to={redirect} />;
  }
  return <Route {...rest} component={Component} />;
};

export default AvailableRoute;
