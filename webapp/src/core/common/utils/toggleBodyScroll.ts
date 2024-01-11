export function toggleBodyScroll(toggle: boolean) {
  if (toggle) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}
