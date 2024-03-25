import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import TodoComponent from "../TodoComponent";

describe("TodoComponent", () => {
  it("fetches and displays todos from API", async () => {
    const mock = new MockAdapter(axios);

    const mockTodos = [
      { id: 1, title: "Todo 1" },
      { id: 2, title: "Todo 2" },
      { id: 3, title: "Todo 3" },
    ];
    mock
      .onGet("https://jsonplaceholder.typicode.com/todos")
      .reply(200, mockTodos);

    render(<TodoComponent />);

    await screen.findByText("Todo 1");

    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
    expect(screen.getByText("Todo 3")).toBeInTheDocument();
  });

  it("displays loading message while fetching todos", async () => {
    const mock = new MockAdapter(axios);

    mock.onGet("https://jsonplaceholder.typicode.com/todos").reply(200, []);

    render(<TodoComponent />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await screen.findByText("Todo List", {}, { timeout: 5000 });

    // expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
