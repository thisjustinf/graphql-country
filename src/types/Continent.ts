import Country from "./Country";

export default interface Continent {
  code: string | number;
  name: string;
  countries: Country[];
}
