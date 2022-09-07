import StringQueryOperatorInput from "./StringQueryOperatorInput";

export interface FilterInput {
  code: StringQueryOperatorInput;
}

export interface LanguageFilterInput extends FilterInput {}

export interface ContinentFilterInput extends FilterInput {}

export interface CountryFilterInput extends FilterInput {
  currency?: StringQueryOperatorInput;
  continent?: StringQueryOperatorInput;
}
