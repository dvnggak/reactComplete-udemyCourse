import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders POST, if req succeed", async () => {
    //Arrange
    render(<Async />);

    //Act
    //...NOTHING

    //Assert
    const listItemRendered = await screen.findAllByRole("listitem");
    expect(listItemRendered).not.toHaveLength(0);
  });
});
