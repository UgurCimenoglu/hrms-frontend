import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Button, Divider, Form, Header, Icon, Modal } from "semantic-ui-react";
import CityService from "../../services/citySevice";
import JobTitleService from "../../services/jobTitleService";
import WorkingTimeService from "../../services/workingTimeService";
import WorkingTypeService from "../../services/workingTypeService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import EmployerJobAdv from "./EmployerJobAdv";
import UgurTextInput from "../../utilities/customFormControls/UgurTextInput";
import UgurDropdownMenu from "../../utilities/customFormControls/UgurDropdownMenu";
import UgurRadioButton from "../../utilities/customFormControls/UgurRadioButton";
import { toast } from "react-toastify";

export default function EmployerAddJob() {
  const [jobAdvertisementModal, setJobAdvertisementModal] = useState(false);
  const [city, setCity] = useState([]);
  const [jobtitle, setJobTitle] = useState([]);
  const [workingTime, setWorkingTime] = useState([]);
  const [workingType, setWorkingType] = useState([]);
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);

  //Burada servisten gelen datayı dropdown'a uygun şekilde yeni bir array object'e çeviriyorum ve useEffect ile city sabitine atıyorum.
  useEffect(() => {
    getJobAdvertisements();

    let cityService = new CityService();
    cityService
      .getAllCities()
      .then((result) =>
        result.data.data.map((item, index) => {
          return { key: index + 1, text: item.city, value: item.id };
        })
      )
      .then((cities) => setCity(cities));

    let jobTitleService = new JobTitleService();
    jobTitleService
      .getAllJobTitle()
      .then((result) =>
        result.data.data.map((item, index) => {
          return { key: index + 1, text: item.title, value: item.id };
        })
      )
      .then((jobTitles) => setJobTitle(jobTitles));

    let workingTimeService = new WorkingTimeService();
    workingTimeService
      .getAllWorkingTime()
      .then((result) =>
        result.data.data.map((item, index) => {
          return { key: index + 1, text: item.workingTime, value: item.id };
        })
      )
      .then((workingTime) => setWorkingTime(workingTime));

    let workingTypeService = new WorkingTypeService();
    workingTypeService
      .getAllWorkingType()
      .then((result) =>
        result.data.data.map((item, index) => {
          return { key: index + 1, text: item.workingType, value: item.id };
        })
      )
      .then((workingTypes) => setWorkingType(workingTypes));
  }, []);

  function getJobAdvertisements() {
    let jobAdvService = new JobAdvertisementService();
    jobAdvService
      .getAllByIsActiveAndEmployerId(40, true)
      .then((result) => setJobAdvertisements(result.data.data));
  }

  function addOrUpdate(values) {
    console.log(JSON.stringify(values));
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.addJobAdvertisement(JSON.stringify(values))
    .then((result) => {
      getJobAdvertisements();
      setJobAdvertisementModal(false);
      toast.success(result.data.message )
    }).catch(e=>{
      toast.error("Hata oluştu, tekrar deneyiniz...")
    })
  }

  function deleteJobAdv(id) {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.deleteById(id)
    .then((result) => {
      getJobAdvertisements();
      setDeleteOpen(false);
      toast.success(result.data.message )
    }).catch(e=>{
      toast.error("Hata oluştu, tekrar deneyiniz...")
    })
  }

  const AddJobAdvSchema = Yup.object().shape({
    description: Yup.string()
      .required("Boş Geçilemez")
      .min(20, "Minimum 20 karakter olmalı.")
      .max(2000, "2000 karakteri geçemez"),
    city: Yup.object({
      id: Yup.number().required("Boş Geçilemez"),
    }),
    jobTitle: Yup.object({
      id: Yup.number().required("Boş Geçilemez"),
    }),
    workingType: Yup.object({
      id: Yup.number().required("Boş Geçilemez"),
    }),
    workingTime: Yup.object({
      id: Yup.number().required("Boş Geçilemez"),
    }),
    employer: Yup.object({
      id: Yup.number().required("Boş Geçilemez"),
    }),
    createDate: Yup.date().required("Boş Geçilemez"),
    deadline: Yup.date().required("Boş Geçilemez"),
    minSalary: Yup.number().notRequired(),
    maxSalary: Yup.number().notRequired(),
    openPosition: Yup.number().required("Boş Geçilemez"),
    active: Yup.boolean().required("Boş Geçilemez"),
  });

  const initialValues = {
    id: "",
    description: "",
    city: {
      id: "",
    },
    jobTitle: {
      id: "",
    },
    workingType: {
      id: "",
    },
    workingTime: {
      id: "",
    },
    employer: {
      id: 40,
    },
    createDate: "",
    deadline: "",
    minSalary: "",
    maxSalary: "",
    openPosition: "",
    active: "",
  };

  return (
    <div>
      <Divider horizontal>
        <h3>
          {" "}
          <Icon name="university" /> Job Advertisements{"  "}
          <Button
            size="small"
            icon="add"
            color="grey"
            onClick={() => setJobAdvertisementModal(true)}
          ></Button>
        </h3>
      </Divider>
      <Formik
        initialValues={initialValues}
        validationSchema={AddJobAdvSchema}
        onSubmit={async (values) => {
          await addOrUpdate(values);
          getJobAdvertisements();
        }}
      >
        {(props) => (
          <div>
            <Modal
              size="tiny"
              open={jobAdvertisementModal}
              onOpen={() => setJobAdvertisementModal(true)}
              onClose={() => {
                setJobAdvertisementModal(false);
                props.resetForm();
              }}
            >
              <Modal.Header>Add Description</Modal.Header>
              <Modal.Content scrolling>
                <Form>
                  <UgurTextInput placeholder="Description" name="description" />
                  <UgurDropdownMenu
                    placeholder="City"
                    id="city"
                    name="city.id"
                    selection
                    options={city}
                    onChange={(e, { name, value }) =>
                      props.setFieldValue(name, value)
                    }
                  />
                  <UgurDropdownMenu
                    placeholder="Position"
                    selection
                    options={jobtitle}
                    name="jobTitle.id"
                    onChange={(e, { name, value }) =>
                      props.setFieldValue(name, value)
                    }
                  />
                  <UgurDropdownMenu
                    placeholder="Working Time"
                    selection
                    options={workingTime}
                    name="workingTime.id"
                    onChange={(e, { name, value }) =>
                      props.setFieldValue(name, value)
                    }
                  />
                  <UgurDropdownMenu
                    placeholder="Working Type"
                    selection
                    options={workingType}
                    name="workingType.id"
                    onChange={(e, { name, value }) =>
                      props.setFieldValue(name, value)
                    }
                  />
                  <UgurTextInput
                    type="date"
                    placeholder="Create Date"
                    name="createDate"
                  />
                  <UgurTextInput
                    type="date"
                    placeholder="Deadline"
                    name="deadline"
                  />
                  <UgurTextInput
                    type="number"
                    placeholder="Min Salary"
                    name="minSalary"
                  />
                  <UgurTextInput
                    type="number"
                    placeholder="Max Salary"
                    name="maxSalary"
                  />
                  <UgurTextInput
                    type="number"
                    placeholder="Number of Open Positions"
                    name="openPosition"
                  />
                  <UgurRadioButton
                    placeholder="Active"
                    slider
                    name="active"
                    onChange={(e, { name, checked }) => {
                      props.setFieldValue(name, checked);
                    }}
                  />
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  positive
                  type="submit"
                  onClick={() => {
                    props.handleSubmit();
                  }}
                >
                  Kaydet
                </Button>
                <Button
                  negative
                  onClick={() => {
                    setJobAdvertisementModal(false);
                    props.resetForm();
                  }}
                >
                  Cancel
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
                <Button color="red" inverted onClick={() => {}}>
                  <Icon name="remove" /> No
                </Button>
                <Button
                  color="green"
                  inverted
                  onClick={() => {
                    deleteJobAdv(props.values.id);
                  }}
                >
                  <Icon name="checkmark" /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
           
            <EmployerJobAdv
              handleModalOpen={setJobAdvertisementModal}
              jobAdvertisements={jobAdvertisements}
              handleformikValues={props.setFieldValue}
              deleteOpen={setDeleteOpen}
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
