export default function updateUniqueItems(map){
  let updatedList = map;
  for (const [key, value] of updatedList.entries()) {
    if (typeof value != 'number') {
        updatedList.set(key, 1);
    } else if (value === 1){
        updatedList.set(key, 100)        
    }
  }
  return updatedList
}
