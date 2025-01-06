// Search Insert Position
const arr = [1,4,6,8,10,14,16,18];
const target = 5;

function searchPosition(arr,target){
   let start = 0 ; let end = arr.length-1 ; ans = arr.length;

   while(start<=end){
    let mid = Math.floor((start+end)/2);
    if(arr[mid]===target){
        and = mid;
        break;
    }else if(arr[mid]<target){
        start = mid+1;
    }else{
        ans = mid;
        end = mid-1;
    }
   }
   return ans;
}

console.log(searchPosition(arr,target));