// Rotate Array by K places

function leftRotateArray(arr) {
    const n = arr.length;
    if (n === 0) return arr;
    let temp = arr[0];

    for (let i = 1; i < n; i++) {
        arr[i - 1] = arr[i];
    }
    arr[n-1] = temp;
    return arr;
}

const arr = [2, 5, 6, 3, 7, 4];

console.log(leftRotateArray(arr));