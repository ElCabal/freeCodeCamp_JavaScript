/**
 * It splits the string into an array, filters out all non-alphanumeric characters, joins the array
 * back into a string, and then compares the string to its reverse.
 * @param str - the string to be tested
 * @returns A boolean value.
 */
function palindrome(str) {
  let arr1 = str
    .split("")
    .filter((elem) => !elem.match(/[\s\.\_\,\\\/\-\()\|]/));

  let string1 = arr1.join("").toLowerCase();

  let string2 = arr1.reverse().join("").toLowerCase();

  return string1 === string2 ? true : false;
}

console.log(palindrome("eye"));
