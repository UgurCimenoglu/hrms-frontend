import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import Moment from "moment";

export default function CandidateEduCard(props) {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    setEducations(props.educations);
  }, [props.educations]);

  const setFieldValues = (education) => {
    props.setFieldValue("id", education.id);
    props.setFieldValue("schoolName", education.schoolName);
    props.setFieldValue("schoolDepartment", education.schoolDepartment);
    props.setFieldValue(
      "startDate",
      education.startDate
        ? Moment(education.startDate).format("YYYY-MM-DD")
        : ""
    );
    props.setFieldValue(
      "graduateDate",
      education.graduateDate
        ? Moment(education.graduateDate).format("YYYY-MM-DD")
        : ""
    );
  };

  return (
    <Card.Group>
      {educations.map((education) => (
        <Card key={education.id} fluid>
          <Card.Content>
            <Button
              inverted
              icon="delete"
              color="red"
              floated="right"
              onClick={() => {
                props.deleteOpen(true);
                setFieldValues(education);
              }}
            ></Button>
            <Button
              inverted
              icon="edit"
              color="green"
              floated="right"
              onClick={() => {
                props.eduOpen(true);
                setFieldValues(education);
              }}
            ></Button>
            <Image
              floated="left"
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            />
            <Card.Header>{education.schoolDepartment}</Card.Header>
            <Card.Content>{education.schoolName}</Card.Content>
            <Card.Content>
              {education
                ? Moment(education.startDate).format("YYYY-MM-DD")
                : "Başlangıç Tarihi Belirtilmedi."}{" "}
              -{" "}
              {education.graduateDate
                ? Moment(education.graduateDate).format("YYYY-MM-DD")
                : "Mezuniyet Tarihi Belirtilmedi."}
            </Card.Content>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}
