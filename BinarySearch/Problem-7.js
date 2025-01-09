
var findKthPositive = function(arr, k) {
    let start = 0, end = arr.length - 1, ans = arr.length;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] - mid - 1 >= k) { 
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ans + k;
};

const arr = [2, 3, 4, 7, 11];
const k = 5;

console.log(findKthPositive(arr, k)); // Output: 9

