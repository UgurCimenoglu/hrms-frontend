import React from "react";
import { Divider, Grid, Icon, Image } from "semantic-ui-react";

export default function CandidateInfo() {
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
        <h2>Uğur Çimenoğlu</h2>
        <Divider clearing />
        <h3>
          <Icon name="mail" />
          ugurcimenoglu@hotmail.com
        </h3>

        <h4>
          <Icon name="linkedin" />
          linkedin.om/ugurcimenoglu
        </h4>
        <h4>
          <Icon name="github" />
          github.com/ugurcimenoglu
        </h4>
        <Divider clearing />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus.
        </p>
        <br />
      </Grid.Column>
    </Grid>
  );
}
