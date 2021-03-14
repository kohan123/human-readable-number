module.exports = function toReadable (number) {
  const numbers = ["one","two","three","four","five","six","seven","eight","nine","ten"];
  const tenToTwenty = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const dozens = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

  let res = [];
  let temp = number;
  const hundreds = Math.floor(number / 100);

  if (temp === 0) {
     return "zero";
  }

  if (hundreds >= 1) {
    res.push(numbers[hundreds - 1] + " hundred");
    temp = temp - (hundreds * 100);
  }
  const tens = Math.floor(temp / 10);
  if (tens > 1) {
      res.push(dozens[tens - 1]);
      temp = temp - (tens * 10);
  }
  if (temp > 10 && temp < 20) {
      res.push(tenToTwenty[temp - 10 - 1]);
  } else {
      if (temp > 0) {
          res.push(numbers[temp - 1]);
      } 
  }
  return res.join(" ");
}
