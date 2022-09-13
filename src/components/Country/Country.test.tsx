import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import mocks from "./Country.mock";
import Country from "./Country";

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Country />
    </MockedProvider>
  );

  await screen.findByText("United States");

  expect(await screen.findByText("United States")).toBeInTheDocument();
});
