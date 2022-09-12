import { GET_COUNTRIES_QUERY } from "../../graphql/country";
import { MockedResponse } from "@apollo/client/testing";

const mocks: readonly MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: GET_COUNTRIES_QUERY
    },
    result: {
      data: {
        countries: [
          {
            code: "AD",
            capital: "Andorra la Vella",
            currency: "EUR",
            name: "Andorra",
            emoji: "🇦🇩",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "ca",
                name: "Catalan",
                native: "Català"
              }
            ]
          },
          {
            code: "AE",
            capital: "Abu Dhabi",
            currency: "AED",
            name: "United Arab Emirates",
            emoji: "🇦🇪",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "AF",
            capital: "Kabul",
            currency: "AFN",
            name: "Afghanistan",
            emoji: "🇦🇫",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ps",
                name: "Pashto",
                native: "پښتو"
              },
              {
                code: "uz",
                name: "Uzbek",
                native: "Ўзбек"
              },
              {
                code: "tk",
                name: "Turkmen",
                native: "Туркмен / تركمن"
              }
            ]
          },
          {
            code: "AG",
            capital: "Saint John's",
            currency: "XCD",
            name: "Antigua and Barbuda",
            emoji: "🇦🇬",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "AI",
            capital: "The Valley",
            currency: "XCD",
            name: "Anguilla",
            emoji: "🇦🇮",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "AL",
            capital: "Tirana",
            currency: "ALL",
            name: "Albania",
            emoji: "🇦🇱",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "sq",
                name: "Albanian",
                native: "Shqip"
              }
            ]
          },
          {
            code: "AM",
            capital: "Yerevan",
            currency: "AMD",
            name: "Armenia",
            emoji: "🇦🇲",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "hy",
                name: "Armenian",
                native: "Հայերեն"
              },
              {
                code: "ru",
                name: "Russian",
                native: "Русский"
              }
            ]
          },
          {
            code: "AO",
            capital: "Luanda",
            currency: "AOA",
            name: "Angola",
            emoji: "🇦🇴",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "pt",
                name: "Portuguese",
                native: "Português"
              }
            ]
          },
          {
            code: "AQ",
            capital: null,
            currency: null,
            name: "Antarctica",
            emoji: "🇦🇶",
            continent: {
              name: "Antarctica"
            },
            languages: []
          },
          {
            code: "AR",
            capital: "Buenos Aires",
            currency: "ARS",
            name: "Argentina",
            emoji: "🇦🇷",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              },
              {
                code: "gn",
                name: "Guarani",
                native: "Avañe'ẽ"
              }
            ]
          },
          {
            code: "AS",
            capital: "Pago Pago",
            currency: "USD",
            name: "American Samoa",
            emoji: "🇦🇸",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "sm",
                name: "Samoan",
                native: "Gagana Samoa"
              }
            ]
          },
          {
            code: "AT",
            capital: "Vienna",
            currency: "EUR",
            name: "Austria",
            emoji: "🇦🇹",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "de",
                name: "German",
                native: "Deutsch"
              }
            ]
          },
          {
            code: "AU",
            capital: "Canberra",
            currency: "AUD",
            name: "Australia",
            emoji: "🇦🇺",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "AW",
            capital: "Oranjestad",
            currency: "AWG",
            name: "Aruba",
            emoji: "🇦🇼",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "nl",
                name: "Dutch",
                native: "Nederlands"
              },
              {
                code: "pa",
                name: "Panjabi / Punjabi",
                native: "ਪੰਜਾਬੀ / पंजाबी / پنجابي"
              }
            ]
          },
          {
            code: "AX",
            capital: "Mariehamn",
            currency: "EUR",
            name: "Åland",
            emoji: "🇦🇽",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "sv",
                name: "Swedish",
                native: "Svenska"
              }
            ]
          },
          {
            code: "AZ",
            capital: "Baku",
            currency: "AZN",
            name: "Azerbaijan",
            emoji: "🇦🇿",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "az",
                name: "Azerbaijani",
                native: "Azərbaycanca / آذربايجان"
              }
            ]
          },
          {
            code: "BA",
            capital: "Sarajevo",
            currency: "BAM",
            name: "Bosnia and Herzegovina",
            emoji: "🇧🇦",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "bs",
                name: "Bosnian",
                native: "Bosanski"
              },
              {
                code: "hr",
                name: "Croatian",
                native: "Hrvatski"
              },
              {
                code: "sr",
                name: "Serbian",
                native: "Српски"
              }
            ]
          },
          {
            code: "BB",
            capital: "Bridgetown",
            currency: "BBD",
            name: "Barbados",
            emoji: "🇧🇧",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "BD",
            capital: "Dhaka",
            currency: "BDT",
            name: "Bangladesh",
            emoji: "🇧🇩",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "bn",
                name: "Bengali",
                native: "বাংলা"
              }
            ]
          },
          {
            code: "BE",
            capital: "Brussels",
            currency: "EUR",
            name: "Belgium",
            emoji: "🇧🇪",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "nl",
                name: "Dutch",
                native: "Nederlands"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "de",
                name: "German",
                native: "Deutsch"
              }
            ]
          },
          {
            code: "BF",
            capital: "Ouagadougou",
            currency: "XOF",
            name: "Burkina Faso",
            emoji: "🇧🇫",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "ff",
                name: "Peul",
                native: "Fulfulde"
              }
            ]
          },
          {
            code: "BG",
            capital: "Sofia",
            currency: "BGN",
            name: "Bulgaria",
            emoji: "🇧🇬",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "bg",
                name: "Bulgarian",
                native: "Български"
              }
            ]
          },
          {
            code: "BH",
            capital: "Manama",
            currency: "BHD",
            name: "Bahrain",
            emoji: "🇧🇭",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "BI",
            capital: "Bujumbura",
            currency: "BIF",
            name: "Burundi",
            emoji: "🇧🇮",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "rn",
                name: "Kirundi",
                native: "Kirundi"
              }
            ]
          },
          {
            code: "BJ",
            capital: "Porto-Novo",
            currency: "XOF",
            name: "Benin",
            emoji: "🇧🇯",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "BL",
            capital: "Gustavia",
            currency: "EUR",
            name: "Saint Barthélemy",
            emoji: "🇧🇱",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "BM",
            capital: "Hamilton",
            currency: "BMD",
            name: "Bermuda",
            emoji: "🇧🇲",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "BN",
            capital: "Bandar Seri Begawan",
            currency: "BND",
            name: "Brunei",
            emoji: "🇧🇳",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ms",
                name: "Malay",
                native: "Bahasa Melayu"
              }
            ]
          },
          {
            code: "BO",
            capital: "Sucre",
            currency: "BOB,BOV",
            name: "Bolivia",
            emoji: "🇧🇴",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              },
              {
                code: "ay",
                name: "Aymara",
                native: "Aymar"
              },
              {
                code: "qu",
                name: "Quechua",
                native: "Runa Simi"
              }
            ]
          },
          {
            code: "BQ",
            capital: "Kralendijk",
            currency: "USD",
            name: "Bonaire",
            emoji: "🇧🇶",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "nl",
                name: "Dutch",
                native: "Nederlands"
              }
            ]
          },
          {
            code: "BR",
            capital: "Brasília",
            currency: "BRL",
            name: "Brazil",
            emoji: "🇧🇷",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "pt",
                name: "Portuguese",
                native: "Português"
              }
            ]
          },
          {
            code: "BS",
            capital: "Nassau",
            currency: "BSD",
            name: "Bahamas",
            emoji: "🇧🇸",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "BT",
            capital: "Thimphu",
            currency: "BTN,INR",
            name: "Bhutan",
            emoji: "🇧🇹",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "dz",
                name: "Dzongkha",
                native: "ཇོང་ཁ"
              }
            ]
          },
          {
            code: "BV",
            capital: null,
            currency: "NOK",
            name: "Bouvet Island",
            emoji: "🇧🇻",
            continent: {
              name: "Antarctica"
            },
            languages: [
              {
                code: "no",
                name: "Norwegian",
                native: "Norsk"
              },
              {
                code: "nb",
                name: "Norwegian Bokmål",
                native: "Norsk bokmål"
              },
              {
                code: "nn",
                name: "Norwegian Nynorsk",
                native: "Norsk nynorsk"
              }
            ]
          },
          {
            code: "BW",
            capital: "Gaborone",
            currency: "BWP",
            name: "Botswana",
            emoji: "🇧🇼",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "tn",
                name: "Tswana",
                native: "Setswana"
              }
            ]
          },
          {
            code: "BY",
            capital: "Minsk",
            currency: "BYN",
            name: "Belarus",
            emoji: "🇧🇾",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "be",
                name: "Belarusian",
                native: "Беларуская"
              },
              {
                code: "ru",
                name: "Russian",
                native: "Русский"
              }
            ]
          },
          {
            code: "BZ",
            capital: "Belmopan",
            currency: "BZD",
            name: "Belize",
            emoji: "🇧🇿",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "CA",
            capital: "Ottawa",
            currency: "CAD",
            name: "Canada",
            emoji: "🇨🇦",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "CC",
            capital: "West Island",
            currency: "AUD",
            name: "Cocos [Keeling] Islands",
            emoji: "🇨🇨",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "CD",
            capital: "Kinshasa",
            currency: "CDF",
            name: "Democratic Republic of the Congo",
            emoji: "🇨🇩",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "ln",
                name: "Lingala",
                native: "Lingála"
              },
              {
                code: "kg",
                name: "Kongo",
                native: "KiKongo"
              },
              {
                code: "sw",
                name: "Swahili",
                native: "Kiswahili"
              },
              {
                code: "lu",
                name: "Luba-Katanga",
                native: "Tshiluba"
              }
            ]
          },
          {
            code: "CF",
            capital: "Bangui",
            currency: "XAF",
            name: "Central African Republic",
            emoji: "🇨🇫",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "sg",
                name: "Sango",
                native: "Sängö"
              }
            ]
          },
          {
            code: "CG",
            capital: "Brazzaville",
            currency: "XAF",
            name: "Republic of the Congo",
            emoji: "🇨🇬",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "ln",
                name: "Lingala",
                native: "Lingála"
              }
            ]
          },
          {
            code: "CH",
            capital: "Bern",
            currency: "CHE,CHF,CHW",
            name: "Switzerland",
            emoji: "🇨🇭",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "de",
                name: "German",
                native: "Deutsch"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "it",
                name: "Italian",
                native: "Italiano"
              }
            ]
          },
          {
            code: "CI",
            capital: "Yamoussoukro",
            currency: "XOF",
            name: "Ivory Coast",
            emoji: "🇨🇮",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "CK",
            capital: "Avarua",
            currency: "NZD",
            name: "Cook Islands",
            emoji: "🇨🇰",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "CL",
            capital: "Santiago",
            currency: "CLF,CLP",
            name: "Chile",
            emoji: "🇨🇱",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "CM",
            capital: "Yaoundé",
            currency: "XAF",
            name: "Cameroon",
            emoji: "🇨🇲",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "CN",
            capital: "Beijing",
            currency: "CNY",
            name: "China",
            emoji: "🇨🇳",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "zh",
                name: "Chinese",
                native: "中文"
              }
            ]
          },
          {
            code: "CO",
            capital: "Bogotá",
            currency: "COP",
            name: "Colombia",
            emoji: "🇨🇴",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "CR",
            capital: "San José",
            currency: "CRC",
            name: "Costa Rica",
            emoji: "🇨🇷",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "CU",
            capital: "Havana",
            currency: "CUC,CUP",
            name: "Cuba",
            emoji: "🇨🇺",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "CV",
            capital: "Praia",
            currency: "CVE",
            name: "Cape Verde",
            emoji: "🇨🇻",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "pt",
                name: "Portuguese",
                native: "Português"
              }
            ]
          },
          {
            code: "CW",
            capital: "Willemstad",
            currency: "ANG",
            name: "Curacao",
            emoji: "🇨🇼",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "nl",
                name: "Dutch",
                native: "Nederlands"
              },
              {
                code: "pa",
                name: "Panjabi / Punjabi",
                native: "ਪੰਜਾਬੀ / पंजाबी / پنجابي"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "CX",
            capital: "Flying Fish Cove",
            currency: "AUD",
            name: "Christmas Island",
            emoji: "🇨🇽",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "CY",
            capital: "Nicosia",
            currency: "EUR",
            name: "Cyprus",
            emoji: "🇨🇾",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "el",
                name: "Greek",
                native: "Ελληνικά"
              },
              {
                code: "tr",
                name: "Turkish",
                native: "Türkçe"
              },
              {
                code: "hy",
                name: "Armenian",
                native: "Հայերեն"
              }
            ]
          },
          {
            code: "CZ",
            capital: "Prague",
            currency: "CZK",
            name: "Czech Republic",
            emoji: "🇨🇿",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "cs",
                name: "Czech",
                native: "Česky"
              },
              {
                code: "sk",
                name: "Slovak",
                native: "Slovenčina"
              }
            ]
          },
          {
            code: "DE",
            capital: "Berlin",
            currency: "EUR",
            name: "Germany",
            emoji: "🇩🇪",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "de",
                name: "German",
                native: "Deutsch"
              }
            ]
          },
          {
            code: "DJ",
            capital: "Djibouti",
            currency: "DJF",
            name: "Djibouti",
            emoji: "🇩🇯",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "DK",
            capital: "Copenhagen",
            currency: "DKK",
            name: "Denmark",
            emoji: "🇩🇰",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "da",
                name: "Danish",
                native: "Dansk"
              }
            ]
          },
          {
            code: "DM",
            capital: "Roseau",
            currency: "XCD",
            name: "Dominica",
            emoji: "🇩🇲",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "DO",
            capital: "Santo Domingo",
            currency: "DOP",
            name: "Dominican Republic",
            emoji: "🇩🇴",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "DZ",
            capital: "Algiers",
            currency: "DZD",
            name: "Algeria",
            emoji: "🇩🇿",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "EC",
            capital: "Quito",
            currency: "USD",
            name: "Ecuador",
            emoji: "🇪🇨",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "EE",
            capital: "Tallinn",
            currency: "EUR",
            name: "Estonia",
            emoji: "🇪🇪",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "et",
                name: "Estonian",
                native: "Eesti"
              }
            ]
          },
          {
            code: "EG",
            capital: "Cairo",
            currency: "EGP",
            name: "Egypt",
            emoji: "🇪🇬",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "EH",
            capital: "El Aaiún",
            currency: "MAD,DZD,MRU",
            name: "Western Sahara",
            emoji: "🇪🇭",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "ER",
            capital: "Asmara",
            currency: "ERN",
            name: "Eritrea",
            emoji: "🇪🇷",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "ti",
                name: "Tigrinya",
                native: "ትግርኛ"
              },
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "ES",
            capital: "Madrid",
            currency: "EUR",
            name: "Spain",
            emoji: "🇪🇸",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              },
              {
                code: "eu",
                name: "Basque",
                native: "Euskara"
              },
              {
                code: "ca",
                name: "Catalan",
                native: "Català"
              },
              {
                code: "gl",
                name: "Galician",
                native: "Galego"
              },
              {
                code: "oc",
                name: "Occitan",
                native: "Occitan"
              }
            ]
          },
          {
            code: "ET",
            capital: "Addis Ababa",
            currency: "ETB",
            name: "Ethiopia",
            emoji: "🇪🇹",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "am",
                name: "Amharic",
                native: "አማርኛ"
              }
            ]
          },
          {
            code: "FI",
            capital: "Helsinki",
            currency: "EUR",
            name: "Finland",
            emoji: "🇫🇮",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "fi",
                name: "Finnish",
                native: "Suomi"
              },
              {
                code: "sv",
                name: "Swedish",
                native: "Svenska"
              }
            ]
          },
          {
            code: "FJ",
            capital: "Suva",
            currency: "FJD",
            name: "Fiji",
            emoji: "🇫🇯",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "fj",
                name: "Fijian",
                native: "Na Vosa Vakaviti"
              },
              {
                code: "hi",
                name: "Hindi",
                native: "हिन्दी"
              },
              {
                code: "ur",
                name: "Urdu",
                native: "اردو"
              }
            ]
          },
          {
            code: "FK",
            capital: "Stanley",
            currency: "FKP",
            name: "Falkland Islands",
            emoji: "🇫🇰",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "FM",
            capital: "Palikir",
            currency: "USD",
            name: "Micronesia",
            emoji: "🇫🇲",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "FO",
            capital: "Tórshavn",
            currency: "DKK",
            name: "Faroe Islands",
            emoji: "🇫🇴",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "fo",
                name: "Faroese",
                native: "Føroyskt"
              }
            ]
          },
          {
            code: "FR",
            capital: "Paris",
            currency: "EUR",
            name: "France",
            emoji: "🇫🇷",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "GA",
            capital: "Libreville",
            currency: "XAF",
            name: "Gabon",
            emoji: "🇬🇦",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "GB",
            capital: "London",
            currency: "GBP",
            name: "United Kingdom",
            emoji: "🇬🇧",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "GD",
            capital: "St. George's",
            currency: "XCD",
            name: "Grenada",
            emoji: "🇬🇩",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "GE",
            capital: "Tbilisi",
            currency: "GEL",
            name: "Georgia",
            emoji: "🇬🇪",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ka",
                name: "Georgian",
                native: "ქართული"
              }
            ]
          },
          {
            code: "GF",
            capital: "Cayenne",
            currency: "EUR",
            name: "French Guiana",
            emoji: "🇬🇫",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "GG",
            capital: "St. Peter Port",
            currency: "GBP",
            name: "Guernsey",
            emoji: "🇬🇬",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "GH",
            capital: "Accra",
            currency: "GHS",
            name: "Ghana",
            emoji: "🇬🇭",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "GI",
            capital: "Gibraltar",
            currency: "GIP",
            name: "Gibraltar",
            emoji: "🇬🇮",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "GL",
            capital: "Nuuk",
            currency: "DKK",
            name: "Greenland",
            emoji: "🇬🇱",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "kl",
                name: "Greenlandic",
                native: "Kalaallisut"
              }
            ]
          },
          {
            code: "GM",
            capital: "Banjul",
            currency: "GMD",
            name: "Gambia",
            emoji: "🇬🇲",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "GN",
            capital: "Conakry",
            currency: "GNF",
            name: "Guinea",
            emoji: "🇬🇳",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "ff",
                name: "Peul",
                native: "Fulfulde"
              }
            ]
          },
          {
            code: "GP",
            capital: "Basse-Terre",
            currency: "EUR",
            name: "Guadeloupe",
            emoji: "🇬🇵",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "GQ",
            capital: "Malabo",
            currency: "XAF",
            name: "Equatorial Guinea",
            emoji: "🇬🇶",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "GR",
            capital: "Athens",
            currency: "EUR",
            name: "Greece",
            emoji: "🇬🇷",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "el",
                name: "Greek",
                native: "Ελληνικά"
              }
            ]
          },
          {
            code: "GS",
            capital: "King Edward Point",
            currency: "GBP",
            name: "South Georgia and the South Sandwich Islands",
            emoji: "🇬🇸",
            continent: {
              name: "Antarctica"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "GT",
            capital: "Guatemala City",
            currency: "GTQ",
            name: "Guatemala",
            emoji: "🇬🇹",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "GU",
            capital: "Hagåtña",
            currency: "USD",
            name: "Guam",
            emoji: "🇬🇺",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "ch",
                name: "Chamorro",
                native: "Chamoru"
              },
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "GW",
            capital: "Bissau",
            currency: "XOF",
            name: "Guinea-Bissau",
            emoji: "🇬🇼",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "pt",
                name: "Portuguese",
                native: "Português"
              }
            ]
          },
          {
            code: "GY",
            capital: "Georgetown",
            currency: "GYD",
            name: "Guyana",
            emoji: "🇬🇾",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "HK",
            capital: "City of Victoria",
            currency: "HKD",
            name: "Hong Kong",
            emoji: "🇭🇰",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "zh",
                name: "Chinese",
                native: "中文"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "HM",
            capital: null,
            currency: "AUD",
            name: "Heard Island and McDonald Islands",
            emoji: "🇭🇲",
            continent: {
              name: "Antarctica"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "HN",
            capital: "Tegucigalpa",
            currency: "HNL",
            name: "Honduras",
            emoji: "🇭🇳",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "HR",
            capital: "Zagreb",
            currency: "HRK",
            name: "Croatia",
            emoji: "🇭🇷",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "hr",
                name: "Croatian",
                native: "Hrvatski"
              }
            ]
          },
          {
            code: "HT",
            capital: "Port-au-Prince",
            currency: "HTG,USD",
            name: "Haiti",
            emoji: "🇭🇹",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "ht",
                name: "Haitian",
                native: "Krèyol ayisyen"
              }
            ]
          },
          {
            code: "HU",
            capital: "Budapest",
            currency: "HUF",
            name: "Hungary",
            emoji: "🇭🇺",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "hu",
                name: "Hungarian",
                native: "Magyar"
              }
            ]
          },
          {
            code: "ID",
            capital: "Jakarta",
            currency: "IDR",
            name: "Indonesia",
            emoji: "🇮🇩",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "id",
                name: "Indonesian",
                native: "Bahasa Indonesia"
              }
            ]
          },
          {
            code: "IE",
            capital: "Dublin",
            currency: "EUR",
            name: "Ireland",
            emoji: "🇮🇪",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "ga",
                name: "Irish",
                native: "Gaeilge"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "IL",
            capital: "Jerusalem",
            currency: "ILS",
            name: "Israel",
            emoji: "🇮🇱",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "he",
                name: "Hebrew",
                native: "עברית"
              },
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "IM",
            capital: "Douglas",
            currency: "GBP",
            name: "Isle of Man",
            emoji: "🇮🇲",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "gv",
                name: "Manx",
                native: "Gaelg"
              }
            ]
          },
          {
            code: "IN",
            capital: "New Delhi",
            currency: "INR",
            name: "India",
            emoji: "🇮🇳",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "hi",
                name: "Hindi",
                native: "हिन्दी"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "IO",
            capital: "Diego Garcia",
            currency: "USD",
            name: "British Indian Ocean Territory",
            emoji: "🇮🇴",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "IQ",
            capital: "Baghdad",
            currency: "IQD",
            name: "Iraq",
            emoji: "🇮🇶",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              },
              {
                code: "ku",
                name: "Kurdish",
                native: "Kurdî / كوردی"
              }
            ]
          },
          {
            code: "IR",
            capital: "Tehran",
            currency: "IRR",
            name: "Iran",
            emoji: "🇮🇷",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "fa",
                name: "Persian",
                native: "فارسی"
              }
            ]
          },
          {
            code: "IS",
            capital: "Reykjavik",
            currency: "ISK",
            name: "Iceland",
            emoji: "🇮🇸",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "is",
                name: "Icelandic",
                native: "Íslenska"
              }
            ]
          },
          {
            code: "IT",
            capital: "Rome",
            currency: "EUR",
            name: "Italy",
            emoji: "🇮🇹",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "it",
                name: "Italian",
                native: "Italiano"
              }
            ]
          },
          {
            code: "JE",
            capital: "Saint Helier",
            currency: "GBP",
            name: "Jersey",
            emoji: "🇯🇪",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "JM",
            capital: "Kingston",
            currency: "JMD",
            name: "Jamaica",
            emoji: "🇯🇲",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "JO",
            capital: "Amman",
            currency: "JOD",
            name: "Jordan",
            emoji: "🇯🇴",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "JP",
            capital: "Tokyo",
            currency: "JPY",
            name: "Japan",
            emoji: "🇯🇵",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ja",
                name: "Japanese",
                native: "日本語"
              }
            ]
          },
          {
            code: "KE",
            capital: "Nairobi",
            currency: "KES",
            name: "Kenya",
            emoji: "🇰🇪",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "sw",
                name: "Swahili",
                native: "Kiswahili"
              }
            ]
          },
          {
            code: "KG",
            capital: "Bishkek",
            currency: "KGS",
            name: "Kyrgyzstan",
            emoji: "🇰🇬",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ky",
                name: "Kirghiz",
                native: "Kırgızca / Кыргызча"
              },
              {
                code: "ru",
                name: "Russian",
                native: "Русский"
              }
            ]
          },
          {
            code: "KH",
            capital: "Phnom Penh",
            currency: "KHR",
            name: "Cambodia",
            emoji: "🇰🇭",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "km",
                name: "Cambodian",
                native: "ភាសាខ្មែរ"
              }
            ]
          },
          {
            code: "KI",
            capital: "South Tarawa",
            currency: "AUD",
            name: "Kiribati",
            emoji: "🇰🇮",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "KM",
            capital: "Moroni",
            currency: "KMF",
            name: "Comoros",
            emoji: "🇰🇲",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "KN",
            capital: "Basseterre",
            currency: "XCD",
            name: "Saint Kitts and Nevis",
            emoji: "🇰🇳",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "KP",
            capital: "Pyongyang",
            currency: "KPW",
            name: "North Korea",
            emoji: "🇰🇵",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ko",
                name: "Korean",
                native: "한국어"
              }
            ]
          },
          {
            code: "KR",
            capital: "Seoul",
            currency: "KRW",
            name: "South Korea",
            emoji: "🇰🇷",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ko",
                name: "Korean",
                native: "한국어"
              }
            ]
          },
          {
            code: "KW",
            capital: "Kuwait City",
            currency: "KWD",
            name: "Kuwait",
            emoji: "🇰🇼",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "KY",
            capital: "George Town",
            currency: "KYD",
            name: "Cayman Islands",
            emoji: "🇰🇾",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "KZ",
            capital: "Astana",
            currency: "KZT",
            name: "Kazakhstan",
            emoji: "🇰🇿",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "kk",
                name: "Kazakh",
                native: "Қазақша"
              },
              {
                code: "ru",
                name: "Russian",
                native: "Русский"
              }
            ]
          },
          {
            code: "LA",
            capital: "Vientiane",
            currency: "LAK",
            name: "Laos",
            emoji: "🇱🇦",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "lo",
                name: "Laotian",
                native: "ລາວ / Pha xa lao"
              }
            ]
          },
          {
            code: "LB",
            capital: "Beirut",
            currency: "LBP",
            name: "Lebanon",
            emoji: "🇱🇧",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "LC",
            capital: "Castries",
            currency: "XCD",
            name: "Saint Lucia",
            emoji: "🇱🇨",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "LI",
            capital: "Vaduz",
            currency: "CHF",
            name: "Liechtenstein",
            emoji: "🇱🇮",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "de",
                name: "German",
                native: "Deutsch"
              }
            ]
          },
          {
            code: "LK",
            capital: "Colombo",
            currency: "LKR",
            name: "Sri Lanka",
            emoji: "🇱🇰",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "si",
                name: "Sinhalese",
                native: "සිංහල"
              },
              {
                code: "ta",
                name: "Tamil",
                native: "தமிழ்"
              }
            ]
          },
          {
            code: "LR",
            capital: "Monrovia",
            currency: "LRD",
            name: "Liberia",
            emoji: "🇱🇷",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "LS",
            capital: "Maseru",
            currency: "LSL,ZAR",
            name: "Lesotho",
            emoji: "🇱🇸",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "st",
                name: "Southern Sotho",
                native: "Sesotho"
              }
            ]
          },
          {
            code: "LT",
            capital: "Vilnius",
            currency: "EUR",
            name: "Lithuania",
            emoji: "🇱🇹",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "lt",
                name: "Lithuanian",
                native: "Lietuvių"
              }
            ]
          },
          {
            code: "LU",
            capital: "Luxembourg",
            currency: "EUR",
            name: "Luxembourg",
            emoji: "🇱🇺",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "de",
                name: "German",
                native: "Deutsch"
              },
              {
                code: "lb",
                name: "Luxembourgish",
                native: "Lëtzebuergesch"
              }
            ]
          },
          {
            code: "LV",
            capital: "Riga",
            currency: "EUR",
            name: "Latvia",
            emoji: "🇱🇻",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "lv",
                name: "Latvian",
                native: "Latviešu"
              }
            ]
          },
          {
            code: "LY",
            capital: "Tripoli",
            currency: "LYD",
            name: "Libya",
            emoji: "🇱🇾",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "MA",
            capital: "Rabat",
            currency: "MAD",
            name: "Morocco",
            emoji: "🇲🇦",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "MC",
            capital: "Monaco",
            currency: "EUR",
            name: "Monaco",
            emoji: "🇲🇨",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "MD",
            capital: "Chișinău",
            currency: "MDL",
            name: "Moldova",
            emoji: "🇲🇩",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "ro",
                name: "Romanian",
                native: "Română"
              }
            ]
          },
          {
            code: "ME",
            capital: "Podgorica",
            currency: "EUR",
            name: "Montenegro",
            emoji: "🇲🇪",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "sr",
                name: "Serbian",
                native: "Српски"
              },
              {
                code: "bs",
                name: "Bosnian",
                native: "Bosanski"
              },
              {
                code: "sq",
                name: "Albanian",
                native: "Shqip"
              },
              {
                code: "hr",
                name: "Croatian",
                native: "Hrvatski"
              }
            ]
          },
          {
            code: "MF",
            capital: "Marigot",
            currency: "EUR",
            name: "Saint Martin",
            emoji: "🇲🇫",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "nl",
                name: "Dutch",
                native: "Nederlands"
              }
            ]
          },
          {
            code: "MG",
            capital: "Antananarivo",
            currency: "MGA",
            name: "Madagascar",
            emoji: "🇲🇬",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "mg",
                name: "Malagasy",
                native: "Malagasy"
              }
            ]
          },
          {
            code: "MH",
            capital: "Majuro",
            currency: "USD",
            name: "Marshall Islands",
            emoji: "🇲🇭",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "mh",
                name: "Marshallese",
                native: "Kajin Majel / Ebon"
              }
            ]
          },
          {
            code: "MK",
            capital: "Skopje",
            currency: "MKD",
            name: "North Macedonia",
            emoji: "🇲🇰",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "mk",
                name: "Macedonian",
                native: "Македонски"
              }
            ]
          },
          {
            code: "ML",
            capital: "Bamako",
            currency: "XOF",
            name: "Mali",
            emoji: "🇲🇱",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "MM",
            capital: "Naypyidaw",
            currency: "MMK",
            name: "Myanmar [Burma]",
            emoji: "🇲🇲",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "my",
                name: "Burmese",
                native: "မြန်မာစာ"
              }
            ]
          },
          {
            code: "MN",
            capital: "Ulan Bator",
            currency: "MNT",
            name: "Mongolia",
            emoji: "🇲🇳",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "mn",
                name: "Mongolian",
                native: "Монгол"
              }
            ]
          },
          {
            code: "MO",
            capital: null,
            currency: "MOP",
            name: "Macao",
            emoji: "🇲🇴",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "zh",
                name: "Chinese",
                native: "中文"
              },
              {
                code: "pt",
                name: "Portuguese",
                native: "Português"
              }
            ]
          },
          {
            code: "MP",
            capital: "Saipan",
            currency: "USD",
            name: "Northern Mariana Islands",
            emoji: "🇲🇵",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "ch",
                name: "Chamorro",
                native: "Chamoru"
              }
            ]
          },
          {
            code: "MQ",
            capital: "Fort-de-France",
            currency: "EUR",
            name: "Martinique",
            emoji: "🇲🇶",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "MR",
            capital: "Nouakchott",
            currency: "MRU",
            name: "Mauritania",
            emoji: "🇲🇷",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "MS",
            capital: "Plymouth",
            currency: "XCD",
            name: "Montserrat",
            emoji: "🇲🇸",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "MT",
            capital: "Valletta",
            currency: "EUR",
            name: "Malta",
            emoji: "🇲🇹",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "mt",
                name: "Maltese",
                native: "bil-Malti"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "MU",
            capital: "Port Louis",
            currency: "MUR",
            name: "Mauritius",
            emoji: "🇲🇺",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "MV",
            capital: "Malé",
            currency: "MVR",
            name: "Maldives",
            emoji: "🇲🇻",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "dv",
                name: "Divehi",
                native: "ދިވެހިބަސް"
              }
            ]
          },
          {
            code: "MW",
            capital: "Lilongwe",
            currency: "MWK",
            name: "Malawi",
            emoji: "🇲🇼",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "ny",
                name: "Chichewa",
                native: "Chi-Chewa"
              }
            ]
          },
          {
            code: "MX",
            capital: "Mexico City",
            currency: "MXN",
            name: "Mexico",
            emoji: "🇲🇽",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "MY",
            capital: "Kuala Lumpur",
            currency: "MYR",
            name: "Malaysia",
            emoji: "🇲🇾",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ms",
                name: "Malay",
                native: "Bahasa Melayu"
              }
            ]
          },
          {
            code: "MZ",
            capital: "Maputo",
            currency: "MZN",
            name: "Mozambique",
            emoji: "🇲🇿",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "pt",
                name: "Portuguese",
                native: "Português"
              }
            ]
          },
          {
            code: "NA",
            capital: "Windhoek",
            currency: "NAD,ZAR",
            name: "Namibia",
            emoji: "🇳🇦",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "af",
                name: "Afrikaans",
                native: "Afrikaans"
              }
            ]
          },
          {
            code: "NC",
            capital: "Nouméa",
            currency: "XPF",
            name: "New Caledonia",
            emoji: "🇳🇨",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "NE",
            capital: "Niamey",
            currency: "XOF",
            name: "Niger",
            emoji: "🇳🇪",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "NF",
            capital: "Kingston",
            currency: "AUD",
            name: "Norfolk Island",
            emoji: "🇳🇫",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "NG",
            capital: "Abuja",
            currency: "NGN",
            name: "Nigeria",
            emoji: "🇳🇬",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "NI",
            capital: "Managua",
            currency: "NIO",
            name: "Nicaragua",
            emoji: "🇳🇮",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "NL",
            capital: "Amsterdam",
            currency: "EUR",
            name: "Netherlands",
            emoji: "🇳🇱",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "nl",
                name: "Dutch",
                native: "Nederlands"
              }
            ]
          },
          {
            code: "NO",
            capital: "Oslo",
            currency: "NOK",
            name: "Norway",
            emoji: "🇳🇴",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "no",
                name: "Norwegian",
                native: "Norsk"
              },
              {
                code: "nb",
                name: "Norwegian Bokmål",
                native: "Norsk bokmål"
              },
              {
                code: "nn",
                name: "Norwegian Nynorsk",
                native: "Norsk nynorsk"
              }
            ]
          },
          {
            code: "NP",
            capital: "Kathmandu",
            currency: "NPR",
            name: "Nepal",
            emoji: "🇳🇵",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ne",
                name: "Nepali",
                native: "नेपाली"
              }
            ]
          },
          {
            code: "NR",
            capital: "Yaren",
            currency: "AUD",
            name: "Nauru",
            emoji: "🇳🇷",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "na",
                name: "Nauruan",
                native: "Dorerin Naoero"
              }
            ]
          },
          {
            code: "NU",
            capital: "Alofi",
            currency: "NZD",
            name: "Niue",
            emoji: "🇳🇺",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "NZ",
            capital: "Wellington",
            currency: "NZD",
            name: "New Zealand",
            emoji: "🇳🇿",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "mi",
                name: "Maori",
                native: "Māori"
              }
            ]
          },
          {
            code: "OM",
            capital: "Muscat",
            currency: "OMR",
            name: "Oman",
            emoji: "🇴🇲",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "PA",
            capital: "Panama City",
            currency: "PAB,USD",
            name: "Panama",
            emoji: "🇵🇦",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "PE",
            capital: "Lima",
            currency: "PEN",
            name: "Peru",
            emoji: "🇵🇪",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "PF",
            capital: "Papeetē",
            currency: "XPF",
            name: "French Polynesia",
            emoji: "🇵🇫",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "PG",
            capital: "Port Moresby",
            currency: "PGK",
            name: "Papua New Guinea",
            emoji: "🇵🇬",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "PH",
            capital: "Manila",
            currency: "PHP",
            name: "Philippines",
            emoji: "🇵🇭",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "PK",
            capital: "Islamabad",
            currency: "PKR",
            name: "Pakistan",
            emoji: "🇵🇰",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "ur",
                name: "Urdu",
                native: "اردو"
              }
            ]
          },
          {
            code: "PL",
            capital: "Warsaw",
            currency: "PLN",
            name: "Poland",
            emoji: "🇵🇱",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "pl",
                name: "Polish",
                native: "Polski"
              }
            ]
          },
          {
            code: "PM",
            capital: "Saint-Pierre",
            currency: "EUR",
            name: "Saint Pierre and Miquelon",
            emoji: "🇵🇲",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "PN",
            capital: "Adamstown",
            currency: "NZD",
            name: "Pitcairn Islands",
            emoji: "🇵🇳",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "PR",
            capital: "San Juan",
            currency: "USD",
            name: "Puerto Rico",
            emoji: "🇵🇷",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "PS",
            capital: "Ramallah",
            currency: "ILS",
            name: "Palestine",
            emoji: "🇵🇸",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "PT",
            capital: "Lisbon",
            currency: "EUR",
            name: "Portugal",
            emoji: "🇵🇹",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "pt",
                name: "Portuguese",
                native: "Português"
              }
            ]
          },
          {
            code: "PW",
            capital: "Ngerulmud",
            currency: "USD",
            name: "Palau",
            emoji: "🇵🇼",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "PY",
            capital: "Asunción",
            currency: "PYG",
            name: "Paraguay",
            emoji: "🇵🇾",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              },
              {
                code: "gn",
                name: "Guarani",
                native: "Avañe'ẽ"
              }
            ]
          },
          {
            code: "QA",
            capital: "Doha",
            currency: "QAR",
            name: "Qatar",
            emoji: "🇶🇦",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "RE",
            capital: "Saint-Denis",
            currency: "EUR",
            name: "Réunion",
            emoji: "🇷🇪",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "RO",
            capital: "Bucharest",
            currency: "RON",
            name: "Romania",
            emoji: "🇷🇴",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "ro",
                name: "Romanian",
                native: "Română"
              }
            ]
          },
          {
            code: "RS",
            capital: "Belgrade",
            currency: "RSD",
            name: "Serbia",
            emoji: "🇷🇸",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "sr",
                name: "Serbian",
                native: "Српски"
              }
            ]
          },
          {
            code: "RU",
            capital: "Moscow",
            currency: "RUB",
            name: "Russia",
            emoji: "🇷🇺",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "ru",
                name: "Russian",
                native: "Русский"
              }
            ]
          },
          {
            code: "RW",
            capital: "Kigali",
            currency: "RWF",
            name: "Rwanda",
            emoji: "🇷🇼",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "rw",
                name: "Rwandi",
                native: "Kinyarwandi"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "SA",
            capital: "Riyadh",
            currency: "SAR",
            name: "Saudi Arabia",
            emoji: "🇸🇦",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "SB",
            capital: "Honiara",
            currency: "SBD",
            name: "Solomon Islands",
            emoji: "🇸🇧",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "SC",
            capital: "Victoria",
            currency: "SCR",
            name: "Seychelles",
            emoji: "🇸🇨",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "SD",
            capital: "Khartoum",
            currency: "SDG",
            name: "Sudan",
            emoji: "🇸🇩",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "SE",
            capital: "Stockholm",
            currency: "SEK",
            name: "Sweden",
            emoji: "🇸🇪",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "sv",
                name: "Swedish",
                native: "Svenska"
              }
            ]
          },
          {
            code: "SG",
            capital: "Singapore",
            currency: "SGD",
            name: "Singapore",
            emoji: "🇸🇬",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "ms",
                name: "Malay",
                native: "Bahasa Melayu"
              },
              {
                code: "ta",
                name: "Tamil",
                native: "தமிழ்"
              },
              {
                code: "zh",
                name: "Chinese",
                native: "中文"
              }
            ]
          },
          {
            code: "SH",
            capital: "Jamestown",
            currency: "SHP",
            name: "Saint Helena",
            emoji: "🇸🇭",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "SI",
            capital: "Ljubljana",
            currency: "EUR",
            name: "Slovenia",
            emoji: "🇸🇮",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "sl",
                name: "Slovenian",
                native: "Slovenščina"
              }
            ]
          },
          {
            code: "SJ",
            capital: "Longyearbyen",
            currency: "NOK",
            name: "Svalbard and Jan Mayen",
            emoji: "🇸🇯",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "no",
                name: "Norwegian",
                native: "Norsk"
              }
            ]
          },
          {
            code: "SK",
            capital: "Bratislava",
            currency: "EUR",
            name: "Slovakia",
            emoji: "🇸🇰",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "sk",
                name: "Slovak",
                native: "Slovenčina"
              }
            ]
          },
          {
            code: "SL",
            capital: "Freetown",
            currency: "SLL",
            name: "Sierra Leone",
            emoji: "🇸🇱",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "SM",
            capital: "City of San Marino",
            currency: "EUR",
            name: "San Marino",
            emoji: "🇸🇲",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "it",
                name: "Italian",
                native: "Italiano"
              }
            ]
          },
          {
            code: "SN",
            capital: "Dakar",
            currency: "XOF",
            name: "Senegal",
            emoji: "🇸🇳",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "SO",
            capital: "Mogadishu",
            currency: "SOS",
            name: "Somalia",
            emoji: "🇸🇴",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "so",
                name: "Somalia",
                native: "Soomaaliga"
              },
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "SR",
            capital: "Paramaribo",
            currency: "SRD",
            name: "Suriname",
            emoji: "🇸🇷",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "nl",
                name: "Dutch",
                native: "Nederlands"
              }
            ]
          },
          {
            code: "SS",
            capital: "Juba",
            currency: "SSP",
            name: "South Sudan",
            emoji: "🇸🇸",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "ST",
            capital: "São Tomé",
            currency: "STN",
            name: "São Tomé and Príncipe",
            emoji: "🇸🇹",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "pt",
                name: "Portuguese",
                native: "Português"
              }
            ]
          },
          {
            code: "SV",
            capital: "San Salvador",
            currency: "SVC,USD",
            name: "El Salvador",
            emoji: "🇸🇻",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "SX",
            capital: "Philipsburg",
            currency: "ANG",
            name: "Sint Maarten",
            emoji: "🇸🇽",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "nl",
                name: "Dutch",
                native: "Nederlands"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "SY",
            capital: "Damascus",
            currency: "SYP",
            name: "Syria",
            emoji: "🇸🇾",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "SZ",
            capital: "Lobamba",
            currency: "SZL",
            name: "Swaziland",
            emoji: "🇸🇿",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "ss",
                name: "Swati",
                native: "SiSwati"
              }
            ]
          },
          {
            code: "TC",
            capital: "Cockburn Town",
            currency: "USD",
            name: "Turks and Caicos Islands",
            emoji: "🇹🇨",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "TD",
            capital: "N'Djamena",
            currency: "XAF",
            name: "Chad",
            emoji: "🇹🇩",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              },
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "TF",
            capital: "Port-aux-Français",
            currency: "EUR",
            name: "French Southern Territories",
            emoji: "🇹🇫",
            continent: {
              name: "Antarctica"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "TG",
            capital: "Lomé",
            currency: "XOF",
            name: "Togo",
            emoji: "🇹🇬",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "TH",
            capital: "Bangkok",
            currency: "THB",
            name: "Thailand",
            emoji: "🇹🇭",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "th",
                name: "Thai",
                native: "ไทย / Phasa Thai"
              }
            ]
          },
          {
            code: "TJ",
            capital: "Dushanbe",
            currency: "TJS",
            name: "Tajikistan",
            emoji: "🇹🇯",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "tg",
                name: "Tajik",
                native: "Тоҷикӣ"
              },
              {
                code: "ru",
                name: "Russian",
                native: "Русский"
              }
            ]
          },
          {
            code: "TK",
            capital: "Fakaofo",
            currency: "NZD",
            name: "Tokelau",
            emoji: "🇹🇰",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "TL",
            capital: "Dili",
            currency: "USD",
            name: "East Timor",
            emoji: "🇹🇱",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "pt",
                name: "Portuguese",
                native: "Português"
              }
            ]
          },
          {
            code: "TM",
            capital: "Ashgabat",
            currency: "TMT",
            name: "Turkmenistan",
            emoji: "🇹🇲",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "tk",
                name: "Turkmen",
                native: "Туркмен / تركمن"
              },
              {
                code: "ru",
                name: "Russian",
                native: "Русский"
              }
            ]
          },
          {
            code: "TN",
            capital: "Tunis",
            currency: "TND",
            name: "Tunisia",
            emoji: "🇹🇳",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "TO",
            capital: "Nuku'alofa",
            currency: "TOP",
            name: "Tonga",
            emoji: "🇹🇴",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "to",
                name: "Tonga",
                native: "Lea Faka-Tonga"
              }
            ]
          },
          {
            code: "TR",
            capital: "Ankara",
            currency: "TRY",
            name: "Turkey",
            emoji: "🇹🇷",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "tr",
                name: "Turkish",
                native: "Türkçe"
              }
            ]
          },
          {
            code: "TT",
            capital: "Port of Spain",
            currency: "TTD",
            name: "Trinidad and Tobago",
            emoji: "🇹🇹",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "TV",
            capital: "Funafuti",
            currency: "AUD",
            name: "Tuvalu",
            emoji: "🇹🇻",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "TW",
            capital: "Taipei",
            currency: "TWD",
            name: "Taiwan",
            emoji: "🇹🇼",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "zh",
                name: "Chinese",
                native: "中文"
              }
            ]
          },
          {
            code: "TZ",
            capital: "Dodoma",
            currency: "TZS",
            name: "Tanzania",
            emoji: "🇹🇿",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "sw",
                name: "Swahili",
                native: "Kiswahili"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "UA",
            capital: "Kyiv",
            currency: "UAH",
            name: "Ukraine",
            emoji: "🇺🇦",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "uk",
                name: "Ukrainian",
                native: "Українська"
              }
            ]
          },
          {
            code: "UG",
            capital: "Kampala",
            currency: "UGX",
            name: "Uganda",
            emoji: "🇺🇬",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "sw",
                name: "Swahili",
                native: "Kiswahili"
              }
            ]
          },
          {
            code: "UM",
            capital: null,
            currency: "USD",
            name: "U.S. Minor Outlying Islands",
            emoji: "🇺🇲",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "US",
            capital: "Washington D.C.",
            currency: "USD,USN,USS",
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
            ]
          },
          {
            code: "UY",
            capital: "Montevideo",
            currency: "UYI,UYU",
            name: "Uruguay",
            emoji: "🇺🇾",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "UZ",
            capital: "Tashkent",
            currency: "UZS",
            name: "Uzbekistan",
            emoji: "🇺🇿",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "uz",
                name: "Uzbek",
                native: "Ўзбек"
              },
              {
                code: "ru",
                name: "Russian",
                native: "Русский"
              }
            ]
          },
          {
            code: "VA",
            capital: "Vatican City",
            currency: "EUR",
            name: "Vatican City",
            emoji: "🇻🇦",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "it",
                name: "Italian",
                native: "Italiano"
              },
              {
                code: "la",
                name: "Latin",
                native: "Latina"
              }
            ]
          },
          {
            code: "VC",
            capital: "Kingstown",
            currency: "XCD",
            name: "Saint Vincent and the Grenadines",
            emoji: "🇻🇨",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "VE",
            capital: "Caracas",
            currency: "VES",
            name: "Venezuela",
            emoji: "🇻🇪",
            continent: {
              name: "South America"
            },
            languages: [
              {
                code: "es",
                name: "Spanish",
                native: "Español"
              }
            ]
          },
          {
            code: "VG",
            capital: "Road Town",
            currency: "USD",
            name: "British Virgin Islands",
            emoji: "🇻🇬",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "VI",
            capital: "Charlotte Amalie",
            currency: "USD",
            name: "U.S. Virgin Islands",
            emoji: "🇻🇮",
            continent: {
              name: "North America"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "VN",
            capital: "Hanoi",
            currency: "VND",
            name: "Vietnam",
            emoji: "🇻🇳",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "vi",
                name: "Vietnamese",
                native: "Tiếng Việt"
              }
            ]
          },
          {
            code: "VU",
            capital: "Port Vila",
            currency: "VUV",
            name: "Vanuatu",
            emoji: "🇻🇺",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "bi",
                name: "Bislama",
                native: "Bislama"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "WF",
            capital: "Mata-Utu",
            currency: "XPF",
            name: "Wallis and Futuna",
            emoji: "🇼🇫",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "WS",
            capital: "Apia",
            currency: "WST",
            name: "Samoa",
            emoji: "🇼🇸",
            continent: {
              name: "Oceania"
            },
            languages: [
              {
                code: "sm",
                name: "Samoan",
                native: "Gagana Samoa"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "XK",
            capital: "Pristina",
            currency: "EUR",
            name: "Kosovo",
            emoji: "🇽🇰",
            continent: {
              name: "Europe"
            },
            languages: [
              {
                code: "sq",
                name: "Albanian",
                native: "Shqip"
              },
              {
                code: "sr",
                name: "Serbian",
                native: "Српски"
              }
            ]
          },
          {
            code: "YE",
            capital: "Sana'a",
            currency: "YER",
            name: "Yemen",
            emoji: "🇾🇪",
            continent: {
              name: "Asia"
            },
            languages: [
              {
                code: "ar",
                name: "Arabic",
                native: "العربية"
              }
            ]
          },
          {
            code: "YT",
            capital: "Mamoudzou",
            currency: "EUR",
            name: "Mayotte",
            emoji: "🇾🇹",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "fr",
                name: "French",
                native: "Français"
              }
            ]
          },
          {
            code: "ZA",
            capital: "Pretoria",
            currency: "ZAR",
            name: "South Africa",
            emoji: "🇿🇦",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "af",
                name: "Afrikaans",
                native: "Afrikaans"
              },
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "nr",
                name: "South Ndebele",
                native: "isiNdebele"
              },
              {
                code: "st",
                name: "Southern Sotho",
                native: "Sesotho"
              },
              {
                code: "ss",
                name: "Swati",
                native: "SiSwati"
              },
              {
                code: "tn",
                name: "Tswana",
                native: "Setswana"
              },
              {
                code: "ts",
                name: "Tsonga",
                native: "Xitsonga"
              },
              {
                code: "ve",
                name: "Venda",
                native: "Tshivenḓa"
              },
              {
                code: "xh",
                name: "Xhosa",
                native: "isiXhosa"
              },
              {
                code: "zu",
                name: "Zulu",
                native: "isiZulu"
              }
            ]
          },
          {
            code: "ZM",
            capital: "Lusaka",
            currency: "ZMW",
            name: "Zambia",
            emoji: "🇿🇲",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              }
            ]
          },
          {
            code: "ZW",
            capital: "Harare",
            currency: "USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY",
            name: "Zimbabwe",
            emoji: "🇿🇼",
            continent: {
              name: "Africa"
            },
            languages: [
              {
                code: "en",
                name: "English",
                native: "English"
              },
              {
                code: "sn",
                name: "Shona",
                native: "chiShona"
              },
              {
                code: "nd",
                name: "North Ndebele",
                native: "Sindebele"
              }
            ]
          }
        ]
      }
    }
  }
];

export default mocks;
