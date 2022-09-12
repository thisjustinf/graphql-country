import Continent from "./Continent";
import Language from "./Language";

export default interface Country {
  code: string;
  name: string;
  currency?: string | null;
  capital?: string | null;
  native?: string;
  phone?: string;
  continent: Continent;
  languages: Language[];
  emoji: string;
  emojiU?: string;
}
