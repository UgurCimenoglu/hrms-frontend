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
  Dropdown,
  Radio
} from "semantic-ui-react";
import cvService from "../services/cvService";

export default function EmployerDetail() {
  const [jobAdvertisement, setJobAdvertisement] = useState(false);
  let city = [
    { key: 34, value: 34, text: "İstanbul" },
    { key: 81, value: 81, text: "Düzce" },
    { key: 71, value: 61, text: "Kırıkkale" },
  ];
  let position = [
    { key: 1, value: 1, text: "DevOps" },
    { key: 2, value: 2, text: "Software Developer" },
    { key: 3, value: 3, text: "Graphic Designer" },
  ];

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
            onClick={() => setJobAdvertisement(true)}
          ></Button>
        </h3>
      </Divider>
      <Modal
        size="tiny"
        open={jobAdvertisement}
        onOpen={() => setJobAdvertisement(true)}
        onClose={() => setJobAdvertisement(false)}
      >
        <Modal.Header>Add School</Modal.Header>
        <Modal.Content scrolling>
          <Form>
            <Form.Field>
              <label>Description</label>
              <textarea placeholder="School" />
            </Form.Field>
            <Form.Field>
              <label>City Name</label>
              <Dropdown placeholder="City" selection options={city} />
            </Form.Field>
            <Form.Field>
              <label>Job Position</label>
              <Dropdown placeholder="Position" selection options={position} />
            </Form.Field>
            <Form.Field>
              <label>Create Date</label>
              <input type="date" placeholder="Start Date" />
            </Form.Field>
            <Form.Field>
              <label>Deadline</label>
              <input type="date" placeholder="Graduate Date" />
            </Form.Field>
            <Form.Field>
              <label>Min Salary</label>
              <input type="number" placeholder="Graduate Date" />
            </Form.Field>
            <Form.Field>
              <label>Max Salary</label>
              <input type="number" placeholder="Graduate Date" />
            </Form.Field>
            <Form.Field>
              <label>Open Position</label>
              <input type="number" placeholder="Graduate Date" />
            </Form.Field>
            <Form.Field>
            <label>Active</label>
            <Radio slider />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setJobAdvertisement(false)}>
            Cancel
          </Button>
          <Button positive onClick={() => setJobAdvertisement(false)}>
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
