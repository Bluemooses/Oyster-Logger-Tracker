import React, { useState } from "react";
import { Button, Checkbox, Form, Radio } from "semantic-ui-react";
import { func } from "prop-types";

function InputOyster(props) {
  const [oysterName, setOysterName] = useState("");
  const [oysterLocation, setOysterLocation] = useState("");
  const [oysterDescription, setOysterDescription] = useState("");
  const [coast, setCoast] = useState("");

  function handleRadio(event) {
    setCoast(event.target.value);
    console.log(coast);
  }

  function addOyster(event) {
    event.preventDefault();

    let oysterObject = {
      global_location: coast,
      name: oysterName,
      description: oysterDescription,
      geo_location: oysterLocation,
    };
    console.log(oysterObject);
    if (
      oysterObject.global_location === "" ||
      oysterObject.name === "" ||
      oysterObject.description === "" ||
      oysterObject.geo_location === ""
    ) {
      alert("Fill the form fields please");
    }
  }

  return (
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
  );
}

export default InputOyster;
