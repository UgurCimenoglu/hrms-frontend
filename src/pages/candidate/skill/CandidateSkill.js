import { Formik } from "formik";
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
import CandidateSkillCard from "./CandidateSkillCard";
import * as Yup from "yup";
import UgurTextInput from "../../../utilities/customFormControls/UgurTextInput";
import SkillService from "../../../services/skillService";

export default function CandidateSkill() {
  const [skillsOpen, setSkillsOpen] = useState(false);

  const initialValues = {
    candidateCurriculumVitaes: {
      id: 36,
    },
    id: "",
    skillName: "",
  };

  const skillSchema = Yup.object().shape({
    skillName: Yup.string()
      .min(1, "Minimum Karakter Sayısına Ulaşmadı.")
      .required("Zorunlu Alan!"),
  });

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
      <Formik
        initialValues={initialValues}
        validationSchema={skillSchema}
        onSubmit={(values) => {
          let skillService = new SkillService();
          console.log(values);
          skillService
            .add(JSON.stringify(values))
            .then((result) => console.log(result))
            .catch((e) => console.log(e));
        }}
      >
        {(props) => (
          <div>
            <Modal
              size="tiny"
              // dimmer={dimmer}
              open={skillsOpen}
              onClose={() => {
                setSkillsOpen(false);
                props.handleReset();
              }}
            >
              <Modal.Header>Add Skill</Modal.Header>
              <Modal.Content>
                <Form>
                  <UgurTextInput placeholder="Skill" name="skillName" />
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={() => setSkillsOpen(false)}>
                  Cancel
                </Button>
                <Button
                  positive
                  type="submit"
                  onClick={() => props.handleSubmit()}
                >
                  Add
                </Button>
              </Modal.Actions>
            </Modal>
            <CandidateSkillCard
              skillOpen={setSkillsOpen}
              setFieldValue={props.setFieldValue}
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
