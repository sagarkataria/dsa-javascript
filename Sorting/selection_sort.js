const arr = [10, 5, 2, 3, 8, 6, 7, 4, 9, 1];


function sorting(arr){
   const n = arr.length
   for(let i = 0 ; i < n ; i++){
     let index = i;
     for(let j = i+1 ; j < n ; j++){
       if(arr[index]>arr[j]) index = j;
     }
     [arr[i],arr[index]] = [arr[index],arr[i]]
   }
   return arr;
}

console.log(sorting(arr));