export default function appendToEachArrayValue(array, appendString) {
  let newArray = []
  for (const value of array) {
    const push = appendString + value;
    newArray.push(push);
  }

  return newArray;
}