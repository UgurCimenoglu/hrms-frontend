import React, { useEffect, useState } from "react";
import { Button, Divider, Form, Header, Icon, Modal } from "semantic-ui-react";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import UgurTextInput from "../../../utilities/customFormControls/UgurTextInput";
import educationService from "../../../services/educationService";
import CandidateEduCard from "../education/CandidateEduCard";

export default function CandidateEducation() {
  const [educations, setEducations] = useState([]);
  const [eduOpen, setEduOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    getEducations();
  }, []);

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

  async function addOrUpdate(values) {
    let eduService = new educationService();
    await eduService
      .add(JSON.stringify(values))
      .then((result) => {
        if(result.data.success){
          setEduOpen(false);
          toast.success(result.data.message)
        }
      })
      .catch((e) => console.log(e));
  }

  async function deleteEdu(id) {
    var eduService = new educationService();
    await eduService
      .deleteById(id)
      .then((result) =>{
        setDeleteOpen(false);
        toast.success(result.data.message)
      })
      .catch((e) => console.log(e));
  }

  async function getEducations() {
    let eduService = new educationService();
    await eduService
      .getByCvIdAndGraduateDesc(36)
      .then((educations) => {
        setEducations(educations.data.data);
      })
      .catch((e) => console.log(e));
  }

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
        onSubmit={async (values) => {
          await addOrUpdate(values);
          getEducations();
        }}
      >
        {(props) => (
          <div>
            <Modal
              size="tiny"
              open={eduOpen}
              onOpen={() => setEduOpen(true)}
              onClose={() => {
                setEduOpen(false);
                props.handleReset();
              }}
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
                <Button
                  positive
                  type="submit"
                  onClick={() => props.handleSubmit()}
                >
                  Onayla
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
                <Button  color="red" inverted onClick={() => {}}>
                  <Icon name="remove" /> No
                </Button>
                <Button
                  color="green"
                  inverted
                  onClick={async () => {
                    await deleteEdu(props.values.id);
                    getEducations();
                  }}
                >
                  <Icon name="checkmark" /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
            <CandidateEduCard
              eduOpen={setEduOpen}
              deleteOpen={setDeleteOpen}
              setFieldValue={props.setFieldValue}
              educations={educations}
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
