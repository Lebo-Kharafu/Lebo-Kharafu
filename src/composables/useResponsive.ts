import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

export function useResponsive() {
  const { width } = useWindowSize()
  
  const isMobile   = computed(() => width.value <= 460)
  const isTablet   = computed(() => width.value <= 830 && width.value > 460)
  const isDesktop  = computed(() => width.value > 830)
  const navDirection = computed(() => width.value <= 830 ? 'row' : 'col')
  const bigScreen  = computed(() => width.value > 460)
    
  return { width, isMobile, isTablet, isDesktop, navDirection, bigScreen }
}