"use strict";

function getRandomArray(num) {
  let arr = [];
  for (let i = 0; i < num; ++i) {
    arr.push(Math.floor(1 + Math.random() * 6));
  }
  return arr;
}

function countScore(arr) {
  let scoreArray = new Array(6).fill(0);
  for (let i = 0; i < arr.length; ++i) {
    scoreArray[arr[i] - 1]++;
  }

  let triplets = [1000, 200, 300, 400, 500, 600];
  let singleton = [100, 0, 0, 0, 50, 0];
  let score = 0;
  for (let i = 0; i < scoreArray.length; ++i) {
    if (scoreArray[i] >= 3) {
      scoreArray[i] -= 3;
      score += triplets[i];
    }
    while (scoreArray[i] > 0) {
      score += singleton[i];
      scoreArray[i]--;
    }
  }

  return score;
}
