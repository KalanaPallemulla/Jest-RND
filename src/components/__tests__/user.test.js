/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from "react";
import { render, waitFor } from "@testing-library/react";
import UserComponent from "../UserComponent";

test("fetches and displays user data", async () => {
  const mockUser = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
  };
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockUser),
  });

  const { getByText } = render(<UserComponent />);

  await waitFor(() => {
    expect(getByText("Leanne Graham")).toBeInTheDocument();
    expect(getByText("Email: Sincere@april.biz")).toBeInTheDocument();
    expect(getByText("Phone: 1-770-736-8031 x56442")).toBeInTheDocument();
  });
});
