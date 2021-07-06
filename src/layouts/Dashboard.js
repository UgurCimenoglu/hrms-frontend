import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import JobAdvertisement from "../pages/JobAdvertisement";
import JobDetail from "../pages/JobDetail";
import CandidateCvDetail from "../pages/CandidateCvDetail";
import EmployerDetail from "../pages/employerDetail";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Sidebar />
            </Grid.Column>
            <Grid.Column width={12}>
              <JobAdvertisement />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <CandidateCvDetail />
        <EmployerDetail/>
      </Container>
    </div>
  );
}
