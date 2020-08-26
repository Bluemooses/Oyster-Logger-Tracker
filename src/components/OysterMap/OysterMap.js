import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "semantic-ui-react";
import OysterCard from "../OysterCard/OysterCard";

export default function OysterMap(props) {
  console.log(props);
  const dispatch = useDispatch();
  const oysters = useSelector((redux) => redux.oysters);

  useEffect(() => {
    dispatch({ type: "GET_OYSTER_INVENTORY" });
  }, []);

  return (
    <Grid columns="equal stackable">
      <Grid.Row streched="true" columns={4}></Grid.Row>
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
