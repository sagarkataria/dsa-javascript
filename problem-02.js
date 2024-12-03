// // Stock Buy and Sell – Max one Transaction Allowed

// const arr = [7,1,5,3,6,4];

// function maxProfit(arr){
//   const n = arr.length;
//   let res = 0;
//   for(let i = 0 ; i < n ; i++){
//     for(let j = i+1 ; j < n ; j++){
//         res = Math.max(res,arr[j]-arr[i]);
//     }
//   }
//   return res;
// }


// const result =  maxProfit(arr);
// console.log(result)


// time Complexity o(n) qus

function maxProfit(prices) {
    let buy = prices[0]; 
    let profit = 0;    

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } else if (prices[i] - buy > profit) {
            profit = prices[i] - buy;
        }
    }

    return profit >= 0 ? profit : 0; 
}
console.log(maxProfit([7,1,5,3,6,4]))    


// 

function maxProfit(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER; 
    let maxProfit = 0;                    

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);       
        maxProfit = Math.max(maxProfit, price - minPrice); 
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]))

