import Continent from "./Continent";
import Language from "./Language";
import State from "./State";

export default interface Country {
  code: string;
  name: string;
  currency?: string | null;
  capital?: string | null;
  native?: string;
  phone?: string;
  continent: Continent;
  languages: Language[];
  states?: State[];
  emoji: string;
  emojiU?: string;
}
