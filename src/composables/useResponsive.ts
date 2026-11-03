import { computed, type ComputedRef } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import { BREAKPOINTS } from '../constants/breakpoints';
import type { NavDirection } from '../types';

export function useResponsive() {
  const isMobileQuery = useMediaQuery(BREAKPOINTS.MOBILE_QUERY);
  const isTabletQuery = useMediaQuery(BREAKPOINTS.TABLET_QUERY);

  const isMobile: ComputedRef<boolean> = computed(() => isMobileQuery.value);
  const isTablet: ComputedRef<boolean> = computed(() => isTabletQuery.value && !isMobileQuery.value);
  const isDesktop: ComputedRef<boolean> = computed(() => !isTabletQuery.value);

  const navDirection: ComputedRef<NavDirection> = computed(() =>
    isTabletQuery.value ? 'row' : 'col'
  );
  const bigScreen: ComputedRef<boolean> = computed(() => !isMobileQuery.value);

  return { isMobile, isTablet, isDesktop, navDirection, bigScreen };
}
