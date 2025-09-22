import { render, screen } from "@testing-library/react";
import RestaurantCards from "../RestaurantCards";
import MOCK_DATA from "../mocks/resmock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data ", () => {
  render(<RestaurantCards resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
