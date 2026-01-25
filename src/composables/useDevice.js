import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function useDevice() {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isMobile = breakpoints.smaller('md')

  return { isMobile }
}
