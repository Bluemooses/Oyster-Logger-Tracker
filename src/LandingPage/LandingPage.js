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
import OysterMap from "../components/OysterMap/OysterMap";
import AdminInventory from "../components/AdminInventory/AdminInventory";

import { useHistory } from "react-router-dom";

export default function LandingPage(props) {
  let history = useHistory();
  function addOysterToInventory() {
    history.push("/oyster-inventory");
  }
  function addOysterToDatabase() {
    history.push("/add-oysters");
  }
  return (
    <div id="landingPage">
      <Container textAlign="center" fluid>
        <Header as="h2">Oyster Hub</Header>
        <Segment stacked>
          <Button onClick={addOysterToInventory}>
            Add Oyster to Inventory
          </Button>
          <Button>Current Inventory</Button>
          <Button onClick={addOysterToDatabase}>Add Oyster to Database</Button>
          <Button>Oyster Log</Button>
          <Button>Waste Metrics</Button>
        </Segment>
      </Container>
    </div>
  );
}
