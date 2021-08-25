import { render, screen } from "@testing-library/react";
import React from "react";
import TracingCaseContactDetail from "~/pages/dashboard/tracing/[caseId]/[contactId]";

jest.mock("next/router", () => require("next-router-mock"));

describe("TracingCaseContactDetail", () => {
  it("renders page title correctly", () => {
    render(<TracingCaseContactDetail />);

    expect(screen.getByRole("heading", { name: /detail kontak erat/i })).toBeVisible();
  });

  it("renders the `Kembali` button correctly", () => {
    render(<TracingCaseContactDetail />);

    expect(screen.getByRole("link", { name: /kembali/i })).toHaveAttribute(
      "href",
      "/dashboard/tracing/undefined"
    );
  });
});
