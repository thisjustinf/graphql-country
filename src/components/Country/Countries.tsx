import React, { FC } from "react";
import Country from "../../types/Country";
import { Container } from "@chakra-ui/react";
import CountryCard from "./CountryCard";

interface ICountries {
  countries?: Country[];
}

const Countries: FC<ICountries> = ({ countries }) => {
  return (
    <Container>
      {countries?.map((c: Country) => (
        <CountryCard key={c.code} {...c} />
      ))}
    </Container>
  );
};

export default Countries;
