import Country from "./Country";

export default interface Continent {
  code?: string;
  name: string;
  countries?: Country[];
}
