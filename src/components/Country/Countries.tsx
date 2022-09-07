import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_QUERY } from "../../graphql/country";
import Country from "../../types/Country";

const Countries: FC = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  const { countries } = data;
  console.log(countries);
  return (
    <div className="countries">
      <ul>
        {countries &&
          countries?.map((country: Country) => (
            <>
              <li key={country.code}>
                {" "}
                Country Code: {country.code} | Name: {country.name}
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
