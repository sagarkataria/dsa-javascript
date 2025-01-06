// find first and last position of sorted array
const nums = [5, 7, 7, 8, 8, 10]
const target = 8

function searchRange(arr, target) {
    let start = 0; let end = arr.length - 1; let first = -1; let last = -1;

    // find first position
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == target) {
            first = mid;
            end = mid - 1;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    // find last position
    start = 0; end = arr.length - 1;
    while(start<=end){
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == target) {
            last = mid;
            start = mid + 1;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return [first, last];
}

console.log(searchRange(nums, target));