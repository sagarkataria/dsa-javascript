// find second minimum number

function secondMinimum(arr) {
    let min = arr[0];
    let secondMin = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] < secondMin && arr[i] > min) {
            secondMin = arr[i];
        }
    }
    return secondMin;
}

const arr = [1, 2, 4, 7, 7, 5];

console.log(secondMinimum(arr));