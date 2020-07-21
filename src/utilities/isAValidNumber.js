export default function isAValidNumber(text, maxGrade = 5) {
  if (text === "") {
    return true;
  }
  const result = Number(text);
  if (!result) {
    return false;
  }
  // if (maxGrade > 5) {
  //   return -1;
  // }
  return result;
}
