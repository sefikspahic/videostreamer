import React, { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";

import loginFormatter from "../../utils/helpers/loginFormatter";
import { useDispatch, useSelector } from "react-redux";
import UserActions from "../../actions";

import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "626046364349-dt83ji31j9mdhlf5k83lg0d27cjcigot.apps.googleusercontent.com";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loged, setLoged] = useState(false);
  const user = useSelector((state) => state.user);

  const signIn = (response) => {
    if (response) {
      const loggedUser = loginFormatter(response);
      dispatch(UserActions.setUser(loggedUser));
      setLoged(true);
    }
  };

  const signOut = () => {
    history.push(`/`);
    window.location.reload();
  };

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand onClick={() => history.push("/")}>
          Videostreamer
        </Navbar.Brand>
        <Navbar.Brand
          style={{
            margin: "auto",
            justifyContent: "right",
            display: "flex",
            marginRight: "5rem",
          }}
          onClick={() => history.push("/")}
        >
          All streams
        </Navbar.Brand>

        <div className="navbar-brand">
          <Button variant="default" href="#">
            {!loged ? (
              <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Login"
                onSuccess={signIn}
              />
            ) : (
              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={signOut}
                
              />
              
            )}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
