import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Send");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  // it is another name of test

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });
});
