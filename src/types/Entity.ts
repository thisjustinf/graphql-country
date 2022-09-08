import Country from './Country';
import Continent from './Continent'
import Language from './Language'

export type Entity = Continent | Country | Language ;

export enum EntityEnum {
    CONTINENT = "Continent",
    COUNTRY = "Country",
    LANGUAGE = "Language",
  }