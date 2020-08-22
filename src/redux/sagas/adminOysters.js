import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addToInventory(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.post("/api/inventory", action.payload);

    // const response = yield axios.post("/")
  } catch (error) {
    console.log("NEW ENTRY ERROR");
  }
}
// function* addOyster(action) {
//   try {
//     const config = {
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     };

//     console.log(action.payload);
//     const response = yield axios.post("/api/add-oyster", action.payload);

//     // now that the session has given us a user object
//     // with an id and username set the client-side user object to let
//     // the client-side code know the user is logged in
//     yield put({ type: "GET_OYSTERS" });
//   } catch (error) {
//     console.log("User get request failed", error);
//   }
// }

// function* getOysters() {
//   try {
//     const response = yield axios.get(`/api/add-oyster`);
//     yield put({ type: "SET_OYSTER_LIST", payload: response.data });
//   } catch (error) {
//     console.log("GET OYSTER CLIENT ERR", error);
//   }
// }

function* oysterInventory() {
  yield takeLatest("ADD_TO_INVENTORY", addToInventory);
  //   yield takeLatest("ADD_OYSTER", addOyster);
  //   yield takeLatest("GET_OYSTERS", getOysters);
}

export default oysterInventory;
