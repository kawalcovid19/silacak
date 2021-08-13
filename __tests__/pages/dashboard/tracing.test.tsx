import { render, screen } from "@testing-library/react";
import TracingDashboardIndex from "~/pages/dashboard/tracing";

jest.mock("next/router", () => require("next-router-mock"));

describe("DashboardIndex", () => {
  it("renders the correct page contents", () => {
    render(<TracingDashboardIndex />);

    const title = screen.getByText(/Anda terdaftar pada/i);
    expect(title).toBeVisible();

    const selectButton = screen.getByRole("button", { name: /tetapkan/i });
    expect(selectButton).toBeVisible();
  });
});
