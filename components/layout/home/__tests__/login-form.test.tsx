import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { LoginForm } from "../login-form";
import { authBuilder } from "../__mocks__/builders/auth";

describe("LoginForm", () => {
  it("submits form correctly", () => {
    const handleSubmit = jest.fn();
    const { username, password } = authBuilder();

    render(<LoginForm onSubmit={handleSubmit} />);

    userEvent.type(
      screen.getByRole("textbox", {
        name: /nama id yang terdaftar \/ user name/i,
      }),
      username
    );

    userEvent.type(screen.getByLabelText(/kata sandi \/ password/i), password);

    userEvent.click(screen.getByRole("button", { name: /masuk/i }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      username,
      password,
    });
  });
});
