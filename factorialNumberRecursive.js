function fac(n) {
  if(n >=1) {
    return n * fac(n-1);
  }
  else {
    return 1;
  }
}
let facNum = prompt("enter a value");
let facOfNum = fac(facNum);
console.log(facOfNum);

