/**
 * Official career start date: Jan 12, 2026.
 */
export const CAREER_START_DATE = new Date(2026, 0, 12);

/**
 * Annual dynamic hue model anchors (from design-system.css):
 * Anchor 1: Oct 15 (day 288) -> 330deg (rose/pink)
 * Anchor 2: Dec 15 (day 349) -> 360deg (red)
 */
export const DYNAMIC_THEME_ANCHORS = {
  ANCHOR_DAY_1: 288,
  ANCHOR_HUE_1: 330,
  ANCHOR_DAY_2: 349,
  ANCHOR_HUE_2: 360,
} as const;

export const THEME_CLASSES = {
  NEW: 'theme-new',
  LEGACY: 'theme-legacy',
} as const;

