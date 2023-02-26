// Checks if entire object is empty
export const isObjEmpty = (obj) => {
   return Object.values(obj).every(x => x === null || x === undefined || x === 0 || x === '');
}

// Checks if any property is empty
export const isObjEmptyAny = (obj) => {
   return Object.values(obj).some(x => x === null || x === undefined || x === 0 || x === '');
}
