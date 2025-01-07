// sqrt (x)

function sqrt(x) {

    let start = 0, end = x;
    let ans, mid;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (mid * mid === x) {
            ans = mid;
            break;
        } else if (mid * mid < x) {
            start = mid + 1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }
    return ans;

}

console.log(sqrt(82))