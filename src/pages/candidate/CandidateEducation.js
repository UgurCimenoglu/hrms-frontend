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
import { Formik } from "formik";
import * as Yup from "yup";
import UgurTextInput from "../../utilities/customFormControls/UgurTextInput";
import educationService from "../../services/educationService";
import CandidateEduCard from "./CandidateEduCard";

export default function CandidateEducation() {
  const [eduOpen, setEduOpen] = useState(false);

  const initialValues = {
    candidateCurriculumVitaes: {
      id: 36,
    },
    id: "",
    schoolName: "",
    schoolDepartment: "",
    startDate: "",
    graduateDate: "",
  };

  const EduSchema = Yup.object().shape({
    // id: Yup.number(),
    // candidateCurriculumVitaes: Yup.object({
    //   id: Yup.number().required("Giriş Yapınız."),
    // }),
    schoolName: Yup.string()
      .required("Zorunlu Alan")
      .min(3, "Minimum Karakter Sayısına Ulaşmadı."),
    schoolDepartment: Yup.string()
      .required("Zorunlu Alan")
      .min(3, "Minimum Karakter Sayısına Ulaşmadı."),
    startDate: Yup.date().required("Zorunlu Alan"),
    graduateDate: Yup.date(),
  });

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
      <Formik
        initialValues={initialValues}
        validationSchema={EduSchema}
        onSubmit={(values) => {
          console.log(JSON.stringify(values));
          // let eduService = new educationService();
          // eduService
          //   .add(JSON.stringify(values))
          //   .then((result) => console.log(result))
          //   .catch((e) => console.log(e));
        }}
      >
        {(props) => (
          <div>
            <Modal
              size="tiny"
              open={eduOpen}
              onOpen={() => setEduOpen(true)}
              onClose={() => {setEduOpen(false);props.handleReset()}}
            >
              <Modal.Header>Add School</Modal.Header>
              <Modal.Content>
                <Form>
                  <UgurTextInput
                    placeholder="School"
                    name="schoolName"
                    value={props.values.schoolName}
                  />
                  <UgurTextInput
                    placeholder="Department"
                    name="schoolDepartment"
                    value={props.values.schoolDepartment}
                  />
                  <UgurTextInput
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                  />
                  <UgurTextInput
                    type="date"
                    placeholder="Graduate Date"
                    name="graduateDate"
                  />
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={() => setEduOpen(false)}>
                  Cancel
                </Button>
                <Button positive type="submit" onClick={props.handleSubmit}>
                  Onayla
                </Button>
              </Modal.Actions>
            </Modal>
            <CandidateEduCard
              eduOpen={setEduOpen}
              setFieldValue={props.setFieldValue}
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
