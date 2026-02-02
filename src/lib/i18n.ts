export const languages = ["pt", "en"] as const;

export type Language = (typeof languages)[number];

export const languageLabels: Record<Language, string> = {
  pt: "Português",
  en: "English",
};

export const languageToLocale: Record<Language, string> = {
  pt: "pt-BR",
  en: "en",
};

export const defaultLanguage: Language = "pt";

export const isValidLanguage = (value: string): value is Language =>
  languages.includes(value as Language);
