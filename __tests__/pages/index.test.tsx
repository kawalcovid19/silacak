import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "~/pages";

jest.mock("next/router", () => require("next-router-mock"));

describe("HomePage", () => {
  it("renders the illustration image correctly", () => {
    render(<HomePage />);

    expect(screen.getByText(/selamat datang di layanan/i)).toBeVisible();

    expect(
      screen.getByRole("img", {
        name: /ilustrasi silacak/i,
      })
    ).toBeVisible();
  });

  it("submits form correctly", () => {
    render(<HomePage />);

    userEvent.type(
      screen.getByRole("textbox", {
        name: /nama id yang terdaftar \/ user name/i,
      }),
      "seseorang"
    );

    userEvent.type(screen.getByLabelText(/kata sandi \/ password/i), "kata s4ndi");

    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    userEvent.click(screen.getByRole("button", { name: /masuk/i }));

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith("seseorang", "kata s4ndi");
  });
});
