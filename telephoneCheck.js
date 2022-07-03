function telephoneCheck(str) {
  let numValidate = [
    "555-555-5555",
    "(555)555-5555",
    "(555) 555-5555",
    "555 555 5555",
    "5555555555",
    "1 555 555 5555",
    "1 (555) 555-5555",
  ];
  let filtro = numValidate.find((elem) => str == elem);
  console.log(filtro ? true : false);
  return filtro ? true : false;
}

telephoneCheck("1 (555) 555-5555");
