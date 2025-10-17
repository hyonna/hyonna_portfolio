export const easeOutExpo = [0.22, 1, 0.36, 1] as const
export const heroParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } }
} as const
export const heroItem = (fast = false) => ({
  hidden: { opacity: 0, y: 22, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: fast ? 0.3 : 0.7, ease: easeOutExpo as any }
  }
})
