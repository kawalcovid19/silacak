import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { LoginForm } from "../login-form";

describe("LoginForm", () => {
  it("submits form correctly", () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    userEvent.type(
      screen.getByRole("textbox", {
        name: /nama id yang terdaftar \/ user name/i,
      }),
      "seseorang"
    );

    userEvent.type(screen.getByLabelText(/kata sandi \/ password/i), "kata s4ndi");

    userEvent.click(screen.getByRole("button", { name: /masuk/i }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      username: "seseorang",
      password: "kata s4ndi",
    });
  });
});
