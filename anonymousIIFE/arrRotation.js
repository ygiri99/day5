const arr = [1,2,3,4,5,6,7,8,'u','j','g',true,];
//k - number of rotations
let k = 7;
len = arr.length;
// IIFE function to rotate array elements k times
(function(k){for(var i=0;i<k;i++){
    let a1 = arr[0];
    for(var j=0;j<len;j++){
        if(j===len-1){
            arr[j] = a1;
        }
        else
        arr[j]=arr[j+1];
    }
}
})(k);
console.log(arr);

