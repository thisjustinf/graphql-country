export default interface StringQueryOperatorInput {
  eq?: string;
  ne?: string;
  in?: string[];
  nin?: string[];
  regex?: string;
  glob?: string;
}
