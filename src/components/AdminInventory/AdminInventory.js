import React from "react";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import "../AdminInventory/AdminInventory.css";

import AdminOysterCard from "../AdminOysterCard/AdminOysterCard";
function AdminInventory(props) {
  const oysters = useSelector((redux) => redux.oysters);

  return (
    <Card.Group itemsPerRow={4} className="adminCards">
      {oysters.map((oyster) => {
        return <AdminOysterCard key={oyster.id} oyster={oyster} />;
      })}
    </Card.Group>
  );
}

export default AdminInventory;
