import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("render Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...NOTHING

    //Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render Its good to see you as a text if button not triggered", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...NOTHING

    //Assert
    const defaultText = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(defaultText).toBeInTheDocument();
  });

  test("render changed!, if button was triggered", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const defaultTextOnClick = screen.getByText("Changed");
    expect(defaultTextOnClick).toBeInTheDocument();
  });

  test("check if element is removed when button clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const defaultTextOnClick = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(defaultTextOnClick).toBeNull();
  });
});
