import React, { useEffect, useState } from "react";
import { Button, Card } from "semantic-ui-react";
import SkillService from "../../../services/skillService";

export default function CandidateSkillCard(props) {

  const [skills, setSkills] = useState([]);
  const { setFieldValue, skillOpen } = props;

  useEffect(() => {
    let skillService = new SkillService();
    skillService
      .getAllByCvId(36)
      .then((result) => setSkills(result.data.data))
      .catch((e) => console.log(e));
  }, []);
function setFieldValues(skill){
    setFieldValue("skillName", skill.skillName);
    setFieldValue("id", skill.id);
}

  return (
    <Card.Group>
      {skills.map((skill) => (
        <Card key={skill.id} fluid>
          <Card.Content>
            <Button inverted icon="delete" color="red" floated="right"></Button>
            <Button
              inverted
              icon="edit"
              color="green"
              floated="right"
              onClick={() => {
                skillOpen(true)
                setFieldValues(skill)
              }}
            ></Button>
            <Card.Header>{skill.skillName}</Card.Header>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}
