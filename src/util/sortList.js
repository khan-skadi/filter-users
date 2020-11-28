export const sortByAge = (arr) => {
  return arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}