export const validateUrl = (url: string) => {
  const regex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
  return regex.test(url)
}

export const validateRequired = (el: unknown) => {
  return typeof el === 'undefined'
}
