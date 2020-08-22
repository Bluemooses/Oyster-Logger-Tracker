import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  Image,
  Label,
  Grid,
  Modal,
  Header,
} from "semantic-ui-react";
import { useDispatch } from "react-redux";

function OysterCard(props) {
  const dispatch = useDispatch();

  let oyster = props.oyster;
  const [open, setOpen] = useState(false);

  return (
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
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button>Add to Inventory</Button>}
        >
          <Modal.Header>Add {oyster.name} to Inventory</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpen(false)}>
              Nope
            </Button>
            <Button
              content="Yep, that's me"
              labelPosition="right"
              icon="checkmark"
              onClick={() => setOpen(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
      </Card.Content>
    </Card>
  );
}

export default OysterCard;
