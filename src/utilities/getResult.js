function getResult(array) {
  const results = [0, 0];
  const finalGrade = array.reduce((acc, el) => {
    results[1] += +el.percentage;
    return acc + el.grade * (el.percentage / 100);
  }, 0);
  results[0] = finalGrade;
  return results;
}
export default getResult;
