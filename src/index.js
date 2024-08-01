module.exports = function reverse (n) {
  str = String(Math.abs(n)).split("").reverse().join("");
  return Number(str);
}