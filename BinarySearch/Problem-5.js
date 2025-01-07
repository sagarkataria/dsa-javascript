const arr = [2, 4, 6, 8, 10, 15, 9, 7, 6, 4, 1];

function peakIndex(arr) {
    let start = 0, end = arr.length - 1, mid;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);

        // Check if mid is a peak
        if ((mid == 0 || arr[mid] > arr[mid - 1]) &&
            (mid == arr.length - 1 || arr[mid] > arr[mid + 1])) {
            return mid;
        }

        // Move to the side of the larger neighbor
        if (mid > 0 && arr[mid] < arr[mid - 1]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

console.log(peakIndex(arr));