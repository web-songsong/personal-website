export function isString (value) {
  return value !== '' && value !== null && value !== undefined
}

export function isExist (value) {
  return value !== null && value !== undefined
}