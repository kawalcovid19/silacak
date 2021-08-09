import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "~/pages";
import { authBuilder } from "~/components/layout/home/__mocks__/builders/auth";

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
    const { username, password } = authBuilder();

    render(<HomePage />);

    userEvent.type(
      screen.getByRole("textbox", {
        name: /nama id yang terdaftar \/ user name/i,
      }),
      username
    );

    userEvent.type(screen.getByLabelText(/kata sandi \/ password/i), password);

    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    userEvent.click(screen.getByRole("button", { name: /masuk/i }));

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(username, password);
  });
});
