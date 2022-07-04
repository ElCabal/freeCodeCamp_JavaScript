/**
 * If the character is a letter, find the index of the character in the input string, then use that
 * index to find the corresponding character in the output string and add it to the decode string. If
 * the character is not a letter, just add it to the decode string.
 * @param str - the string to be decoded
 * @returns The decoded string.
 */
function rot13(str) {
  const input = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  const output = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decode = "";
  const regEx = /[A-Z]/;
  for (let i = 0; i < str.length; i++) {
    if (regEx.test(str[i])) {
      const indexChar = input.indexOf(str[i]);
      decode += output[indexChar];
    } else {
      decode += str[i];
    }
  }
  return decode;
}

rot13("SERR PBQR PNZC");
