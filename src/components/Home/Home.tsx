import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC, useState } from "react";
import { EntityEnum } from "../../types/Entity";
import { FilterInput } from "../../types/inputs/FilterInput";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_QUERY } from "../../graphql/country";
interface ISearch {
  query?: string;
  filter?: FilterInput;
}

const Home: FC = () => {
  const [search, setSearch] = useState<ISearch>({
    query: "",
    filter: {
      code: {
        eq: "",
        regex: "",
      },
    },
  });
  const { loading, error, data } = useQuery(GET_COUNTRIES_QUERY, {
    variables: {
      filter: search.filter,
    },
  });
  const [entity, setEntity] = useState<string>(EntityEnum.COUNTRY);
  const [selectPlaceholder, setSelectPlaceholder] = useState<string>("Country");
  const [inputPlaceholder, setInputPlaceholder] =
    useState<string>("Enter Country");

  const handleEntityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setEntity(value);
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
    const { value } = e.target;
    setInputPlaceholder(
      value === EntityEnum.CONTINENT
        ? "Enter Continent"
        : value === EntityEnum.LANGUAGE
        ? "Enter Language"
        : "Enter Country"
    );
  };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setSearch({
  //     ...search,
  //     [name]: value,
  //   });
  // };

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
    </Box>
  );
};

export default Home;
