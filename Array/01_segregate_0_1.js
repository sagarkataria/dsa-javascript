const arr = [0,1,0,0,1,0,1];

function segregate(arr){
   let start = 0
   let end   = arr.length - 1;

   while(start < end){
     if(arr[start] == 0){
        start++;
     }
     else
     {
       if(arr[end]==0){
        [arr[start],arr[end]] = [arr[end],arr[start]];
          end--,start++;
       }else{
        end--;
       }
     }
   }
   return arr;
}

console.log(segregate(arr));