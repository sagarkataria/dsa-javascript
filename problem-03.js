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

