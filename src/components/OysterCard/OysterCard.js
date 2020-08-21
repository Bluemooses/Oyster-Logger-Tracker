import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Image, Label, Grid } from "semantic-ui-react";
import { useDispatch } from "react-redux";

function OysterCard(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_OYSTERS" });
  });
  let oyster = props.oyster;

  return (
    <Card key={oyster.id}>
      <Card.Content>
        <Card.Header>{oyster.name}</Card.Header>
        <Card.Meta>
          {oyster.global_location ? "East Coast" : "West Coast"}
        </Card.Meta>
        <Card.Meta>{oyster.geo_location}</Card.Meta>
      </Card.Content>
      <Card.Content>{oyster.description}</Card.Content>
    </Card>
  );
}

export default OysterCard;
