// Rotate Array by 1 places

function leftRotateArray(arr) {
    const n = arr.length;
    if (n === 0) return arr;
    let temp = arr[0];

    for (let i = 1; i < n; i++) {
        arr[i - 1] = arr[i];
    }
    arr[n - 1] = temp;
    return arr;
}

const arr = [2, 5, 6, 3, 7, 4];

// console.log(leftRotateArray(arr));

// Rotate Array by k place

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const k = 2;

function leftRotateArrayByK(arr, k) {
    const n = arr.length;
    let d = k % n;

    let temp = [];

    for (let i = 0; i <= d; i++) {
        temp.push(arr[i]);
    }

    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }
    for (let i = n - d; i < n; i++) {
          arr[i] = temp[i-(n-d)];
    }
    return arr;

}
console.log(leftRotateArrayByK(arr1, k))
// const n = arr1.length;
// const result = arr1.slice(-k).concat(arr1.slice(0, -k));
// console.log(result);
