import React, { useState } from "react";
import { useHistory } from "react-router";
import { Dropdown, Menu, Container } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
export default function Navi() {
  const [isAuthenticated, setIsAutheticated] = useState();
  const history = useHistory();

  function handleSignOut(params) {
    setIsAutheticated(false);
    history.push("/");
  }

  function handleSignIn(params) {
    setIsAutheticated(true);
  }

  return (
    <Menu size="large">
      <Container>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            {isAuthenticated ? (
              <SignedIn SignOut={handleSignOut} />
            ) : (
              <SignedOut SignIn={handleSignIn}/>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
