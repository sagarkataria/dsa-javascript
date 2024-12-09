// find missing number from sorted array 

// 01-> bruite force solution

function findMissing(arr, target) {
    let n = arr.length;
    for (let i = 1; i < target; i++) {
        let flag = 0;
        for (let j = 0; j < n; j++) {
            if (arr[j] === i) {
                flag = 1;
                break;
            }
            // console.log(arr[j])
        }
        if (flag === 0) {
            return i
        }
    }
}

const arr = [1, 2, 4, 5];

// console.log(findMissing(arr,5))

// 02 better solution 
const arr1 = [1, 2, 3, 5];
console.log(findMissing2(arr1, 5));
function findMissing2(arr1, target) {
    let Totalsum = target * (target + 1) / 2;
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    let result = Totalsum - sum;

    return result
}