import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addOyster(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    console.log(action.payload);
    const response = yield axios.post("/api/add-oyster", action.payload);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: "GET_OYSTERS" });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* getOysters() {
  try {
    const response = yield axios.get(`/api/add-oyster`);
    yield put({ type: "SET_OYSTER_LIST", payload: response.data });
  } catch (error) {
    console.log("GET OYSTER CLIENT ERR", error);
  }
}

function* userSaga() {
  yield takeLatest("ADD_OYSTER", addOyster);
  yield takeLatest("GET_OYSTERS", getOysters);
}

export default userSaga;
