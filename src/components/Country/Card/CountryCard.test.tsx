import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryCard from "./CountryCard";
import mock from "./CountryCard.mock";

test("loads and displays country info", async () => {
  render(<CountryCard {...mock} />);

  await screen.findByText("🇯🇲 Jamaica");

  expect(await screen.findByText("🇯🇲 Jamaica")).toBeInTheDocument();
});
