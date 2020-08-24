import React from "react";
import { useHistory } from "react-router-dom";

const goToInventory = (props) => {
  let history = useHistory();
  history.push("/oyster-inventory");
};

export default goToInventory;
