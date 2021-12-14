import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { ALL_COUNTRIES_QUERY } from "../graphql/queries/country";
import Country from "../types/Country";

const Countries: FC = () => {
  const { data, loading, error } = useQuery(ALL_COUNTRIES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div>
      {data &&
        data?.countries?.map((country: Country) => (
          <div key={country.code}>
            <span>
              {" "}
              Country Code: {country.code} | Name: {country.name}
            </span>
          </div>
        ))}
    </div>
  );
};

export default Countries;
