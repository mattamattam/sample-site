import { render, screen } from "@testing-library/react";
import Button from "../src/Button";
import "@testing-library/jest-dom";

test("renders the button", () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
});
