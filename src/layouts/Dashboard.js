import React from "react";
import { Route } from "react-router";
import { Container, Grid } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import JobAdvertisement from "../pages/JobAdvertisement";
import JobDetail from "../pages/JobDetail";
import CandidateCvDetail from "../pages/candidate/CandidateCvDetail";
import EmployerDetail from "../pages/employer/employerDetail";
import Login from "../pages/login/Login";
import RegisterForCandidate from "../pages/register/RegisterForCandidate";
import RegisterForEmployer from "../pages/register/RegisterForEmployer";
import Register from "../pages/register/Register";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Route
                exact
                path={["/", "/jobadvertisements"]}
                component={Sidebar}
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <Route
                exact
                path={["/", "/jobadvertisements"]}
                component={JobAdvertisement}
              />
            </Grid.Column>
            <Grid.Column width={16}>
              <Route path="/cvdetail/:id" component={CandidateCvDetail} />
              <Route path="/employerdetail/:id" component={EmployerDetail} />
              <Route path="/jobdetail/:id" component={JobDetail} />
              <Route path="/login" component={Login} />
              <Route path="/register-candidate" component={RegisterForCandidate}/>
              <Route path="/register-employer" component={RegisterForEmployer}/>
              <Route path="/register" component={Register}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
