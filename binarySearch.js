function binSearch (arr, n) {
  let left = 0;
  let right = arr.length -1;

  while(left <= right) {
    let mid = (left + right) / 2;
    if(arr[mid] == n) {
        return mid;
    }
    else if(n < arr[mid]) {
        right = mid - 1;
    }
    else {
        left = mid + 1;
    }
  }
  return -1;
}

let binValue = binSearch([1,2,4,6,7,8,9], 2);
if(binValue == -1) {
    console.log("Number not found");
}
else {
    console.log(`Number found at Index ${binValue}`);
}
