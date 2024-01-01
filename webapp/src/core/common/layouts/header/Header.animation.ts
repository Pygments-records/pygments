export const headerMenuItemVariants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(35px)',
    transition: { duration: 0.3, type: 'spring', damping: 20, bounce: 0 },
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: { duration: 0.3, type: 'spring', damping: 20, bounce: 0 },
  },
  exit: {
    opacity: 0,
    transform: 'translateY(-35px)',
    transition: { duration: 0.3, type: 'spring', damping: 20, bounce: 0 },
  },
}
