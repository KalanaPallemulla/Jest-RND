import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FormComponent from "../FormComponent";

describe("FormComponent", () => {
  it("submits the form with input1 as a required field", () => {
    render(<FormComponent />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    const input1ErrorMessage = screen.getByText(/input 1 is required/i);
    expect(input1ErrorMessage).toBeInTheDocument();
  });

  it("submits the form successfully when input1 is provided", () => {
    render(<FormComponent />);

    const input1 = screen.getByLabelText(/input 1:/i);
    fireEvent.change(input1, { target: { value: "Test Input" } });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    const input1ErrorMessage = screen.queryByText(/input 1 is required/i);
    expect(input1ErrorMessage).not.toBeInTheDocument();
  });
});

describe("FormComponentInput", () => {
  it("displays input2 only when selectedOption is option2", () => {
    render(<FormComponent />);

    const input2Label = screen.queryByText(/input 2:/i);
    expect(input2Label).not.toBeInTheDocument();

    const selectDropdown = screen.getByLabelText(/select an option:/i);
    fireEvent.change(selectDropdown, { target: { value: "option2" } });

    const input2 = screen.getByLabelText(/input 2:/i);
    expect(input2).toBeInTheDocument();
  });
});
