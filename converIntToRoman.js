/**
 * If the number is greater than 3, return 'No se puede representar', otherwise, if the number is
 * between 1 and 3, add the corresponding letter to the string, otherwise, if the number is 4, add the
 * corresponding letters to the string, otherwise, if the number is between 5 and 8, add the
 * corresponding letters to the string, otherwise, if the number is 9, add the corresponding letters to
 * the string.
 * @param num - the number to convert
 * @returns A string with the roman number.
 */

function convertToRoman(num) {
  const millar = Math.floor((num / 1000) % 10);
  const centenar = Math.floor((num / 100) % 10);
  const decena = Math.floor((num / 10) % 10);
  const unidad = Math.floor((num / 1) % 10);

  let romano = "";

  if (millar > 3) {
    return "No se puede representar";
  } else if (millar >= 1 && millar <= 3) {
    romano += "M".repeat(millar);
  }

  if (centenar >= 1 && centenar <= 3) {
    romano += "C".repeat(centenar);
  } else if (centenar == 4) {
    romano += "CD";
  } else if (centenar >= 5 && centenar < 9) {
    let count = centenar - 5;
    romano += "D" + "C".repeat(count);
  } else if (centenar === 9) {
    romano += "CM";
  }

  if (decena >= 1 && decena <= 3) {
    romano += "X".repeat(decena);
  } else if (decena == 4) {
    romano += "XL";
  } else if (decena >= 5 && decena < 9) {
    let count = decena - 5;
    romano += "L" + "X".repeat(count);
  } else if (decena === 9) {
    romano += "XC";
  }

  if (unidad >= 1 && unidad <= 3) {
    romano += "I".repeat(unidad);
  } else if (unidad === 4) {
    romano += "IV";
  } else if (unidad >= 5 && unidad < 9) {
    let count = unidad - 5;
    romano += "V" + "I".repeat(count);
  } else if (unidad == 9) {
    romano += "IX";
  }
  return `${romano}`;
}

convertToRoman(36);
