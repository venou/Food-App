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
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
        }}
      >
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  // const searchBtn = screen.getByRole("button", { name: "Search" });

  //   const searchInput = screen.getByTestId("searchInput");
  // // console.log(searchInput);

  //   fireEvent.change(searchInput, { target: { value: "burger" } });

  //   fireEvent.click(searchBtn);

  //   // Screen Should load 1 restaurant card

  //   const card = screen.findAllByTestId("resCard");

  // expect(card.length).toBe(1);
});
