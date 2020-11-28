export const sortByAge = (arr) => {
  return arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}

export const sortById = (arr) => {
  return arr.sort((a, b) => (a.id > b.id ? 1 : -1));
}