import { Formik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Divider,
  Form,
  Icon,
  Modal,
} from "semantic-ui-react";

import * as Yup from "yup";
import UgurTextInput from "../../../utilities/customFormControls/UgurTextInput";
import CandidateExperienceCard from "./CandidateExperienceCard";
import ExperienceService from "../../../services/experienceService";

export default function CandidateExperience() {
  const [expOpen, setExpOpen] = useState(false);

  const initialValues = {
    candidateCurriculumVitaes: {
      id: 36,
    },
    id: "",
    leaveDate: "",
    positionName: "",
    startDate: "",
    workplaceName: "",
  };

  const experienceSchema = Yup.object().shape({
    workplaceName: Yup.string()
      .required("Zorunlu Alan")
      .min(3, "Minimum Karakter Sayısına Ulaşmadı."),
    positionName: Yup.string()
      .required("Zorunlu Alan")
      .min(3, "Minimum Karakter Sayısına Ulaşmadı."),
    startDate: Yup.date().required("Zorunlu Alan"),
    leaveDate: Yup.date().notRequired(),
  });

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
      <Formik
        initialValues={initialValues}
        validationSchema={experienceSchema}
        onSubmit={(values) => {
          const experienceService = new ExperienceService()
          experienceService.add(JSON.stringify(values)).then(result=>console.log(result)).catch(e=>console.log(e))
        }}
      >
        {(props) => (
          <div>
            <Modal
              size="tiny"
              open={expOpen}
              onClose={() => {
                setExpOpen(false);
                props.handleReset();
                console.log(props)
              }}
            >
              <Modal.Header>Add Experience</Modal.Header>
              <Modal.Content>
                <Form>
                  <UgurTextInput
                    name="workplaceName"
                    placeholder="Workplace Name"
                  />
                  <UgurTextInput
                    name="positionName"
                    placeholder="Position Name"
                  />
                  <UgurTextInput
                    name="startDate"
                    type="date"
                    placeholder="Start Date"
                  />
                  <UgurTextInput
                    name="leaveDate"
                    type="date"
                    placeholder="Leave Date"
                  />
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={() => setExpOpen(false)}>
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
            <CandidateExperienceCard
              expOpen={setExpOpen}
              setFieldValue={props.setFieldValue}
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
