import React from "react";
import {
  Divider,
  Header,
  Icon,
  Image,
  Segment,
  Grid,
  Button,
  Modal,
  Card,
  Label,
  Rating,
} from "semantic-ui-react";
import cvService from "../services/cvService";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

export default function EmployerDetail() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  return (
    <Segment>
      <Header as="h1" floated="left">
        Employer
      </Header>
      <Divider clearing />
      <Grid>
        <Grid.Column width={6}>
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            size="medium"
            circular
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <h2>Code and More</h2>
          <Divider clearing />
          <h3>
            <Icon name="mail" />
            code@more.com
          </h3>

          <h4>
            <Icon name="chrome" />
            www.codeandmore.com.tr
          </h4>
          <h4>
            <Icon name="phone" />
            0555 555 55 55
          </h4>

          <br />
        </Grid.Column>
      </Grid>
      <Divider horizontal>
        <h3>
          {" "}
          <Icon name="university" /> Job Advertisements{"  "}
          <Button
            size="small"
            icon="add"
            color="grey"
            onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
          ></Button>
        </h3>
      </Divider>
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header>Use Google's location service?</Modal.Header>
        <Modal.Content>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            Disagree
          </Button>
          <Button positive onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            Agree
          </Button>
        </Modal.Actions>
      </Modal>
      <Card fluid>
        <Card.Content>
          <Button inverted icon="delete" color="red" floated="right"></Button>
          <Button inverted icon="edit" color="green" floated="right"></Button>
          <Image
            floated="left"
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          />
          <Card.Header>DevOps</Card.Header>
          <Card.Meta>İstanbul</Card.Meta>
          <Card.Content>
            5 Yıl Deneyimli Devops pozisyonu için arayışımız bulunmaktadir.
            Erkek adaylar için askerlik şartı aranmaktadır.
          </Card.Content>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Button inverted icon="delete" color="red" floated="right"></Button>
          <Button inverted icon="edit" color="green" floated="right"></Button>
          <Image
            floated="left"
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          />
          <Card.Header>DevOps</Card.Header>
          <Card.Meta>İstanbul</Card.Meta>
          <Card.Content>
            5 Yıl Deneyimli Devops pozisyonu için arayışımız bulunmaktadir.
            Erkek adaylar için askerlik şartı aranmaktadır.
          </Card.Content>
        </Card.Content>
      </Card>
    </Segment>
  );
}
