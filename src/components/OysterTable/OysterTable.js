import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./OysterTable.css";
import { Icon, Table, Tab } from "semantic-ui-react";
function OysterTable(props) {
  const dispatch = useDispatch();
  const parse = require("postgres-date");

  useEffect(() => {
    dispatch({ type: "GET_OYSTER_INVENTORY" });
  }, []);
  const inventory = useSelector((redux) => redux.inventory);

  return (
    <Table id="oysterAdminTable">
      <Table.Header>
        <Table.HeaderCell>Oyster Name</Table.HeaderCell>
        <Table.HeaderCell>Received Date</Table.HeaderCell>
        <Table.HeaderCell>Ship Date</Table.HeaderCell>
        <Table.HeaderCell>Last Date Used</Table.HeaderCell>
        <Table.HeaderCell>Case Size</Table.HeaderCell>
        <Table.HeaderCell>Count</Table.HeaderCell>
      </Table.Header>

      {inventory.map((inv) => {
        let d = new Date(inv.ship_date);
        let curr_date = d.getDate();
        let curr_month = d.getMonth() + 1;
        let curr_year = d.getFullYear();
        console.log(curr_month, "/", curr_date, "/", curr_year);
        let rd = new Date(inv.received_date);
        let rd_date = rd.getDate();
        let rd_month = rd.getMonth() + 1;
        let rd_year = rd.getFullYear();

        return (
          <Table.Body>
            <Table.Row>
              <Table.Cell>{inv.oyster_name}</Table.Cell>
              {rd_month === NaN ? (
                <Table.Cell>
                  {rd_month}/{rd_date}/{rd_year}
                </Table.Cell>
              ) : (
                <Table.Cell></Table.Cell>
              )}

              <Table.Cell>
                {curr_month}/{curr_date}/{curr_year}
              </Table.Cell>
              <Table.Cell>{inv.last_date_used}</Table.Cell>
              <Table.Cell>{inv.original_count}</Table.Cell>
              <Table.Cell>{inv.current_count}</Table.Cell>
            </Table.Row>
          </Table.Body>
        );
      })}
    </Table>
  );
}

export default OysterTable;
