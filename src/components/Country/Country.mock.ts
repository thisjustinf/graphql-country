import { MockedResponse } from "@apollo/client/testing";
import { GET_COUNTRY_BY_CODE_QUERY } from "../../graphql/country";

const mock: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: GET_COUNTRY_BY_CODE_QUERY,
      variables: {
        code: "US"
      }
    },
    result: {
      data: {
        country: {
          code: "US",
          capital: "Washington D.C.",
          name: "United States",
          emoji: "🇺🇸",
          continent: {
            name: "North America"
          },
          languages: [
            {
              code: "en",
              name: "English",
              native: "English"
            }
          ],
          states: [
            {
              code: "AL",
              name: "Alabama"
            },
            {
              code: "AK",
              name: "Alaska"
            },
            {
              code: "AZ",
              name: "Arizona"
            },
            {
              code: "AR",
              name: "Arkansas"
            },
            {
              code: "CA",
              name: "California"
            },
            {
              code: "CO",
              name: "Colorado"
            },
            {
              code: "CT",
              name: "Connecticut"
            },
            {
              code: "DC",
              name: "District of Columbia"
            },
            {
              code: "DE",
              name: "Delaware"
            },
            {
              code: "FL",
              name: "Florida"
            },
            {
              code: "GA",
              name: "Georgia"
            },
            {
              code: "HI",
              name: "Hawaii"
            },
            {
              code: "ID",
              name: "Idaho"
            },
            {
              code: "IL",
              name: "Illinois"
            },
            {
              code: "IN",
              name: "Indiana"
            },
            {
              code: "IA",
              name: "Iowa"
            },
            {
              code: "KS",
              name: "Kansas"
            },
            {
              code: "KY",
              name: "Kentucky"
            },
            {
              code: "LA",
              name: "Louisiana"
            },
            {
              code: "ME",
              name: "Maine"
            },
            {
              code: "MD",
              name: "Maryland"
            },
            {
              code: "MA",
              name: "Massachusetts"
            },
            {
              code: "MI",
              name: "Michigan"
            },
            {
              code: "MN",
              name: "Minnesota"
            },
            {
              code: "MS",
              name: "Mississippi"
            },
            {
              code: "MO",
              name: "Missouri"
            },
            {
              code: "MT",
              name: "Montana"
            },
            {
              code: "NE",
              name: "Nebraska"
            },
            {
              code: "NV",
              name: "Nevada"
            },
            {
              code: "NH",
              name: "New Hampshire"
            },
            {
              code: "NJ",
              name: "New Jersey"
            },
            {
              code: "NM",
              name: "New Mexico"
            },
            {
              code: "NY",
              name: "New York"
            },
            {
              code: "NC",
              name: "North Carolina"
            },
            {
              code: "ND",
              name: "North Dakota"
            },
            {
              code: "OH",
              name: "Ohio"
            },
            {
              code: "OK",
              name: "Oklahoma"
            },
            {
              code: "OR",
              name: "Oregon"
            },
            {
              code: "PA",
              name: "Pennsylvania"
            },
            {
              code: "RI",
              name: "Rhode Island"
            },
            {
              code: "SC",
              name: "South Carolina"
            },
            {
              code: "SD",
              name: "South Dakota"
            },
            {
              code: "TN",
              name: "Tennessee"
            },
            {
              code: "TX",
              name: "Texas"
            },
            {
              code: "UT",
              name: "Utah"
            },
            {
              code: "VT",
              name: "Vermont"
            },
            {
              code: "VA",
              name: "Virginia"
            },
            {
              code: "WA",
              name: "Washington"
            },
            {
              code: "WV",
              name: "West Virginia"
            },
            {
              code: "WI",
              name: "Wisconsin"
            },
            {
              code: "WY",
              name: "Wyoming"
            },
            {
              code: "AS",
              name: "American Samoa"
            },
            {
              code: "GU",
              name: "Guam"
            },
            {
              code: "MP",
              name: "Northern Mariana Islands"
            },
            {
              code: "PR",
              name: "Puerto Rico"
            },
            {
              code: "UM",
              name: "United States Minor Outlying Islands"
            },
            {
              code: "VI",
              name: "Virgin Islands"
            }
          ]
        }
      }
    }
  }
];

export default mock;
