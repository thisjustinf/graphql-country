import Country from "./Country";

export default interface State {
  code?: string;
  name: string;
  country: Country;
}
