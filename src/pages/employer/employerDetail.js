import React from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import EmployerAddJob from "./EmployerAddJob";
import EmployerInfo from "./EmployerInfo";
import EmployerJobAdv from "./EmployerJobAdv";

export default function EmployerDetail() {
  return (
    <Segment>
      <Header as="h1" floated="left">
        Employer
      </Header>
      <Divider clearing />
      <EmployerInfo />
      <EmployerAddJob />
     
    </Segment>
  );
}
