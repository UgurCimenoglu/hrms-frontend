import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <Button.Group>
      <Button as={Link} to="/login" size="large" color="blue" onClick={props.SignIn}>
        {" "}
        Giriş{" "}
      </Button>
      <Button.Or />
      <Button as={Link} to="/register" size="large" color="teal">
        Kayıt
      </Button>
    </Button.Group>
  );
}
