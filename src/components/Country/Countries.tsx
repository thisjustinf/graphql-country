import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_QUERY } from "../../graphql/country";
import Country from "../../types/Country";
import { Container, Skeleton } from "@chakra-ui/react";
import CountryCard from "./CountryCard";

interface ICountries {
  countries?: Country[];
}

const Countries: FC<ICountries> = ({ countries }) => {
  // const { countries } = data;
  // console.log(countries);
  return (
    <Container>
      {countries?.map((c: Country) => (
        <CountryCard key={c.code} {...c} />
      ))}
    </Container>
  );
};

export default Countries;
