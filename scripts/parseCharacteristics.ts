import { TranslatedKeysStandart } from "./keys/STANDART_T_KEYS";

/**
 * Функция для парсинга ключа с строкой в мн-во ключей со значениями
 * @param characteristics
 * @enum TranslatedKeysElectro заменить на нужный enum при надобности
 * @returns
 */
function parseCharacteristics(characteristics: string) {
  const keyValuePairs: Record<string, string> = {};
  const regex = /\s*([^:]+):\s*([^\n\r]+)/g;
  let match: string[] | null;

  while ((match = regex.exec(characteristics)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();
    const translatedKey =
      TranslatedKeysStandart[key as keyof typeof TranslatedKeysStandart] || key;
    keyValuePairs[translatedKey] = value;
  }

  return keyValuePairs;
}

/**
 * Example how used
const newArray = SELECTED_ARRAY.map(({ characteristics, ...obj }) => {
  return {
    ...obj,
    characteristics: parseCharacteristics(characteristics),
  };
});
 */
