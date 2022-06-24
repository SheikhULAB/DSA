function lin(arr, n) {
  for(let i = 0; i < arr.length; i++) {
     if(arr[i] == n) {
        return arr.indexOf(arr[i]);
     }
  }
  return -1;
}

let linValue = lin([2,3,76,1,0,4], 1);

if(linValue == -1) {
    console.log("Number not found");
}
else {
    console.log(`Number found at Index ${linValue}`);
}
