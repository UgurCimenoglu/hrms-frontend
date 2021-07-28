import React, { useEffect, useState } from "react";
import { Divider, Grid, Image, Icon } from "semantic-ui-react";
import EmployerService from "../../services/employerServicve";

export default function EmployerInfo() {

  const[employer, setEmployer] = useState({});

  useEffect(()=>{
    const employerService = new EmployerService();
    employerService.getById(40).then(result=>setEmployer(result.data.data));
  },[])

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          size="medium"
          circular
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <h2>{employer?employer.companyName:""}</h2>
        <Divider clearing />
        <h3>
          <Icon name="mail" />
          {employer?employer.email:""}
        </h3>

        <h4>
          <Icon name="chrome" />
          {employer?employer.webAddress:""}
        </h4>
        <h4>
          <Icon name="phone" />
          {employer?employer.phoneNumber:""}
        </h4>

        <br />
      </Grid.Column>
    </Grid>
  );
}
