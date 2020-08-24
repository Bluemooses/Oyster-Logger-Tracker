import React, { useEffect, useState, useDebugValue } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Container,
} from "semantic-ui-react";
import "./LandingPage.css";
import { useDispatch } from "react-redux";
import OysterMap from "../OysterMap/OysterMap";
import AdminInventory from "../AdminInventory/AdminInventory";

import { useHistory } from "react-router-dom";

export default function LandingPage(props) {
  let history = useHistory();

  function goToOysterInventory() {
    history.push("/oyster-inventory");
  }

  function goToInputOyster() {
    history.push("/add-oysters");
  }

  return (
    <div id="landingPage">
      <Container textAlign="center" fluid>
        <Header as="h2">Oyster Hub</Header>
        <Segment stacked>
          <Button onClick={goToOysterInventory}>Add Oyster to Inventory</Button>
          <Button>Current Inventory</Button>
          <Button onClick={goToInputOyster}>Add Oyster to Database</Button>
          <Button>Oyster Log</Button>
          <Button>Waste Metrics</Button>
        </Segment>
      </Container>
    </div>
  );
}
