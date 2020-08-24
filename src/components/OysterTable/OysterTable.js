import React from "react";
import { useSelector } from "react-redux";
import { Icon, Table, Tab } from "semantic-ui-react";
function OysterTable(props) {
  const inventory = useSelector((redux) => redux.inventory);

  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell>Oyster Name</Table.HeaderCell>
        <Table.HeaderCell>Received Data</Table.HeaderCell>
        <Table.HeaderCell>Ship Date</Table.HeaderCell>
        <Table.HeaderCell>Last Date Used</Table.HeaderCell>
        <Table.HeaderCell>Original Count</Table.HeaderCell>
        <Table.HeaderCell>Count</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row></Table.Row>
      </Table.Body>
    </Table>
  );
}

export default OysterTable;
