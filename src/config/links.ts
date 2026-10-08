/**
 * External links, configurable per environment (Netlify → Environment variables).
 * Fallbacks keep the buttons working if the variables are not set.
 */
const trimSlash = (url: string) => url.replace(/\/+$/, '');

export const APP_URL = trimSlash(
  import.meta.env.VITE_APP_URL || 'https://cohortlive-portal.netlify.app',
);

export const APK_URL =
  import.meta.env.VITE_APK_URL ||
  'https://github.com/AsmitaV9/cohort-live-student-app/releases/latest';

export const LINKS = {
  mockTest: `${APP_URL}/student`,
  login: `${APP_URL}/login`,
  trainerLogin: `${APP_URL}/trainer`,
  downloadApp: APK_URL,
};
