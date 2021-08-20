import { render, screen } from "@testing-library/react";
import MonitoringList from "~/pages/dashboard/monitoring";

jest.mock("next/router", () => require("next-router-mock"));

describe("MonitoringList", () => {
  it("renders the correct page header", () => {
    render(<MonitoringList />);

    const title = screen.getByText(/Anda terdaftar pada/i);
    expect(title).toBeVisible();

    const selectButton = screen.getByRole("button", { name: /tetapkan/i });
    expect(selectButton).toBeVisible();
  });
});
