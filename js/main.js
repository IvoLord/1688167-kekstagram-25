// рандомное число между или равно значениям
function randomNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

randomNumberBetween(0, 100);

// проверка длинны коментария, проверку проходит то TRUE
function stringLenth(string, maxLenghtString) {
  if (string.length <= maxLenghtString) {
    return true;
  }

  return false;
}

stringLenth('привет dfsdgsd gdsf g sdfhdfghf gj fdg j gfh jgf hjgf hj g', 140);
