import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
export default function RegisterForEmployer() {
  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Create account as an employer
        </Header>
        <Form size="large">
          <Segment textAlign="left" stacked>
            <Form.Input
              fluid
              label="Company Name"
              icon="warehouse"
              iconPosition="left"
              placeholder="Company Name"
            />
            <Form.Input
              fluid
              label="Web Address"
              icon="edge"
              iconPosition="left"
              placeholder="Web Address"
            />
            <Form.Input
              fluid
              label="Phone Number"
              icon="text telephone"
              iconPosition="left"
              placeholder="Phone Number"
              type="number"
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
          Do you already have an account? <a href="#">Sign In</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
