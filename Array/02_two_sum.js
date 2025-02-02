// const arr = [2,7,11,13,15,18,20,22];
const arr = [1,2,4,6,18,25];

function twoSum(arr,target){

    let start = 0;
    let end = arr.length-1;

    while(start < end ){
        if(arr[start]+arr[end] == target){
            return true;
        }
        else if(arr[start]+arr[end] < target){
          start++;
        }else{
            end--;
        }
    }
    return false; 
}

console.log(twoSum(arr,10));