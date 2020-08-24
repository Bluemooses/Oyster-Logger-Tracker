import React, { useState } from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import "./InputOyster.css";

function InputOyster(props) {
  const [oysterName, setOysterName] = useState("");
  const [oysterLocation, setOysterLocation] = useState("");
  const [oysterDescription, setOysterDescription] = useState("");
  const [coast, setCoast] = useState("");
  const dispatch = useDispatch();

  function handleRadio(event) {
    setCoast(event.target.value);
    console.log(coast);
  }

  function addOyster(event) {
    let oysterObject = {
      global_location: coast,
      name: oysterName,
      description: oysterDescription,
      geo_location: oysterLocation,
    };
    if (
      oysterName === "" ||
      oysterLocation === "" ||
      oysterDescription === "" ||
      coast === ""
    ) {
      return alert("Fill the form fields please");
    } else {
      dispatch({ type: "ADD_OYSTER", payload: oysterObject });
    }
  }

  return (
    <Container className="inputForm">
      <Form onSubmit={addOyster}>
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
    </Container>
  );
}

export default InputOyster;
