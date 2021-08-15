import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegistrationStatus from "~/pages/registration-status";

jest.mock("next/router", () => require("next-router-mock"));

describe("CheckAccount", () => {
  it("renders correctly", () => {
    render(<RegistrationStatus />);

    const title = screen.getByText(/Cek Status Pendaftaran Tracer/i);
    expect(title).toBeVisible();

    const registerButton = screen.getByRole("button", { name: /Cek Status Pendaftaran/i });
    expect(registerButton).toBeVisible();
  });
  it("submits form correctly", () => {
    render(<RegistrationStatus />);

    userEvent.type(
      screen.getByRole("textbox", {
        name: /Nama ID yang didaftarkan/i,
      }),
      "silacak"
    );

    userEvent.click(screen.getByRole("button", { name: /Cek Status Pendaftaran/i }));
  });
});
