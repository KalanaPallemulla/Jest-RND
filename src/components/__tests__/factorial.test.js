import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FactorialComponent from "../FactorialComponent";

describe("FactorialComponent", () => {
  test("calculates factorial correctly", () => {
    render(<FactorialComponent />);

    const input = screen.getByTestId("input-number");
    const button = screen.getByText("Calculate Factorial");

    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.click(button);

    const factorialResult = screen.getByTestId("factorial-result");
    const factorialResultText = factorialResult.textContent;
    expect(factorialResultText).toBe("Factorial of 5 is 120");
  });
});
