import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryCard from "./CountryCard";
import mock from "./CountryCard.mock";

test("loads and displays country info", async () => {
  render(<CountryCard {...mock} />);

  await screen.findByText("🇯🇲 Jamaica");

  expect(await screen.findByText("🇯🇲 Jamaica")).toBeInTheDocument();
  expect(
    await screen.findByText("🌐 Continent: North America")
  ).toBeInTheDocument();
  expect(await screen.findByText("📍 Capital: Kingston")).toBeInTheDocument();
  expect(await screen.findByText("💸 Currency: JMD")).toBeInTheDocument();
  expect(await screen.findByText("🗣 Language: English")).toBeInTheDocument();
});
