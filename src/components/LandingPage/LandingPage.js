import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Header, Segment, Container } from "semantic-ui-react";
import "./LandingPage.css";

export default function LandingPage(props) {
  let history = useHistory();

  function goToOysterInventory() {
    history.push("/oyster-inventory");
  }

  function goToInputOyster() {
    history.push("/add-oysters");
  }

  function goToMyInventory() {
    history.push("/my-inventory");
  }

  return (
    <div id="landingPage">
      <Container textAlign="center" fluid>
        <Header as="h2">Oyster Hub</Header>
        <Segment stacked>
          <Button onClick={goToOysterInventory}>Add Oyster to Inventory</Button>
          <Button onClick={goToMyInventory}>Current Inventory</Button>
          <Button onClick={goToInputOyster}>Add Oyster to Database</Button>
          <Button>Oyster Log</Button>
          <Button>Waste Metrics</Button>
        </Segment>
      </Container>
    </div>
  );
}
