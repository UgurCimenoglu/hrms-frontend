import React, { useState } from "react";
import {
  Button,
  Divider,
  Form,
  Icon,
  Label,
  Modal,
  Card,
} from "semantic-ui-react";

export default function CandidateSkill() {
  const [skillsOpen, setSkillsOpen] = useState(false);
  return (
    <div>
      <Divider horizontal>
        <h3>
          {" "}
          <Icon name="code" /> SKILLS{"  "}
          <Button
            size="small"
            icon="add"
            color="grey"
            onClick={() => setSkillsOpen(true)}
          ></Button>
        </h3>
      </Divider>
      <Modal
        size="tiny"
        // dimmer={dimmer}
        open={skillsOpen}
        onClose={() => setSkillsOpen(false)}
      >
        <Modal.Header>Add Skill</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Skill Name</label>
              <input placeholder="Skill..." />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setSkillsOpen(false)}>
            Cancel
          </Button>
          <Button positive onClick={() => setSkillsOpen(false)}>
            Add
          </Button>
        </Modal.Actions>
      </Modal>
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
    </div>
  );
}
