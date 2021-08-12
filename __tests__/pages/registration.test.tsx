import { render, screen } from "@testing-library/react";
import RegistrationPage from "~/pages/registration";

jest.mock("next/router", () => require("next-router-mock"));

describe("RegistrationPage", () => {
  it("renders correctly", () => {
    render(<RegistrationPage />);

    const title = screen.getByText(/Pendaftaran Tracer/i);
    expect(title).toBeVisible();

    const subtitle = screen.getByText(/Isi dengan lengkap dan ingat Nama ID dan Kata Sandi Anda/i);
    expect(subtitle).toBeVisible();
  });
});
