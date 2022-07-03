import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import CourtsPage from "./components/CourtsPage";
import CreateCourtPage from "./components/CreateCourtPage";
import UpdateCourtPage from "./components/UpdateCourtPage";
import ReviewsPage from "./components/ReviewsPage";
import CreateReviewPage from "./components/CreateReviewPage";
import HomePage from "./components/HomePage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          {/* <Route path="/courts/:id">
            <SingleCourtPage />
          </Route> */}
          <Route path="/courts">
            <CourtsPage />
          </Route>
          <Route exact path="/reviews/create/:id">
            <CreateReviewPage />
          </Route>
          <Route path="/reviews/court/:id">
            <ReviewsPage />
          </Route>
          <Route path="/create">
            <CreateCourtPage />
          </Route>
          <Route path="/court/:id">
            <UpdateCourtPage />
          </Route>
          <Route path ="/">
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
