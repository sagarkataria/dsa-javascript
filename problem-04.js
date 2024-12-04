// find second larges elements


function secondLarger(arr) {
    let secondLargest = Number.MIN_SAFE_INTEGER
    let largest = arr[0];
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i] > largest) {
           largest = arr[i];
        }
        if(arr[i]>secondLargest && arr[i]<largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const arr = [1, 2, 4, 7, 7, 5];

console.log(secondLarger(arr));