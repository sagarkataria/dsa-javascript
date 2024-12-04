// find second larges elements


function secondLarger(arr) {
    let secondLargest = -1
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

const arr = [76,67,987,534,900];

console.log(secondLarger(arr));