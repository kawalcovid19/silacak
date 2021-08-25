import { render, screen } from "@testing-library/react";
import React from "react";
import Monitor from "~/pages/dashboard/tracing/[caseId]/[contactId]/monitor";

jest.mock("next/router", () => require("next-router-mock"));

describe("Monitor", () => {
  it("renders page title correctly", () => {
    render(<Monitor />);

    expect(screen.getByRole("heading", { name: /tambah pemantauan/i })).toBeVisible();
  });

  it("renders the `Kembali` button correctly", () => {
    render(<Monitor />);

    expect(screen.getByRole("link", { name: /kembali/i })).toHaveAttribute(
      "href",
      "/dashboard/tracing/undefined/undefined"
    );
  });
});
