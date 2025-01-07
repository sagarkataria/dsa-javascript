// sqrt (x)

function sqrt(x) {

    if(x<2){
        return x;
    }
    let start = 0, end = x;
    let ans, mid;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (mid  === x/mid) {
            ans = mid;
            break;
        } else if (mid < x/mid) {
            start = mid + 1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }
    return ans;

}

console.log(sqrt(82))