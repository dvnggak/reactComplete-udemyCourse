import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("render Hello World as a text", () => {
  //Arrange
  render(<Greeting />);

  //Act
  //...NOTHING

  //Assert
  const helloWorldElement = screen.getByText("Hello World");
  expect(helloWorldElement).toBeInTheDocument();
});
