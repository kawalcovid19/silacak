import React from "react";

import { render, screen } from "@testing-library/react";
import HomePage from "~/pages";

jest.mock("next/router", () => require("next-router-mock"));

describe("HomePage", () => {
  // TODO: add proper tests later
  it("renders without crashing", () => {
    render(<HomePage />);

    expect(screen.getByText(/Welcome to/i)).toBeVisible();
  });
});
