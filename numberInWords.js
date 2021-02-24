function getRandomNum(max) {
  return Math.floor(1 + Math.random() * (max + 1));
}

function numberInWords(num) {
  let digits = {
    0: "",
    1: "один",
    2: "два",
    3: "три",
    4: "четыре",
    5: "пять",
    6: "шесть",
    7: "семь",
    8: "восемь",
    9: "девять",
  };

  num += "";
  let result = "";

  for (let i = 0; i < num.length; ++i) {
    if (num.length - i === 3 && i != 0) result = thousands(result, i, num);

    result += " " + digits[num[i]];

    if ((num.length - i) % 3 == 0) result = hundreds(result, i, num);
    if ((num.length - i) % 3 == 2) {
      if (num[i] == "1") {
        result = result.slice(0, -4);
        result = result.trim();
        result += " " + digits[num[++i]];

        result = fromTenToTwenty(result, i, num);
      } else result = tens(result, i, num);
    }
  }

  return result.trim();
}

function thousands(result, i, num) {
  if (num[i - 1] == "1" && num[i - 2] != "1")
    result = result.slice(0, -2) + "на";
  if (num[i - 1] == "2" && num[i - 2] != "1")
    result = result.slice(0, -1) + "е";
  result += " тысяч";
  if (num[i - 1] == "1" && num[i - 2] != "1") result += "а";
  if (
    (num[i - 1] == "2" || num[i - 1] == "3" || num[i - 1] == "4") &&
    num[i - 2] != "1"
  )
    result += "и";
  return result;
}

function hundreds(result, i, num) {
  if (num[i] == "0") return result.trim();
  if (num[i] == "1") return result.slice(0, -4) + "сто";
  if (num[i] == "2") return result.slice(0, -1) + "ести";
  if (num[i] == "3" || num[i] == "4") return (result += "ста");
  return (result += "сот");
}

function tens(result, i, num) {
  if (num[i] == "0") return result.trim();
  if (num[i] == "2" || num[i] == "3") return result + "дцать";
  if (num[i] == "4") return result.slice(0, -6) + "сорок";
  if (num[i] == "9") return result.slice(0, -2) + "носто";
  return (result += "десят");
}

function fromTenToTwenty(result, i, num) {
  if (num[i] == "0") return result + "десять";
  if (num[i] == "2") result = result.slice(0, -1) + "e";
  if (num[i] > 3 && num[i] <= 9) result = result.slice(0, -1);
  return result + "надцать";
}
