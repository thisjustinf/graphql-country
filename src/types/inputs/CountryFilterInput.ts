import FilterInput from "./FilterInput";
import StringQueryOperatorInput from "./StringQueryOperatorInput";

export default interface CountryFilterInput extends FilterInput {
  currency?: StringQueryOperatorInput;
  continent?: StringQueryOperatorInput;
}
