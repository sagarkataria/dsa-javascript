const arr = [7, 4, 2, 3, 4, 5]

function sorting(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(sorting(arr));