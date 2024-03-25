// sagas.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

export function* fetchDataSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/todos"
    );
    yield put({ type: "FETCH_DATA_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_DATA_FAILURE", payload: error.message });
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_DATA", fetchDataSaga);
}

export default rootSaga;
