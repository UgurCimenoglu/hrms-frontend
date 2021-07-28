import React, { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Form,
  Icon,
  Modal,
  Rating,
} from "semantic-ui-react";

export default function CandidateLanguage() {
  const [langOpen, setLangOpen] = useState(false);
  return (
    <div>
      <Divider horizontal>
        <h3>
          {" "}
          <Icon name="language" /> LANGUAGE{"  "}
          <Button
            size="small"
            icon="add"
            color="grey"
            onClick={() => setLangOpen(true)}
          ></Button>
        </h3>
      </Divider>
      <Modal
        size="tiny"
        // dimmer={dimmer}
        open={langOpen}
        onClose={() => setLangOpen(false)}
      >
        <Modal.Header>Add Language</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Language</label>
              <input placeholder="Language..." />
            </Form.Field>
            <Form.Field>
              <label>Rating</label>
              <input type="number" min="1" max="5" placeholder="Rating..." />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setLangOpen(false)}>
            Cancel
          </Button>
          <Button positive onClick={() => setLangOpen(false)}>
            Add
          </Button>
        </Modal.Actions>
      </Modal>
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
    </div>
  );
}
