import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Image, Label, Grid } from "semantic-ui-react";
import OysterCard from "../OysterCard/OysterCard";

function OysterMap(props) {
  const oysters = useSelector((redux) => redux.oysters);

  return (
    <Grid columns="equal stackable">
      <Grid.Row streched={true} columns={4}></Grid.Row>
      {oysters.map((oyster) => {
        return (
          <Grid.Column>
            <OysterCard oyster={oyster} />
          </Grid.Column>
        );
      })}
    </Grid>
  );
}

export default OysterMap;
