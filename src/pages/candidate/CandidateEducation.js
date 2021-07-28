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

export default function CandidateEducation() {
  const [eduOpen, setEduOpen] = useState(false);
  return (
    <div>
      <Divider horizontal>
        <h3>
          {" "}
          <Icon name="university" /> EDUCATION{"  "}
          <Button
            size="small"
            icon="add"
            color="grey"
            onClick={() => setEduOpen(true)}
          ></Button>
        </h3>
      </Divider>
      <Modal
        size="tiny"
        open={eduOpen}
        onOpen={() => setEduOpen(true)}
        onClose={() => setEduOpen(false)}
      >
        <Modal.Header>Add School</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>School Name</label>
              <input placeholder="School" />
            </Form.Field>
            <Form.Field>
              <label>Department Name</label>
              <input placeholder="Department" />
            </Form.Field>
            <Form.Field>
              <label>Start Date</label>
              <input type="date" placeholder="Start Date" />
            </Form.Field>
            <Form.Field>
              <label>Graduate Date</label>
              <input type="date" placeholder="Graduate Date" />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setEduOpen(false)}>
            Cancel
          </Button>
          <Button positive onClick={() => setEduOpen(false)}>
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
          <Card.Header>Düzce Üniversitesi</Card.Header>
          <Card.Content>Bilgisayar Mühendisliği</Card.Content>
          <Card.Content>2016 -2021</Card.Content>
        </Card.Content>
      </Card>
    </div>
  );
}
