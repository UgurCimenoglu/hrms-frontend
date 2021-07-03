import React, { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
export default function JobAdvertisement() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setjobAdvertisements(result.data.data));
  });

  return (
    <Card.Group>
      {jobAdvertisements.map((jobAdvertisement) => (
        <Card fluid>
          <Card.Content>
            <Image
              floated="left"
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            />
            <Card.Header>{jobAdvertisement.jobTitle.title}</Card.Header>
            <Card.Meta>{jobAdvertisement.city.city}</Card.Meta>
            <Card.Content>
            {jobAdvertisement.description}
            </Card.Content>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}
