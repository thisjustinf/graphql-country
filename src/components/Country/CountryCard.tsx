import { Box, HStack, Tag, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Country from "../../types/Country";

const CountryCard: FC<Country> = ({
  name,
  emoji,
  capital,
  currency,
  continent,
  languages
}) => {
  return (
    <Box
      maxW="xl"
      maxH="md"
      overflow="hidden"
      borderColor="teal.300"
      borderRadius="md"
      borderWidth="1px"
      borderStyle="solid"
      padding="0.5em"
      bgColor="teal.100"
      my="2"
    >
      <Box display="flex" flexDirection="column" w="100%" noOfLines={1} my="2">
        <Text fontSize="2em">
          {emoji} {name}
        </Text>
      </Box>
      <HStack mx="0.5em">
        <Tag
          size="md"
          padding="5px"
          bgColor="teal"
          color="white"
          fontWeight="semibold"
          w="auto"
        >
          🌐 Continent: {continent.name}
        </Tag>
        <Tag
          size="md"
          padding="5px"
          bgColor="teal"
          color="white"
          fontWeight="semibold"
          w="auto"
        >
          📍 Capital: {capital}
        </Tag>
        <Tag
          size="md"
          padding="5px"
          bgColor="teal"
          color="white"
          fontWeight="semibold"
          w="auto"
        >
          💸 Currency: {currency}
        </Tag>
        <Tag
          size="md"
          padding="5px"
          bgColor="teal"
          color="white"
          fontWeight="semibold"
          w="auto"
        >
          {languages.length === 1
            ? `🗣 Language: ${languages[0].name}`
            : `🗣 # of Languages: ${languages.length}`}
        </Tag>
      </HStack>
    </Box>
  );
};

export default CountryCard;
