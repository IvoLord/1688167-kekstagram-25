// рандомное число между или равно значениям.
const RANDOM_NUMBER_BETWEEN = (min, max) => {
  const MIN = (min < 0) ? min = 0 : min;
  const MAX = (max < min) ? max = min : max;
  return Math.round(Math.random() * (MAX - MIN)) + MIN;
};

RANDOM_NUMBER_BETWEEN(-2, 3);

// проверка длинны коментария, проверку проходит то TRUE
const STRING_LENGHT = (string, maxLenghtString) => {
  const COMPARISON = string.length <= maxLenghtString;
  return COMPARISON;
};

STRING_LENGHT('привет', 140);
