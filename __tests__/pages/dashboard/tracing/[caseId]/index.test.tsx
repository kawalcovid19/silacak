import { render, screen } from "@testing-library/react";
import React from "react";
import TracingCaseDetail from "~/pages/dashboard/tracing/[caseId]";

jest.mock("next/router", () => require("next-router-mock"));

describe("TracingCaseDetail", () => {
  it("renders page title correctly", () => {
    render(<TracingCaseDetail />);

    expect(screen.getByRole("heading", { name: /detail kasus konfirmasi/i })).toBeVisible();
  });

  it("renders the `Kembali` button correctly", () => {
    render(<TracingCaseDetail />);

    expect(screen.getByRole("link", { name: /kembali/i })).toHaveAttribute(
      "href",
      "/dashboard/tracing"
    );
  });
});
