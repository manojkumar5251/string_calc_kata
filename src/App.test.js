import { render, screen } from "@testing-library/react";
import App from "./App";

describe("User interface for the String Calculator", () => {
  test("renders the text input", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});
