import { runSaga } from "redux-saga";
import axios from "axios";
import { fetchDataSaga } from "../../redux/sagas";

jest.mock("axios");

describe("fetchDataSaga", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches FETCH_DATA_SUCCESS when data is fetched successfully", async () => {
    const responseData = [
      { id: 1, title: "Todo 1" },
      { id: 2, title: "Todo 2" },
    ];
    axios.get.mockResolvedValueOnce({ data: responseData });

    const dispatchedActions = [];
    await runSaga(
      {
        dispatch: (action) => dispatchedActions.push(action),
      },
      fetchDataSaga
    );

    expect(dispatchedActions).toEqual([
      { type: "FETCH_DATA_SUCCESS", payload: responseData },
    ]);
  });

  it("dispatches FETCH_DATA_FAILURE when an error occurs", async () => {
    const errorMessage = "Failed to fetch data";
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    const dispatchedActions = [];
    await runSaga(
      {
        dispatch: (action) => dispatchedActions.push(action),
      },
      fetchDataSaga
    );

    expect(dispatchedActions).toEqual([
      { type: "FETCH_DATA_FAILURE", payload: errorMessage },
    ]);
  });
});
