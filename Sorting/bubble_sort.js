const arr = [10, 5, 2, 3, 8, 6, 7, 4, 9, 1];


function sorting(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; 
            }
        }
        if (!swapped) break;
    }
    return arr;
}

console.log(sorting(arr));