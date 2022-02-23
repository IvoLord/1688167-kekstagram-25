// рандомное число между или равно значениям.
const randomNumberBetween = (min, max) => {
  if (min < 0) {
    min = 0;
  }

  if (max < min) {
    max = min;
  }

  return Math.round(Math.random() * (max - min)) + min;
};

randomNumberBetween(-2, 3);

// проверка длинны коментария, проверку проходит то TRUE
const stringLenght = (string, maxLenghtString) => {
  const comparison = string.length <= maxLenghtString;
  return comparison;
};

stringLenght('привет', 140);
