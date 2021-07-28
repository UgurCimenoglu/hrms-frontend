import React, { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Form,
  Icon,
  Image,
  Modal,
} from "semantic-ui-react";

export default function CandidateExperience() {
  const [expOpen, setExpOpen] = useState(false);
  return (
    <div>
      <Divider horizontal>
        <h3>
          {" "}
          <Icon name="briefcase" /> EXPERIENCE{"  "}
          <Button
            size="small"
            icon="add"
            color="grey"
            onClick={() => setExpOpen(true)}
          ></Button>
        </h3>
      </Divider>
      <Modal
        size="tiny"
        // dimmer={dimmer}
        open={expOpen}
        onClose={() => setExpOpen(false)}
      >
        <Modal.Header>Add Experience</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Workplace Name</label>
              <input placeholder="Workplace" />
            </Form.Field>
            <Form.Field>
              <label>Position Name</label>
              <input placeholder="Position" />
            </Form.Field>
            <Form.Field>
              <label>Start Date</label>
              <input type="date" placeholder="Start Date" />
            </Form.Field>
            <Form.Field>
              <label>Leave Date</label>
              <input type="date" placeholder="Leave Date" />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setExpOpen(false)}>
            Cancel
          </Button>
          <Button positive onClick={() => setExpOpen(false)}>
            Add
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
    </div>
  );
}
