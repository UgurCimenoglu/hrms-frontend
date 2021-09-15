import { useFormik, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  Button,
  Divider,
  Dropdown,
  Form,
  Icon,
  Label,
  Modal,
  Radio,
} from "semantic-ui-react";
import CityService from "../../services/citySevice";
import JobTitleService from "../../services/jobTitleService";
import WorkingTimeService from "../../services/workingTimeService";
import WorkingTypeService from "../../services/workingTypeService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import EmployerJobAdv from "./EmployerJobAdv";
import UgurTextInput from "../../utilities/customFormControls/UgurTextInput";
import UgurDropdownMenu from "../../utilities/customFormControls/UgurDropdownMenu";
import UgurRadioButton from "../../utilities/customFormControls/UgurRadioButton";

export default function EmployerAddJob() {
  const [jobAdvertisement, setJobAdvertisement] = useState(false);
  const [city, setCity] = useState([]);
  const [jobtitle, setJobTitle] = useState([]);
  const [workingTime, setWorkingTime] = useState([]);
  const [workingType, setWorkingType] = useState([]);

  //Burada servisten gelen datayı dropdown'a uygun şekilde yeni bir array object'e çeviriyorum ve useEffect ile city sabitine atıyorum.
  useEffect(() => {
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
    active: '',
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
            onClick={() => setJobAdvertisement(true)}
          ></Button>
        </h3>
      </Divider>
      <Formik
        initialValues={initialValues}
        validationSchema={AddJobAdvSchema}
        onSubmit={(values) => {
          console.log(JSON.stringify(values) + "aaaa");
          // let jobAdvertisementService = new JobAdvertisementService();
          // jobAdvertisementService
          //   .addJobAdvertisement(JSON.stringify(values))
          //   .then((result) => {
          //     console.log(result);
          //   })
          //   .catch((e) => console.log(e));
        }}
      >
        {(props) => (
          <div>
            <Modal
              size="tiny"
              open={jobAdvertisement}
              onOpen={() => setJobAdvertisement(true)}
              onClose={() => {
                setJobAdvertisement(false);
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
                  <UgurTextInput type="date" placeholder="Create Date" name="createDate"/>
                  <UgurTextInput type="date" placeholder="Deadline" name="deadline"/>
                  <UgurTextInput type="number" placeholder="Min Salary" name="minSalary"/>
                  <UgurTextInput type="number" placeholder="Max Salary" name="maxSalary"/>
                  <UgurTextInput type="number" placeholder="Number of Open Positions" name="openPosition"/>
                  <UgurRadioButton
                    placeholder="Active"
                    slider
                    name="active"
                    onChange={(e, { name, checked }) =>{
                      props.setFieldValue(name, checked)
                      
                    }
                    
                      }
                  />
                  {/* <Form.Field>
                    <label>City Name</label>
                    <Dropdown
                      defaultValue={JobAdvFormik.values.city.id}
                      placeholder="City"
                      name="city.id"
                      id="city"
                      selection
                      options={city}
                      onChange={(e, { name, value }) =>
                        JobAdvFormik.setFieldValue(name, value)
                      }
                    />
                    {JobAdvFormik.touched.city && JobAdvFormik.errors.city ? (
                      <Label basic color="red" pointing>
                        {JobAdvFormik.errors.city.id}
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field>
                    <label>Job Position</label>
                    <Dropdown
                      defaultValue={JobAdvFormik.values.jobTitle.id}
                      placeholder="Position"
                      selection
                      options={jobtitle}
                      name="jobTitle.id"
                      onChange={(e, { name, value }) =>
                        JobAdvFormik.setFieldValue(name, value)
                      }
                    />
                    {JobAdvFormik.touched.jobTitle &&
                    JobAdvFormik.errors.jobTitle ? (
                      <Label basic color="red" pointing>
                        {JobAdvFormik.errors.jobTitle.id}
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field>
                    <label>Working Time</label>
                    <Dropdown
                      defaultValue={JobAdvFormik.values.workingTime.id}
                      placeholder="Working Time"
                      selection
                      options={workingTime}
                      name="workingTime.id"
                      onChange={(e, { name, value }) =>
                        JobAdvFormik.setFieldValue(name, value)
                      }
                    />
                    {JobAdvFormik.touched.workingTime &&
                    JobAdvFormik.errors.workingTime ? (
                      <Label basic color="red" pointing>
                        {JobAdvFormik.errors.workingTime.id}
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field>
                    <label>Working Type</label>
                    <Dropdown
                      defaultValue={JobAdvFormik.values.workingType.id}
                      placeholder="Working Type"
                      selection
                      options={workingType}
                      name="workingType.id"
                      onChange={(e, { name, value }) =>
                        JobAdvFormik.setFieldValue(name, value)
                      }
                    />
                    {JobAdvFormik.touched.workingType &&
                    JobAdvFormik.errors.workingType ? (
                      <Label basic color="red" pointing>
                        {JobAdvFormik.errors.workingType.id}
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field>
                    <label>Create Date</label>
                    <input
                      type="date"
                      placeholder="Create Date"
                      name="createDate"
                      onChange={JobAdvFormik.handleChange}
                      value={JobAdvFormik.values.createDate}
                    />
                    {JobAdvFormik.touched.createDate &&
                    JobAdvFormik.errors.createDate ? (
                      <Label basic color="red" pointing>
                        {JobAdvFormik.errors.createDate}
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field>
                    <label>Deadline</label>
                    <input
                      type="date"
                      placeholder="Deadline"
                      name="deadline"
                      onChange={JobAdvFormik.handleChange}
                      value={JobAdvFormik.values.deadline}
                    />
                    {JobAdvFormik.touched.deadline &&
                    JobAdvFormik.errors.deadline ? (
                      <Label basic color="red" pointing>
                        {JobAdvFormik.errors.deadline}
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field>
                    <label>Min Salary</label>
                    <input
                      type="number"
                      placeholder="Min Salary"
                      name="minSalary"
                      onChange={JobAdvFormik.handleChange}
                      value={JobAdvFormik.values.minSalary}
                    />
                    {JobAdvFormik.touched.minSalary &&
                    JobAdvFormik.errors.minSalary ? (
                      <Label basic color="red" pointing>
                        {JobAdvFormik.errors.minSalary}
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field>
                    <label>Max Salary</label>
                    <input
                      type="number"
                      placeholder="Max Salary"
                      name="maxSalary"
                      onChange={JobAdvFormik.handleChange}
                      value={JobAdvFormik.values.maxSalary}
                    />
                    {JobAdvFormik.touched.maxSalary &&
                    JobAdvFormik.errors.maxSalary ? (
                      <Label basic color="red" pointing>
                        {JobAdvFormik.errors.maxSalary}
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field>
                    <label>Open Position</label>
                    <input
                      type="number"
                      placeholder="Number of Open Positions"
                      name="openPosition"
                      onChange={JobAdvFormik.handleChange}
                      value={JobAdvFormik.values.openPosition}
                    />
                    {JobAdvFormik.touched.openPosition &&
                    JobAdvFormik.errors.openPosition ? (
                      <Label basic color="red" pointing>
                        {JobAdvFormik.errors.openPosition}
                      </Label>
                    ) : null}
                  </Form.Field>
                  <Form.Field> 
                    <label>Active</label>
                    <Radio
                      slider
                      name="active"
                      defaultChecked={true}
                      onChange={(e, { name, checked }) =>
                        JobAdvFormik.setFieldValue(name, checked)
                      }
                    />
                    {JobAdvFormik.touched.active &&
                    JobAdvFormik.errors.active ? (
                      <Label basic color="red" pointing>
                        {JobAdvFormik.errors.active}
                      </Label>
                    ) : null}
                  </Form.Field>*/}
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
                <Button negative onClick={() => setJobAdvertisement(false)}>
                  Cancel
                </Button>
              </Modal.Actions>
            </Modal>

            <EmployerJobAdv
              handleModalOpen={setJobAdvertisement}
              handleformikValues={props.setFieldValue}
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
