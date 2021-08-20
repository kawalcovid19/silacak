import { render, screen } from "@testing-library/react";
import TracingList from "~/pages/dashboard/tracing";

jest.mock("next/router", () => require("next-router-mock"));

describe("TracingList", () => {
  it("renders the correct page header", () => {
    render(<TracingList />);

    const title = screen.getByText(/Anda terdaftar pada/i);
    expect(title).toBeVisible();

    const selectButton = screen.getByRole("button", { name: /tetapkan/i });
    expect(selectButton).toBeVisible();
  });
});
