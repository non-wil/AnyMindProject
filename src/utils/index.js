export const trimStringAppendDot = (string, length = 50) => {
  return string.length > length ? string.substring(0, length) + '...' : string
}
