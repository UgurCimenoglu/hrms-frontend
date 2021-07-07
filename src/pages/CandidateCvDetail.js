import React, { useState } from "react";
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

export default function CandidateCvDetail() {
  const [eduOpen, setEduOpen] = useState(false);
  const [expOpen, setExpOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
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
    </Segment>
  );
}
