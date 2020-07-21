function getResult(array, MIN_GRADE = 3) {
  const results = [0, 0];
  const finalGrade = array.reduce((acc, el) => {
    results[1] += +el.percentage;
    return acc + el.grade * (el.percentage / 100);
  }, 0);
  const remaining_percentage = 100 - results[1];
  const remaining_grade =
    100 * ((MIN_GRADE - finalGrade) / remaining_percentage);
  let result = remaining_percentage !== 0 ? remaining_grade : finalGrade;

  results[0] = result.toFixed(3);
  results[1] = remaining_percentage;
  return results;
}
export default getResult;
