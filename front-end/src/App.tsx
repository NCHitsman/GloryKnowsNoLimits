import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Home from "./components/Home";
import { useAppDispatch } from "./store/index";
import LogInSignUpFormPage from "./components/LogInSignUpFormPage";

function App() {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/signup">
            <LogInSignUpFormPage page={"signup"} />
          </Route>
          <Route exact path="/login">
            <LogInSignUpFormPage page={"login"} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
