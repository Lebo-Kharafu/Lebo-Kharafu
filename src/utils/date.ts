import { CAREER_START_DATE } from '../constants/theme';

/**
 * Checks whether a given year is a leap year.
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Calculates the day of the year (1-366) for a given date.
 */
export function getDayOfYear(date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff =
    date.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Calculates years of professional experience with 1 decimal precision from career start date.
 */
export function calculateExperience(
  startDate: Date | number = CAREER_START_DATE,
  now = new Date()
): number {
  const startTime = typeof startDate === 'number' ? startDate : startDate.getTime();
  const diffDays = (now.getTime() - startTime) / (1000 * 60 * 60 * 24);
  return Number(Math.max(0, diffDays / 365).toFixed(1));
}

/**
 * Initializes the annual dynamic theme CSS variables on the root element.
 */
export function initThemeTokens(): void {
  if (typeof document === 'undefined') return;

  const now = new Date();
  const day = getDayOfYear(now);
  const yearLength = isLeapYear(now.getFullYear()) ? 366 : 365;

  document.documentElement.style.setProperty('--ds-day-of-year', String(day));
  document.documentElement.style.setProperty('--ds-year-length', String(yearLength));
}
