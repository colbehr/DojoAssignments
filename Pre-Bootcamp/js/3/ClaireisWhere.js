var claireLoc = [0, 0];

function reset() {
    claireLoc = [0, 0];
}

function moveBy(num1, num2) {
    claireLoc[0] += num1;
    claireLoc[1] += num2;
}

function xLocation() {
  return claireLoc[0];
}

function yLocation() {
  return claireLoc[1];
}
function distFromHome() {
  return Math.floor(((claireLoc[0] + claireLoc[1]) / 2) - 1);
}
