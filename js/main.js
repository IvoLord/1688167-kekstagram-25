// рандомное число между или равно значениям.
const RANDOM_NUMBER_BETWEEN = (min, max) => {
  if (min < 0) {
    min = 0;
  }

  if (max < min) {
    max = min;
  }

  return Math.round(Math.random() * (max - min)) + min;
};

RANDOM_NUMBER_BETWEEN(-2, 3);

// проверка длинны коментария, проверку проходит то TRUE
const STRING_LENGHT = (string, maxLenghtString) => {
  const COMPARISON = string.length <= maxLenghtString;
  return COMPARISON;
};

STRING_LENGHT('привет', 140);
