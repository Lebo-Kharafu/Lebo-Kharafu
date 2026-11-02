import { useCssVar } from '@vueuse/core';
import { CAREER_START_DATE } from '../constants/theme';

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getDayOfYear(date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff =
    date.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export function calculateExperience(
  startDate: Date | number = CAREER_START_DATE,
  now = new Date()
): number {
  const startTime = typeof startDate === 'number' ? startDate : startDate.getTime();
  const diffDays = (now.getTime() - startTime) / (1000 * 60 * 60 * 24);
  return Number(Math.max(0, diffDays / 365).toFixed(1));
}

export function initThemeTokens(): void {
  const now = new Date();
  const day = getDayOfYear(now);
  const yearLength = isLeapYear(now.getFullYear()) ? 366 : 365;

  const dayOfYearVar = useCssVar('--day-of-year');
  const yearLengthVar = useCssVar('--year-length');

  dayOfYearVar.value = String(day);
  yearLengthVar.value = String(yearLength);
}
