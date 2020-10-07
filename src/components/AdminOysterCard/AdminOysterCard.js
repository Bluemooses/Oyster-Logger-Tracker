import React, { useEffect, useState } from "react";
import "../AdminOysterCard/AdminOysterCard.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { Button, Card, Label, Modal, Form, Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";

function OysterCard(props) {
  //Redux declarations
  const user = useSelector((redux) => redux.user);
  const dispatch = useDispatch();
  const oyster = props.oyster;

  //State functions
  const [open, setOpen] = useState(false);
  const [oysterCount, setOysterCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [receivedDate, setReceivedDate] = useState(new Date());

  //Event handlers
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  function addOyster(oyster) {
    //Declare oyster to add to inventory
    let oysterObject = {
      ship_date: date.toUTCString(),
      received_date: receivedDate.toUTCString(),
      current_count: oysterCount,
      oyster_name: oyster.name,
    };

    dispatch({ type: "ADD_TO_INVENTORY", payload: oysterObject });
    setOpen(false);
    //close modal
  }

  return (
    // Card displays data from oyster props
    <Card key={oyster.id}>
      <Card.Content>
        <Card.Header>{oyster.name}</Card.Header>
        <Card.Meta>
          {oyster.global_location ? "East Coast" : "West Coast"}
        </Card.Meta>
        <Card.Meta>{oyster.geo_location}</Card.Meta>
      </Card.Content>
      <Card.Content>{oyster.description}</Card.Content>
      <Card.Content>
        {/*  */}
        {/* Begin modal to handle adding oyster to users inventory */}
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button>Add to Inventory</Button>}
        >
          <Modal.Header>
            Add <span className="oysterName">{oyster.name}</span> to Inventory
          </Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              {/*  */}
              {/* Form submit add's oyster -- input fields handle 'Shipping Date', 'Received Date', and 'How Many' */}
              <Form onSubmit={addOyster}>
                <Form.Field>
                  <Label>Shipping Date</Label>
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    onCalendarClose={handleCalendarClose}
                    onCalendarOpen={handleCalendarOpen}
                    value={date}
                  />
                </Form.Field>
                <Form.Field>
                  <Label>Received Date</Label>
                  <DatePicker
                    selected={receivedDate}
                    onChange={(receivedDate) => setReceivedDate(receivedDate)}
                    onCalendarClose={handleCalendarClose}
                    onCalendarOpen={handleCalendarOpen}
                    value={receivedDate}
                  />
                </Form.Field>
                <Form.Field>
                  <Label>How Many</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    onChange={(e) => {
                      setOysterCount(e.target.value);
                    }}
                  />
                </Form.Field>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              content="Add to Inventory"
              labelPosition="right"
              icon="checkmark"
              onClick={() => addOyster(oyster)}
              positive
            />
          </Modal.Actions>
        </Modal>
        {/* End modal */}
      </Card.Content>
    </Card>
  );
}

export default OysterCard;
