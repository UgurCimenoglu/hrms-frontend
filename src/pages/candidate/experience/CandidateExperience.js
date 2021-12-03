import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Form,
  Header,
  Icon,
  Modal,
} from "semantic-ui-react";

import * as Yup from "yup";
import UgurTextInput from "../../../utilities/customFormControls/UgurTextInput";
import CandidateExperienceCard from "./CandidateExperienceCard";
import ExperienceService from "../../../services/experienceService";
import { toast } from "react-toastify";

export default function CandidateExperience() {
  const [expOpen, setExpOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [experiences, setExperiences] = useState([]);

useEffect(()=>{
  getExperiences();
},[])

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

function getExperiences(){
  const experienceService = new ExperienceService();
  experienceService.getAllByCvIdLeaveDateDesc(36)
  .then(result=>setExperiences(result.data.data))
  .catch(e=>console.log(e))
}

function addOrUpdate(values){
  const experienceService = new ExperienceService();
  experienceService.add(values)
  .then(result=>{
    if (result.data.success) {
      getExperiences();
      setExpOpen(false);
      toast.success(result.data.message);
      
    }
  })
}

function deleteExp(id){
  const experienceService = new ExperienceService();
  experienceService.deleteById(id)
  .then(result=>{
    if (result.data.success) {
      toast.success(result.data.message);
      getExperiences();
      setDeleteOpen(false);
    }
  })
}

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
          addOrUpdate(values);
          
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
            <Modal
              open={deleteOpen}
              basic
              size="small"
              onClose={() => {
                setDeleteOpen(false);
              }}
            >
              <Header icon>
                <Icon name="archive" />
                Silmek istediğinize emin misiniz?
              </Header>
              
              <Modal.Actions>
                <Button  color="red" inverted onClick={() => {setDeleteOpen(false)}}>
                  <Icon name="remove" /> No
                </Button>
                <Button
                  color="green"
                  inverted
                  onClick={() => {
                    deleteExp(props.values.id)
                  }}
                >
                  <Icon name="checkmark" /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
            <CandidateExperienceCard
              expOpen={setExpOpen}
              setFieldValue={props.setFieldValue}
              experiences={experiences}
              deleteOpen={setDeleteOpen}
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
