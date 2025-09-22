import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { data } from "@remix-run/router";
import MOCK_DATA from "../mocks/reslistMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchBox = screen.getByTestId("searchInput");
  fireEvent.change(searchBox, {target: {value: "burger"}})
  fireEvent.click(searchBtn)

  expect(searchBtn).toBeInTheDocument();
});
