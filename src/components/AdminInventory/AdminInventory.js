import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import AdminOysterCard from "../AdminOysterCard/AdminOysterCard";
function AdminInventory(props) {
  const oysters = useSelector((redux) => redux.oysters);

  return (
    <Grid columns="equal stackable">
      <Grid.Row streched="true" columns={4}></Grid.Row>
      {oysters.map((oyster) => {
        return (
          <Grid.Column>
            <AdminOysterCard oyster={oyster} />
          </Grid.Column>
        );
      })}
    </Grid>
  );
}

export default AdminInventory;
