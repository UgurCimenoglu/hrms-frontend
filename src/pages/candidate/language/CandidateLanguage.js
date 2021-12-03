import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Divider, Form, Icon, Modal,Header } from "semantic-ui-react";
import * as Yup from "yup";
import UgurTextInput from "../../../utilities/customFormControls/UgurTextInput";
import CandidateLanguageCard from "./CandidateLanguageCard";
import LanguageService from "../../../services/languageService";

export default function CandidateLanguage() {
  const [langOpen, setLangOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const initialValues = {
    candidateCurriculumVitaes: {
      id: 36,
    },
    id: "",
    languageLevel: "",
    languageName: "",
  };

  const languageSchema = Yup.object().shape({
    languageLevel: Yup.number("1-5 arası bir değer giriniz!")
      .required("1-5 arası bir değer giriniz!")
      .min(1, "Sayı 1 den küçük olamaz!")
      .max(5, "Sayı 5 ten büyük olamaz!"),
    languageName: Yup.string()
      .required("Zorunlu alan!")
      .min(3, "Minimum 3 karakter olmalı!"),
  });

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
      <Formik
        initialValues={initialValues}
        validationSchema={languageSchema}
        onSubmit={(values) => {
          let languageService = new LanguageService();
          languageService
            .add(JSON.stringify(values))
            .then((result) => console.log(result))
            .catch((e) => console.log(e));
        }}
      >
        {(props) => (
          <div>
            <Modal
              size="tiny"
              open={langOpen}
              onClose={() => {
                setLangOpen(false);
                props.handleReset();
              }}
            >
              <Modal.Header>Add Language</Modal.Header>
              <Modal.Content>
                <Form>
                  <UgurTextInput placeholder="Language" name="languageName" />
                  <UgurTextInput
                    type="number"
                    min="1"
                    max="5"
                    placeholder="Rating"
                    name="languageLevel"
                  />
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={() => setLangOpen(false)}>
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
                   
                  }}
                >
                  <Icon name="checkmark" /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
            <CandidateLanguageCard
              setFieldValue={props.setFieldValue}
              setLangOpen={setLangOpen}
              deleteOpen={setDeleteOpen}
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
