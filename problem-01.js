//Pair with given Sum (Two Sum)
//https://leetcode.com/problems/two-sum/

function twoSum(arr, target) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for(let j = i+1 ; j < n ; j++){
            if((arr[j]+arr[i])===target) return true;
        }
    }
    return false;
}

let arr = [0, -1, 2, -3, 1];
let target = -2;
const result = twoSum(arr, target);

if(result){
    console.log('True')
}else{
    console.log("False")
}