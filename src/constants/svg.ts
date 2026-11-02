import type { SvgIconDefinition } from '../types/ui';

/**
 * Exact SVG path string for the custom notched card cutout used by LayoutContainer.
 */
export const NOTCHED_CORNER_PATH =
  'M 0, 0.05 A 0.05, 0.05 0 0 1 0.05, 0 L 0.95, 0 A 0.05, 0.05 0 0 1 1, 0.05 L 1, 0.55 A 0.05, 0.05 0 0 1 0.95, 0.6 L 0.45, 0.6 A 0.05, 0.05 0 0 0 0.4, 0.65 L 0.4, 0.95 A 0.05, 0.05 0 0 1 0.35, 1 L 0.05, 1 A 0.05, 0.05 0 0 1 0, 0.95 Z';

/**
 * Standardized SVG icon definitions for UI controls and navigation across the site.
 */
export const SVG_ICONS = {
  CHEVRON_LEFT: {
    viewBox: '0 0 24 24',
    path: 'M15 18L9 12L15 6',
    strokeWidth: '2.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } satisfies SvgIconDefinition,

  CHEVRON_RIGHT: {
    viewBox: '0 0 24 24',
    path: 'M9 18L15 12L9 6',
    strokeWidth: '2.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } satisfies SvgIconDefinition,

  CLOSE: {
    viewBox: '0 0 24 24',
    path: 'M18 6L6 18M6 6l12 12',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } satisfies SvgIconDefinition,

  ARROW_RIGHT: {
    viewBox: '0 0 24 24',
    path: 'M5 12h14M12 5l7 7-7 7',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } satisfies SvgIconDefinition,
} as const;

