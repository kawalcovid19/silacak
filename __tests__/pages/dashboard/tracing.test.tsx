import { render, screen } from "@testing-library/react";
import TracingDashboardIndex from "~/pages/dashboard/tracing";

jest.mock("next/router", () => require("next-router-mock"));

describe("DashboardIndex", () => {
  it("renders without crashing", () => {
    render(<TracingDashboardIndex />);

    const title = screen.getByText(/Dashboard/i);
    expect(title).toBeVisible();
  });
});
