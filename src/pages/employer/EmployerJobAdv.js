import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import Moment from "moment";


export default function EmployerJobAdv(props) {
  
  const [JobAdvs, setJobAdvs] = useState([])
  const { handleformikValues } = props;
  //Burada servisten gelen datayı dropdown'a uygun şekilde yeni bir array object'e çeviriyorum ve useEffect ile city sabitine atıyorum.
  useEffect(() => {
    setJobAdvs(props.jobAdvertisements)
  }, [props.jobAdvertisements]);

  const setCurrentValues = (jobAdv) => {
    handleformikValues("id", jobAdv.id);
    handleformikValues("description", jobAdv.description);
    handleformikValues("city.id", jobAdv.city.id);
    handleformikValues(
      "createDate",
      jobAdv.createDate ? Moment(jobAdv.createDate).format("YYYY-MM-DD") : ""
    );
    handleformikValues(
      "deadline",
      jobAdv.deadline ? Moment(jobAdv.deadline).format("YYYY-MM-DD") : ""
    );
    handleformikValues("employer.id", jobAdv.employer.id);
    handleformikValues("jobTitle.id", jobAdv.jobTitle.id);
    handleformikValues("minSalary", jobAdv.minSalary);
    handleformikValues("maxSalary", jobAdv.maxSalary);
    handleformikValues("openPosition", jobAdv.openPosition);
    handleformikValues("workingTime.id", jobAdv.workingTime.id);
    handleformikValues("workingType.id", jobAdv.workingType.id);
    handleformikValues("active", jobAdv.active);
  };
  return (
    <div>
      <Card.Group>
        {JobAdvs.map((jobAdv) => (
          <Card key={jobAdv.id} fluid>
            <Card.Content>
              <Button
                inverted
                icon="delete"
                color="red"
                floated="right"
                onClick={()=>{
                  props.deleteOpen(true)
                  setCurrentValues(jobAdv)
                }}
              ></Button>
              <Button
                inverted
                icon="edit"
                color="green"
                floated="right"
                onClick={() => {
                  props.handleModalOpen(true);
                  setCurrentValues(jobAdv);
                }}
              ></Button>
              <Image
                floated="left"
                size="tiny"
                src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              />
              <Card.Header>{jobAdv.jobTitle.title}</Card.Header>
              <Card.Meta>{jobAdv.city.city}</Card.Meta>
              <Card.Content>{jobAdv.description}</Card.Content>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
