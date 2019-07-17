import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./routes/User";
import Address from "./routes/Address";
import AvailableRoute from "./AvailableRoute";
// import formContext from "./FormContext";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={User} />
          <AvailableRoute
            path="/address"
            component={Address}
            step={1}
            redirect="/"
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
