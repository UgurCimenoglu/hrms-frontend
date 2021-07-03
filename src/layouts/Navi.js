import React from "react";
import { Dropdown, Menu, Button, Container } from "semantic-ui-react";

export default function Navi() {
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
            <Button.Group>
              <Button size="large" color="blue"> Giriş </Button>
              <Button.Or />
              <Button size="large" color="teal">Kayıt</Button>
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
