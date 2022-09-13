import { useQuery } from "@apollo/client";
import { Spinner, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_COUNTRY_BY_CODE_QUERY } from "../../graphql/country";
import ICountry from "../../types/Country";

const Country: FC = () => {
  const { code } = useParams();
  const [country, setCountry] = useState<ICountry>();
  const { data, loading, error } = useQuery(GET_COUNTRY_BY_CODE_QUERY, {
    variables: {
      code
    }
  });

  if (loading) return <Spinner color="teal.200" />;
  if (error) return <Spinner color="red" />;
  // if (data) setCountry(data.country as ICountry);

  return (
    <div>
      <Text as="h1">{data?.country?.name}</Text>
    </div>
  );
};

export default Country;
