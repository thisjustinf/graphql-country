import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import mocks from "./Home.mocks";
import Home from "./Home";

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  await screen.findByPlaceholderText("Enter Country");

  expect(
    await screen.findByPlaceholderText("Enter Country")
  ).toBeInTheDocument();
});
