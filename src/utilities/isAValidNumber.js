export default function isAValidNumber(text) {
  if (text === "") {
    return true;
  }
  const result = Number(text);
  if (!result) {
    return false;
  }
  return result;
}
