const arr = [4, 5, 6, 7, 0, 1, 2];

function findMinSorted(arr) {
    let start = 0, end = arr.length - 1 , ans = arr[0];
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
         
        if(arr[0]<=arr[mid]){
            start = mid+1;
        }else{
            ans = arr[mid];
            end = mid-1;
        }
    }
    return ans;
}

console.log(findMinSorted(arr));