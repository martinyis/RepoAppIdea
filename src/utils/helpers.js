export function getNCharacters(str, n) {
  if (str.length <= n) {
    return str;
  } else {
    return str.substring(0, n) + "..";
  }
}
