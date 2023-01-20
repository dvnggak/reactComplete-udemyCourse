import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders POST, if req succeed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolveValueOnce({
      json: async () => [
        {
          id: "p1",
          title: "First Post",
        },
      ],
    });

    //Arrange
    render(<Async />);

    //Act
    //...NOTHING

    //Assert
    const listItemRendered = await screen.findAllByRole("listitem");
    expect(listItemRendered).not.toHaveLength(0);
  });
});
