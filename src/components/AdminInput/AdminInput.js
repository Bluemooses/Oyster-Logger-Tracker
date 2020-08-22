import React, { useState } from "react";
import { Button, Checkbox, Form, Radio } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AdminInput(props) {
  const dispatch = useDispatch();

  const [oysterName, setOysterName] = useState("");
  const [oysterLocation, setOysterLocation] = useState("");
  const [oysterDescription, setOysterDescription] = useState("");
  const [coast, setCoast] = useState("");
  const [date, setDate] = useState(new Date());
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  function handleRadio(event) {
    setCoast(event.target.value);
    console.log(coast);
  }

  function addOyster(event) {
    if (
      oysterName === "" ||
      oysterLocation === "" ||
      oysterDescription === "" ||
      coast === ""
    ) {
      alert("Fill the form fields please");
    }
    let oysterObject = {
      global_location: coast,
      name: oysterName,
      description: oysterDescription,
      geo_location: oysterLocation,
    };
    dispatch({ type: "ADD_OYSTER", payload: oysterObject });
  }

  return (
    <Form onSubmit={addOyster}>
      <Form.Field>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
          value={date}
        />
      </Form.Field>
      <Form.Field>
        <label>Oyster Name</label>
        <input
          onChange={(e) => {
            setOysterName(e.target.value);
          }}
          placeholder="Oyster Name"
        />
      </Form.Field>
      <Form.Field>
        <label>Location</label>
        <input
          onChange={(e) => {
            setOysterLocation(e.target.value);
          }}
          placeholder="Location"
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          onChange={(e) => {
            setOysterDescription(e.target.value);
          }}
          placeholder="Details about taste, wine pairings, etc.."
        ></input>
      </Form.Field>
      <div onChange={handleRadio}>
        <Form.Group inline>
          <Form.Field
            label="East Coast"
            control="input"
            type="radio"
            name="htmlRadios"
            value={true}
          />
          <Form.Field
            label="West Coast"
            control="input"
            type="radio"
            name="htmlRadios"
            value={false}
          />
        </Form.Group>
      </div>

      <Button type="submit">Add Oyster</Button>
    </Form>
  );
}

export default AdminInput;
