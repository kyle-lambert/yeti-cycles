import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

// pages
import Home from "./pages/Home/Home";
import Bikes from "./pages/Bikes/Bikes";
import Bike from "./pages/Bike/Bike";
import Error from "./pages/Error/Error";

// bike data object
import bikes from "../data/bikes";

function App(props) {
  const findBike = (routeProps) => {
    const bike = bikes.find(
      (bike) =>
        bike.name.trim().toLowerCase() ===
        routeProps.match.params.name.trim().toLowerCase()
    );

    if (bike) return <Bike bike={bike} />;
    return <Redirect exact to="/404" />;
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bikes" component={Bikes} />
        <Route
          exact
          path="/bikes/:name"
          render={(routeProps) => findBike(routeProps)}
        />
        <Route exact path="/404" component={Error} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </div>
  );
}

export default App;
