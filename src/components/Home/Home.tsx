import { useQuery } from "@apollo/client";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text
} from "@chakra-ui/react";
import React, { ChangeEvent, FC, useState } from "react";

import { GET_COUNTRIES_QUERY } from "../../graphql/country";
import Country from "../../types/Country";
import { EntityEnum } from "../../types/Entity";
import { FilterInput } from "../../types/inputs/FilterInput";
import Language from "../../types/Language";
import Countries from "../Country/Countries";

interface ISearch {
  query?: string;
  filter?: FilterInput;
}

const Home: FC = () => {
  const regex: string = "[A-Z]*";
  const [search, setSearch] = useState<ISearch>({
    query: "",
    filter: {
      code: {
        regex
      }
    }
  });
  const [countries, setCountries] = useState<Country[]>([]);
  const { loading, data } = useQuery(GET_COUNTRIES_QUERY);
  const [entity, setEntity] = useState<string>(EntityEnum.COUNTRY);
  const [selectPlaceholder, setSelectPlaceholder] = useState<string>("");
  const [inputPlaceholder, setInputPlaceholder] =
    useState<string>("Enter Country");

  const handleEntityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setEntity(value);
    setSearch({ ...search, query: "" });
    if (countries.length !== 0) setCountries([]);
    setInputPlaceholder(
      value === EntityEnum.CONTINENT
        ? "Enter Continent"
        : value === EntityEnum.LANGUAGE
        ? "Enter Language"
        : "Enter Country"
    );
    setSelectPlaceholder(
      value === EntityEnum.CONTINENT
        ? "Continent"
        : value === EntityEnum.LANGUAGE
        ? "Language"
        : "Country"
    );
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearch({
      ...search,
      [name]: value
    });
    if (!loading && data) {
      const filteredCountries: Country[] =
        entity === EntityEnum.LANGUAGE
          ? data?.countries.filter((c: Country) =>
              c.languages.some((lang: Language) => lang.name?.includes(value))
            )
          : entity === EntityEnum.CONTINENT
          ? data?.countries?.filter((c: Country) =>
              c?.continent?.name.includes(value)
            )
          : data?.countries?.filter((c: Country) => c?.name?.includes(value));
      setCountries(filteredCountries);
    }
  };

  return (
    <Box
      w="100%"
      display="flex"
      mt="2"
      alignItems="center"
      flexDirection="column"
    >
      <Heading as="h1" size="2xl">
        We're on a World Tour
      </Heading>
      <Text fontSize="25vh"> 🌎 </Text>
      <InputGroup display="flex" alignItems="center" flexDirection="column">
        <Input
          maxW="md"
          name="query"
          placeholder={inputPlaceholder}
          value={search.query}
          onChange={handleInputChange}
        />
        <InputRightElement
          children={
            <Select
              name="entity"
              placeholder={selectPlaceholder}
              onChange={handleEntityChange}
              value={selectPlaceholder}
            >
              <option value={EntityEnum.COUNTRY.toString()}>Country</option>
              <option value={EntityEnum.CONTINENT.toString()}>Continent</option>
              <option value={EntityEnum.LANGUAGE.toString()}>Language</option>
            </Select>
          }
        />
      </InputGroup>
      <Countries countries={countries} />
    </Box>
  );
};

export default Home;
