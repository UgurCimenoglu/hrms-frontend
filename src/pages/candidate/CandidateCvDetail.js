import React from "react";
import { Divider, Grid, Header, Segment } from "semantic-ui-react";
import CandidateInfo from "./CandidateInfo";
import CandidateEducation from "./education/CandidateEducation";
import CandidateExperience from "./experience/CandidateExperience";
import CandidateLanguage from "./language/CandidateLanguage";
import CandidateSkill from "./skill/CandidateSkill";

export default function CandidateCvDetail() {
  return (
    <Segment>
      <Header as="h1" floated="left">
        Curriculum Viate
      </Header>
      <Divider clearing />
      <CandidateInfo />

      <CandidateEducation />
      <CandidateExperience />
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}><CandidateLanguage /></Grid.Column>
          <Grid.Column width={8}><CandidateSkill /></Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
