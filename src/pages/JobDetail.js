import React, { useEffect, useState } from "react";
import { Grid, Card, Button } from "semantic-ui-react";
import { useHistory, useParams } from "react-router";
import JobAdvertisementService from "../services/jobAdvertisementService";
export default function JobDetail() {
  const [jobDetail, setJobDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getById(id)
      .then((result) => setJobDetail(result.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(jobDetail);
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={12}>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                {jobDetail.jobTitle ? jobDetail.jobTitle.title : ""}
              </Card.Header>
              <Card.Meta>Genel Nitelikler</Card.Meta>
              <Card.Description>
                {jobDetail.description ? jobDetail.description : ""}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                <strong>Maaş Aralığı :</strong>{" "}
                {jobDetail.minSalary ? jobDetail.minSalary : "Min: Yok"} -{" "}
                {jobDetail.maxSalary ? jobDetail.maxSalary : "Max: Yok "}
              </Card.Description>
              <br />
              <Card.Description>
                <strong>Açık Pozisyon Sayısı :</strong>{" "}
                {jobDetail ? jobDetail.openPosition : ""}
              </Card.Description>
              <br />
              <Card.Description>
                <strong>Yayınlanma Tarihi :</strong>{" "}
                {jobDetail ? jobDetail.createDate : ""}
              </Card.Description>
              <br />
              <Card.Description>
                <strong>Çalışma Tipi :</strong>{" "}
                {jobDetail.workingType ? jobDetail.workingType.workingType : ""}
              </Card.Description>
              <br />
              <Card.Description>
                <strong>Çalışma Zamanı :</strong>{" "}
                {jobDetail.workingTime ? jobDetail.workingTime.workingTime : ""}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Button floated="right" color="teal">
                Başvur!
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card>
            <Card.Content>
              <Card.Header>Code And More</Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                <strong>
                  {jobDetail.employer ? jobDetail.employer.webAddress : ""}
                </strong>
                <br />
                <br />
              </Card.Description>
              <Card.Description>
                <strong>
                  {jobDetail.employer ? jobDetail.employer.email : ""}
                </strong>
                <br />
                <br />
              </Card.Description>
              <Card.Description>
                <strong>
                  {jobDetail.employer ? jobDetail.employer.phoneNumber : ""}
                </strong>{" "}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="blue">
                  Profile Git
                </Button>
                <Button basic color="teal">
                  Google'da Ara
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
