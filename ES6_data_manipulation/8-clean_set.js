export default function cleanSet(set, str) {
  if (str === '' || typeof str !== 'string') {
    return ''
  }
  let result = Array.from(set)
    .filter(x => x.startsWith(str))
    .map(x => x.slice(str.length))
    .join('-')
  return result
}
