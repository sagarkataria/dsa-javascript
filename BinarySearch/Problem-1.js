const arr = [2, 4, 7, 11, 1, 19, 21];

function searchKey(arr, key) {
    let start = 0;
    let end = arr.length;
    
    while (start <= end) {
        let m = Math.floor((start + end) / 2);
        // or for m = Math.floor(start+(end-start)/2)
        if (arr[m] === key) {
            return m;
        }
        else if (arr[m] < key) {
            start = m + 1;
        } else {
            end = m - 1;
        }
    }
    return -1;  
}
console.log(searchKey(arr, 11));