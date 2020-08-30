import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./OysterTable.css";
import "react-datepicker/dist/react-datepicker.css";

import { Table, Button } from "semantic-ui-react";
import OysterModal from "./OysterModal";
import LastDateUsedModal from "./LastDateUsedModal";

function OysterTable(props) {
  //constants
  const moment = require("moment");
  const dispatch = useDispatch();
  const inventory = useSelector((redux) => redux.inventory);

  useEffect(() => {
    dispatch({ type: "GET_OYSTER_INVENTORY" });
  }, []);

  function finalOysterSubmit(inv) {
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
      received_date: inv.received_date,
    };

    //table needs user_id but we can pass that along with config
    if (waste < 0) {
      dispatch({ type: "ROLL_OVER_WASTE", payload: wasteObject });
      /////server logic handles UPDATE SET inventory
    } else {
      dispatch({ type: "LOG_OYSTER", payload: wasteObject });
    }
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
        //handle ship date
        let d = new Date(inv.ship_date);
        let curr_date = d.getDate();
        let curr_month = d.getMonth() + 1;
        let curr_year = d.getFullYear();

        //handle received datea
        let rd = new Date(inv.received_date);
        let rd_date = rd.getDate();
        let rd_month = rd.getMonth() + 1;
        let rd_year = rd.getFullYear();
        let today = new Date();
        console.log(today);
        function comparison(today, rd) {
          console.log(rd, today);
          if (today < rd - 7) {
            console.log("OPE");
            let response = moment(rd).get("month");
            console.log(response);
          } else {
            console.log("OPE2");
            let response = moment(rd).get("month", "date");
            console.log(response);
          }
        }
        //begin render
        return (
          <Table.Body key={inv.id}>
            <Table.Row>
              <Table.Cell>{inv.oyster_name}</Table.Cell>
              <Table.Cell>
                {rd_month}/{rd_date}/{rd_year}
              </Table.Cell>
              <Table.Cell>
                {curr_month}/{curr_date}/{curr_year}
              </Table.Cell>
              <Table.Cell>{inv.original_count}</Table.Cell>
              <Table.Cell>{inv.current_count}</Table.Cell>
              <Table.Cell>{inv.sold}</Table.Cell>
              <Table.Cell collapsing>
                <OysterModal
                  rd_month={rd_month}
                  rd_date={rd_date}
                  rd_year={rd_year}
                  curr_month={curr_month}
                  curr_date={curr_date}
                  curr_year={curr_year}
                  finalOysterSubmit={finalOysterSubmit}
                  inv={inv}
                />
              </Table.Cell>
              <Table.Cell collapsing>
                {" "}
                <Button onClick={() => comparison(today, rd)}></Button>
              </Table.Cell>
              <Table.Cell collapsing>
                <LastDateUsedModal
                  rd_month={rd_month}
                  rd_date={rd_date}
                  rd_year={rd_year}
                  curr_month={curr_month}
                  curr_date={curr_date}
                  curr_year={curr_year}
                  finalOysterSubmit={finalOysterSubmit}
                  inv={inv}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        );
      })}
    </Table>
  ); //end render
} //end OysterTable

export default OysterTable;
