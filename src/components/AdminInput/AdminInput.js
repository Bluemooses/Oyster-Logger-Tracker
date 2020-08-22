import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Radio } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AdminInput(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props.oyster);
  });
  const [date, setDate] = useState(new Date());
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  function addOyster(event) {
    console.log(event.target);
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
    </Form>
  );
}

export default AdminInput;
