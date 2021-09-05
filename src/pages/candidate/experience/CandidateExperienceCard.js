import Moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import ExperienceService from "../../../services/experienceService";

export default function CandidateExperienceCard(props) {
  const [experiences, setExperiences] = useState([]);
  const { setFieldValue,expOpen } = props;

  useEffect(() => {
    const experienceService = new ExperienceService();
    experienceService
      .getAllByCvIdLeaveDateDesc(36)
      .then((result) => setExperiences(result.data.data))
      .catch((e) => console.log(e));
  }, []);

  const setFieldValues = (experience) => {
    setFieldValue("workplaceName" , experience.workplaceName);
    setFieldValue("positionName" , experience.positionName);
    setFieldValue("startDate" , experience.startDate?Moment(experience.startDate).format("YYYY-MM-DD"):"");
    setFieldValue("leaveDate" , experience.leaveDate?Moment(experience.leaveDate).format("YYYY-MM-DD"):"");
  };

  return (
    <Card.Group>
      {experiences.map((experience) => (
        <Card key={experience.id} fluid>
          <Card.Content>
            <Button inverted icon="delete" color="red" floated="right"></Button>
            <Button
              inverted
              icon="edit"
              color="green"
              floated="right"
              onClick={() => {
                expOpen(true);
                setFieldValues(experience)
              }}
            ></Button>
            <Image
              floated="left"
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            />
            <Card.Header>{experience.workplaceName}</Card.Header>
            <Card.Content>{experience.positionName}</Card.Content>
            <Card.Content>{experience.startDate ? Moment(experience.startDate).format("YYYY-MM-DD")
                : "Başlangıç Tarihi Belirtilmedi."} - {experience.leaveDate ? Moment(experience.leaveDate).format("YYYY-MM-DD")
                : "Ayrılma Tarihi Belirtilmedi."}</Card.Content>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}
