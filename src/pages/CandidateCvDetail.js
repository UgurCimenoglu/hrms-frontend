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
  Form,
  Checkbox,
} from "semantic-ui-react";
import cvService from "../services/cvService";

function educationReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

function experienceReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

export default function CandidateCvDetail() {
  const [state, dispatch] = React.useReducer(educationReducer, {
    open: false,
    dimmer: undefined,
  });

  const { open, dimmer } = state;

  return (
    <Segment>
      <Header as="h1" floated="left">
        Curriculum Viate
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
          <h2>Uğur Çimenoğlu</h2>
          <Divider clearing />
          <h3>
            <Icon name="mail" />
            ugurcimenoglu@hotmail.com
          </h3>

          <h4>
            <Icon name="linkedin" />
            linkedin.om/ugurcimenoglu
          </h4>
          <h4>
            <Icon name="github" />
            github.com/ugurcimenoglu
          </h4>
          <Divider clearing />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus.
          </p>
          <br />
        </Grid.Column>
      </Grid>
      <Divider horizontal>
        <h3>
          {" "}
          <Icon name="university" /> EDUCATION{"  "}
          <Button
            size="small"
            icon="add"
            color="grey"
            onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
          ></Button>
        </h3>
      </Divider>
      <Modal
        size="tiny"
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header>Add School</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>School Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Department Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <label>Start Date</label>
              <input type="date" placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Graduate Date</label>
              <input placeholder="First Name" />
            </Form.Field>
          </Form>
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
          <Card.Header>Düzce Üniversitesi</Card.Header>
          <Card.Content>Bilgisayar Mühendisliği</Card.Content>
          <Card.Content>2016 -2021</Card.Content>
        </Card.Content>
      </Card>
      <Divider horizontal>
        <h3>
          {" "}
          <Icon name="briefcase" /> EXPERIENCE{"  "}
          <Button
            size="small"
            icon="add"
            color="grey"
            onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
          ></Button>
        </h3>
      </Divider>
      <Modal
        size="tiny"
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header>Add School</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Workplace Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Position Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <label>Start Date</label>
              <input type="date" placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Leave Date</label>
              <input placeholder="First Name" />
            </Form.Field>
          </Form>
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
          <Card.Header>Code and More</Card.Header>
          <Card.Content>Software Developer</Card.Content>
          <Card.Content>2016 -2021</Card.Content>
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
          <Card.Header>Code and More</Card.Header>
          <Card.Content>Software Developer</Card.Content>
          <Card.Content>2016 -2021</Card.Content>
        </Card.Content>
      </Card>
      <Divider horizontal>
        <h3>
          {" "}
          <Icon name="language" /> LANGUAGE{"  "}
          <Button
            size="small"
            icon="add"
            color="grey"
            onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
          ></Button>
        </h3>
      </Divider>
      <Card fluid>
        <Card.Content>
          <Button inverted icon="delete" color="red" floated="right"></Button>
          <Button inverted icon="edit" color="green" floated="right"></Button>
          <Card.Header>English</Card.Header>
          <Card.Content>
            <Rating
              rating={4}
              maxRating={5}
              defaultRating={3}
              disabled
              icon="star"
              size="small"
            />
          </Card.Content>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Button inverted icon="delete" color="red" floated="right"></Button>
          <Button inverted icon="edit" color="green" floated="right"></Button>
          <Card.Header>English</Card.Header>
          <Card.Content>
            <Rating
              rating={4}
              maxRating={5}
              defaultRating={3}
              disabled
              icon="star"
              size="small"
            />
          </Card.Content>
        </Card.Content>
      </Card>
      <Divider horizontal>
        <h3>
          {" "}
          <Icon name="code" /> SKILLS{"  "}
          <Button
            size="small"
            icon="add"
            color="grey"
            onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
          ></Button>
        </h3>
      </Divider>
      <Card fluid>
        <Card.Content>
          <Button inverted icon="delete" color="red" floated="right"></Button>
          <Button inverted icon="edit" color="green" floated="right"></Button>
          <Label size="big" color="grey" horizontal>
            C#
          </Label>
          <Label size="big" color="grey" horizontal>
            Javascript
          </Label>
          <Label size="big" color="grey" horizontal>
            Java
          </Label>
        </Card.Content>
      </Card>
    </Segment>
  );
}
