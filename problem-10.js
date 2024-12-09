//maximum consicutive one's


const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1];
console.log(findMaxConsecutiveOnes(arr))
function findMaxConsecutiveOnes(arr) {
    let n = arr.length;
    let maxi = 0;
    let counti = 0;

    for(let i = 0 ; i < n ; i++){
        if(arr[i]==1){
            counti++;
            maxi = Math.max(maxi,counti);
        }else{
            counti = 0;
        }
    }
    return maxi;
}