import React, { useEffect, useState } from "react";
import { Button, Image, Modal, Input, Label } from "semantic-ui-react";

const LastDateUsedModal = (props) => {
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

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="instagram">Submit Last Date Used</Button>}
    >
      <Modal.Header>{oysterObject.oyster_name}</Modal.Header>
      <Modal.Content>
        <Input
          onChange={(e) => {
            setCurrentCount(Number(e.target.value));
          }}
          placeholder={currentCount}
          label="Current Count"
          type="number"
        ></Input>
      </Modal.Content>
      <Modal.Content>
        <Input
          placeholder={numberSold}
          onChange={(e) => setNumberSold(Number(e.target.value))}
          label="Number Sold"
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
          Submit Changes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LastDateUsedModal;
