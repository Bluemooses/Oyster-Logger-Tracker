import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addToInventory(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.post("/api/inventory", action.payload);
    yield put({ type: "GET_OYSTER_INVENTORY" });
    // const response = yield axios.post("/")
  } catch (error) {
    console.log("NEW ENTRY ERROR");
  }
}

function* getOysterInventory() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get(`/api/inventory`, config);
    console.log(response.data);
    yield put({ type: "SET_INVENTORY", payload: response.data });
    // yield put({ type: "SET_OYSTER_LIST", payload: response.data });
  } catch (error) {
    console.log("GET OYSTER CLIENT ERR", error);
  }
}

function* updateOysterCount(action) {
  try {
    console.log(action.payload);
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    let id = action.payload.oysterId;
    const response = yield axios.put(
      `/api/inventory/update-count/${id}`,
      config,
      action.payload
    );
    console.log(response.data);
    yield put({ type: "GET_OYSTER_INVENTORY" });
    // yield put({ type: "SET_OYSTER_LIST", payload: response.data });
  } catch (error) {
    console.log("GET OYSTER CLIENT ERR", error);
  }
}

function* oysterInventory() {
  yield takeLatest("ADD_TO_INVENTORY", addToInventory);
  yield takeLatest("GET_OYSTER_INVENTORY", getOysterInventory);
  yield takeLatest("UPDATE_COUNT", updateOysterCount);
}

export default oysterInventory;
