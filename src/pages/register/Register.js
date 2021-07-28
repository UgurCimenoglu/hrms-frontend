import React from 'react'
import { Tab } from 'semantic-ui-react'
import RegisterForCandidate from './RegisterForCandidate'
import RegisterForEmployer from './RegisterForEmployer'

export default function Register() {

    const panes = [
        { menuItem: {content:'Register For Candidate',color:'teal'}, render: () => <RegisterForCandidate/> },
        { menuItem: {content:'Register For Employer',color:'teal'}, render: () => <RegisterForEmployer/> },
      ]

    return (
      <Tab menu={{  attached: false, secondary:true, style: { display: "flex", justifyContent: "center" } }} panes={panes}/>
    )
}
