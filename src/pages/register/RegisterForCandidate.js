import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
export default function RegisterForCandidate() {
  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Create account as a candidate
        </Header>
        <Form size="large">
          <Segment textAlign="left" stacked>
            <Form.Input
              fluid
              label="First Name"
              icon="user"
              iconPosition="left"
              placeholder="First Name"
            />
            <Form.Input
              fluid
              label="Last Name"
              icon="user"
              iconPosition="left"
              placeholder="Last Name"
            />
            <Form.Input
              fluid
              label="Nationality Number"
              icon="keyboard outline"
              iconPosition="left"
              placeholder="Nationality Number"
              type="number"
            />
            <Form.Input
              fluid
              label="Birt Date"
              icon="birthday"
              iconPosition="left"
              placeholder="Birth Date"
              type="date"
            />
            <Form.Input
              fluid
              label="E-Mail"
              icon="mail"
              iconPosition="left"
              placeholder="E-mail"
            />
            <Form.Input
              label="Password"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button color="teal" fluid size="large">
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Do you already have an account? <Link to="/">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
