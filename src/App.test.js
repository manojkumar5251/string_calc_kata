import { fireEvent, render, screen } from "@testing-library/react";
import { add } from "./utils";
import App from "./App";

describe("User interface for the String Calculator", () => {
  test("renders the text input", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("renders the button", () => {
    render(<App />);
    const button = screen.getByRole("calc");
    expect(button).toBeInTheDocument();
  });

  test("calculates the data on button click", () => {
    render(<App />);

    const inputValue = "1,3";
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("calc");

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.click(button);

    const result = screen.getByRole("result");

    expect(result.textContent).toBe(String(add(inputValue)));
  });
});
