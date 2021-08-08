import React from "react";

import HomePage from "~/pages";

import { render, screen } from "@testing-library/react";

describe("HomePage", () => {
  // TODO: add proper tests later
  it("renders without crashing", () => {
    render(<HomePage />);

    expect(screen.getByText(/Welcome to/i)).toBeVisible();
  });
});
