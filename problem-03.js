// Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/


// complexity o(n2)

function productArray(arr){
    let n = arr.length;
    let prod = new Array(n).fill(1);

    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++){
            if(i!==j){
                prod[i] *= arr[j];
            }
        }
    }
    return prod;
}
const arr = [10, 3, 5, 6, 2];
console.log(productArray(arr));

// o(n)
function productArray(arr) {
    let n = arr.length;
    let result = new Array(n).fill(1);

    // Step 1: Compute prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= arr[i];
    }

    // Step 2: Compute suffix products and multiply with prefix
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= arr[i];
    }

    return result;
}

const arr = [10, 3, 5, 6, 2];
console.log(productArray(arr)); // Output: [180, 600, 360, 300, 900]

