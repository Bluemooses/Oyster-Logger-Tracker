import React, { useEffect, useState } from "react";
import { Button, Image, Modal, Input, Label } from "semantic-ui-react";

function OysterModal(props) {
  const [open, setOpen] = useState(false);
  const oysterObject = props.inv;
  const submitLastDateUsed = props.finalOysterSubmit;
  const [currentCount, setCurrentCount] = useState(oysterObject.current_count);
  const [numberSold, setNumberSold] = useState(oysterObject.sold);

  let updateValues = {
    oysterId: oysterObject.id,
    current_count: currentCount,
    sold: numberSold,
  };

  console.log(updateValues);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Update Oyster</Button>}
    >
      <Modal.Header>{oysterObject.oyster_name}</Modal.Header>
      <Modal.Content>
        <Input
          onChange={(e) => {
            setCurrentCount(Number(e.target.value));
          }}
          value={currentCount}
          label="Current Count"
          type="number"
        ></Input>
      </Modal.Content>
      <Modal.Content>
        <Input
          value={numberSold}
          onChange={(e) => setNumberSold(Number(e.target.value))}
          label="Sold"
          type="number"
        ></Input>
      </Modal.Content>
      <Modal.Content></Modal.Content>
      <Modal.Actions>
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
            submitLastDateUsed(oysterObject);
          }}
          positive
        >
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default OysterModal;
