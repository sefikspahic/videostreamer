import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import StreamCreate from "./components/StreamCreate";
import StreamDelete from "./components/StreamDelete";
import StreamEdit from "./components/StreamEdit";
import StreamList from "./components/StreamList";
import StreamShow from "./components/StreamShow";

import "./App.css";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="videostreamer-app">
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <StreamList user={user} />
            </Route>
            <Route path="/streams/new">
              <StreamCreate />
            </Route>
            <Route path="/streams/edit/:id">
              <StreamEdit />
            </Route>
            <Route path="/streams/delete/:id">
              <StreamDelete />
            </Route>
            <Route path="/streams/:id">
              <StreamShow />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
