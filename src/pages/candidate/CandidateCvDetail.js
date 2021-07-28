import React, { useState } from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import CandidateInfo from "./CandidateInfo";
import CandidateEducation from "./CandidateEducation";
import CandidateExperience from "./CandidateExperience";
import CandidateLanguage from "./CandidateLanguage";
import CandidateSkill from "./CandidateSkill";

export default function CandidateCvDetail() {
  return (
    <Segment>
      <Header as="h1" floated="left">
        Curriculum Viate
      </Header>
      <Divider clearing/>
      <CandidateInfo />
      
      <CandidateEducation />
      <CandidateExperience />
      <CandidateLanguage />
      <CandidateSkill />
    </Segment>
  );
}
