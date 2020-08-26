import React, { useEffect, useState } from "react";
import { Button, Image, Modal } from "semantic-ui-react";
function OysterModal(props) {
  const [open, setOpen] = useState(false);
  const oysterObject = props.inv;
  const submitLastDateUsed = props.finalOysterSubmit;
  console.log(props);
  console.log(props.inv);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Update Oyster</Button>}
    >
      <Modal.Header>Upload image</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src="/images/wireframe/image-square.png" wrapped />
        <Modal.Description>
          <p>Would you like to upload this image?</p>
        </Modal.Description>
      </Modal.Content>
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
