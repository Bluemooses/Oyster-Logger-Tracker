import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./OysterTable.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Icon, Table, Tab, TableHeaderCell, Button } from "semantic-ui-react";

function OysterTable(props) {
  //constants
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const inventory = useSelector((redux) => redux.inventory);
  const [date, setDate] = useState(new Date());
  const handleCalendarClose = () => console.log("Calendar closed");

  const handleCalendarOpen = () => console.log("Calendar opened");

  useEffect(() => {
    dispatch({ type: "GET_OYSTER_INVENTORY" });
  }, []);

  function editTable(inv) {
    let originalCount = inv.original_count;
    let soldCount = inv.sold;
    let currentCount = inv.current_count;
    let actualYield = originalCount - soldCount;
    let waste = actualYield - currentCount;
    console.log(waste);
    let wasteObject = {
      waste: waste,
      oyster_name: inv.oyster_name,
      ship_date: inv.ship_date,
      last_date_used: inv.last_date_used,
      id: inv.id,
      actualYield: actualYield,
      original_count: inv.original_count,
    };

    //table needs user_id but we can pass that along with config
    if (waste < 0) {
      dispatch({ type: "ROLL_OVER_WASTE", payload: wasteObject });
      /////server logic handles UPDATE SET inventory
    } else {
      dispatch({ type: "LOG_OYSTER", payload: wasteObject });
    }
  }

  function editTableItem(inv) {
    setEditing(!editing);
    console.log(editing);
    console.log(inv);
  }

  return (
    <Table stackable id="oysterAdminTable">
      <Table.Header>
        <Table.HeaderCell>Oyster Name</Table.HeaderCell>
        <Table.HeaderCell>Received Date</Table.HeaderCell>
        <Table.HeaderCell>Ship Date</Table.HeaderCell>
        <Table.HeaderCell>Case Size</Table.HeaderCell>
        <Table.HeaderCell>Count</Table.HeaderCell>
        <Table.HeaderCell>Sold</Table.HeaderCell>
        {/* <Table.HeaderCell>Edit</Table.HeaderCell> */}
      </Table.Header>

      {inventory.map((inv) => {
        let d = new Date(inv.ship_date);
        let curr_date = d.getDate();
        let curr_month = d.getMonth() + 1;
        let curr_year = d.getFullYear();
        let rd = new Date(inv.received_date);
        let rd_date = rd.getDate();
        let rd_month = rd.getMonth() + 1;
        let rd_year = rd.getFullYear();

        return (
          <Table.Body>
            <Table.Row>
              <Table.Cell>{inv.oyster_name}</Table.Cell>
              <Table.Cell>
                {rd_month}/{rd_date}/{rd_year}
              </Table.Cell>
              <Table.Cell>
                {curr_month}/{curr_date}/{curr_year}
              </Table.Cell>
              {/* <Table.Cell>
                <DatePicker
                  selected={inv.last_date_used}
                  onChange={(date) => setDate(date)}
                  onCalendarClose={handleCalendarClose}
                  onCalendarOpen={handleCalendarOpen}
                  value={inv.last_date_used}
                />
              </Table.Cell> */}

              <Table.Cell>{inv.original_count}</Table.Cell>
              <Table.Cell>{inv.current_count}</Table.Cell>
              <Table.Cell>{inv.sold}</Table.Cell>
              <Table.Cell collapsing>
                <Button onClick={() => editTableItem(inv)}>Edit</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        );
      })}
    </Table>
  );
}

export default OysterTable;
