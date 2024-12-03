// Stock Buy and Sell – Max one Transaction Allowed

const arr = [7,1,5,3,6,4];

function maxProfit(arr){
  const n = arr.length;
  let res = 0;
  for(let i = 0 ; i < n ; i++){
    for(let j = i+1 ; j < n ; j++){
        res = Math.max(res,arr[j]-arr[i]);
    }
  }
  return res;
}


const result =  maxProfit(arr);
console.log(result)
