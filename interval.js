setTimeout(() => {
  console.log("time out");
  clearInterval(int);
}, 5000);

const int = setInterval(() => {
  console.log("set interval");
}, 1000);

console.log(__dirname);
console.log(__filename);