import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'

export function useResponsive() {
  const isMobileQuery = useMediaQuery('(max-width: 460px)')
  const isTabletQuery = useMediaQuery('(max-width: 890px)')
  
  const isMobile = computed(() => isMobileQuery.value)
  const isTablet = computed(() => isTabletQuery.value && !isMobileQuery.value)
  const isDesktop = computed(() => !isTabletQuery.value)
  
  const navDirection = computed(() => isTabletQuery.value ? 'row' : 'col')
  const bigScreen = computed(() => !isMobileQuery.value)
    
  return { isMobile, isTablet, isDesktop, navDirection, bigScreen }
}