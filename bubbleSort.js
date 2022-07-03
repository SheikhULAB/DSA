const numbers = [45,87,90,56,12,11,6,52];

function bubbleSort(arr) {
    for( let i = 0; i < arr.length; i++) {
        for(let j= 0; j < arr.length - 1; j++) {
          if(arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          }
        }
    }
    return arr;
}

const sorted = bubbleSort(numbers);
console.log(sorted);