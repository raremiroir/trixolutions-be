import { i18n } from "$i18n/i18n-util";
import { loadAllLocales } from "$i18n/i18n-util.sync";
import type { LocaleTranslationFunctions } from "typesafe-i18n";
import type { Locales, Translations, TranslationFunctions } from "$i18n/i18n-types";

loadAllLocales();

export const L: LocaleTranslationFunctions<Locales, Translations, TranslationFunctions> = i18n();

export default L;