// move 0's

const arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function moveZeros(arr) {
    let j = -1;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }

    for (let i = j + 1; i < n; i++) {
         
        if(arr[i]!==0){
            swap(arr,i,j);
            j++;
        }
    }
}

moveZeros(arr);
console.log(arr);